import { useState, useEffect } from "react";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import AccountBtn from "./ui/buttons/accountbtn";
import LogInBtn from "./ui/buttons/loginbtn";
import SignUpBtn from "./ui/buttons/signupbtn"



type User = {
  email: string
  username: string
  first_name?: string
  last_name?: string
}

export default function LoggedUser(){
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
        <span>Loading...</span>
      </div>
    );
  }
  return(
    <div>
        {loading ? (
        cachedUsername ? (
          <span className="font-semibold"><AccountBtn/></span>
        ) : <div>loading...</div>
      ) : user ? (
        <span className="font-semibold"><AccountBtn/></span>
      ) : <div className="flex flex-row gap-4"><LogInBtn/><SignUpBtn/></div>}
    </div>
  )
}