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
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("user");
    }
    return true;
  });
  const [cachedUsername, setCachedUsername] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false);
  const maxRetries = 3;
  const retryDelay = 2000; // 2 seconds

  useEffect(() => {
    setMounted(true);

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
  }, [])

  if (!mounted) {
    return (
      <div style={{ minHeight: 60 }}>
        {/* Skeleton or placeholder */}
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Greeting above the buttons */}
      {loading ? (
        cachedUsername ? (
          <span className="font-semibold">Hello {cachedUsername}</span>
        ) : null
      ) : user ? (
        <span className="font-semibold">Hello {user.username}</span>
      ) : null}

      <HorizontalScroll>
        <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft ">
          <PortBtn />
          {loading ? (
            cachedUsername ? (
              <AccountBtn label="Manage my account" />
            ) : (
              <span>Loading...</span>
            )
          ) : user ? (
            <AccountBtn label="Manage my account" />
          ) : (
            <>
              <LogInBtn />
              <SignUpBtn />
            </>
          )}
        </div>
      </HorizontalScroll>
    </div>
  )
}