"use client";
import { useTheme } from "../context/Themescontext";
import Button1 from "./button1";
export default function PortBtn(){
    const { isThemeOn } = useTheme();
    return(
        <div className="group inline">
        <Button1
          text="Go to my Portfolio"
          href="/portfolio"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45 h-6 w-6 ${
                isThemeOn
                  ? "fill-black group-hover:fill-white"
                  : "fill-white group-hover:fill-black"
              }`}
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          }
        />
      </div>
    )
}