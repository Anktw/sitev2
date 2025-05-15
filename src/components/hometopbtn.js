"use client"
import PortBtn from "./ui/buttons/portbtn"
import HorizontalScroll from "./hrscroll"
import LoggedUser from "./Loggeduser"

export default function TopBtnsHome() {

  return (
    <div>
      <HorizontalScroll>
        <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft ">
          <PortBtn />
          <LoggedUser/>
        </div>
      </HorizontalScroll>
    </div>
  )
}