"use client"
import PortBtn from "./ui/buttons/portbtn";
import HorizontalScroll from "./hrscroll";
import LogInBtn from "./ui/buttons/loginbtn"
import SignUpBtn from "./ui/buttons/signupbtn"
import AccountBtn from "./ui/buttons/accountbtn"
import LoggedUser from "./Loggeduser";



export default function TopBtnsHome() {

  return (
    <div>
      {/* Greeting above the buttons */}
      

      <HorizontalScroll>
        <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft ">
          <PortBtn />
          <LoggedUser/>
        </div>
      </HorizontalScroll>
    </div>
  )
}