"use client"
import PortBtn from "./ui/buttons/portbtn";
import HorizontalScroll from "./hrscroll";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { useEffect, useState } from "react";
import LogInBtn from "./ui/buttons/loginbtn"
import SignUpBtn from "./ui/buttons/signupbtn"
import AccountBtn from "./ui/buttons/accountbtn"

type User = {
  email: string
  username: string
  first_name?: string
  last_name?: string
}

export default function TopBtnsHome() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [cachedUsername, setCachedUsername] = useState<string | null>(null)
  const maxRetries = 3;
  const retryDelay = 2000; // 2 seconds

  useEffect(() => {
    const cached = localStorage.getItem("cachedUsername")
    if (cached) {
      setCachedUsername(cached)
    }

    let cancelled = false;

    async function load(retryCount = 0) {
      try {
        const res = await fetchWithAuth("/api/user/me")
        if (!res.ok) {
          if (cached && retryCount < maxRetries) {
            setTimeout(() => {
              if (!cancelled) {
                load(retryCount + 1)
              }
            }, retryDelay)
            return
          }
          setCachedUsername(null)
          setUser(null)
          setLoading(false)
          return
        }
        const data = await res.json()
        setUser(data)
        setLoading(false)
      } catch {
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {loading ? (
        cachedUsername ? (
          <span>Hello {cachedUsername}</span>
        ) : (
          <span>Checking...</span>
        )
      ) : user ? (
        <span>Hello {user.username}</span>
      ) : (
        <>
          Please log in to access all projects with full flow,
          It will be fun...
          You will be logged in all projects
        </>
      )}
      <HorizontalScroll>
        <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft ">
          <PortBtn />
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <span><AccountBtn/></span>
          ) : (
            <>
              <LogInBtn />
              <SignUpBtn/>
            </>
          )}
        </div>
      </HorizontalScroll>
    </div>
  )
}