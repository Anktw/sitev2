"use client"
import { useEffect, useState } from "react"
import Button1 from "./button1"

export default function SignUpBtn() {
  const [signupHref, setSignupHref] = useState("https://accounts.unkit.site/auth/user/signup")

  useEffect(() => {
    const currentUrl = window.location.href
    const encodedRedirect = encodeURIComponent(currentUrl)
    setSignupHref(`https://accounts.unkit.site/auth/user/signup?redirect=${encodedRedirect}`)
  }, [])

  return (
    <div className="inline">
      <Button1
        text="SignUp"
        href={signupHref}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45`}
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        }
      />
    </div>
  )
}
