"use client";
import Button1 from "./button1"
import { useTheme } from "@/app/context/Themescontext";
export default function BlogBtn(){
    const { isThemeOn } = useTheme();
    return(
        <div className="group inline">
        <Button1
          text="Go to my Blog page"
          href="/blog"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className={`transform transition-transform duration-300 group-hover:scale-110 ${
                isThemeOn
                  ? "fill-black group-hover:fill-white"
                  : "fill-white group-hover:fill-black"
              }`}
            >
              <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
            </svg>
          }
        />
      </div>
    )
}