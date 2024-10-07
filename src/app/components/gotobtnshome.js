import AboutBtn from "./buttons/aboutbtn";
import ContactBtn from "./buttons/contactbtn";
import ProjectsBtn from "./buttons/projectbtn";
import ResumeBtn from "./buttons/resumebtn";
import HorizontalScroll from "./hrscroll";

export default function GoToBtnHome(){
    return(
        <div>
            <HorizontalScroll>
                <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft">
                <ProjectsBtn/>
                <ResumeBtn/>
                <AboutBtn/>
                <ContactBtn/>

                </div> 
            </HorizontalScroll>
        </div>
    )
}