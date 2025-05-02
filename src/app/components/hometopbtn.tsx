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

  useEffect(() => {
    async function load() {
      try {
        const res = await fetchWithAuth("/api/user/me")
        if (!res.ok) throw new Error("Not authorized")
        const data = await res.json()
        setUser(data)
      } catch {
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div>{loading ? (
      <span>Checking...</span>
    ) : user ? (
      <span>Hello {user.username}</span>
    ) : (
      <>
        Please create account to access all projects with full flow,
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