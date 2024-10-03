import AboutBtn from "./buttons/aboutbtn";
import BlogBtn from "./buttons/blogbtn";
import ContactBtn from "./buttons/contactbtn";
import ProjectsBtn from "./buttons/projectbtn";
import ResumeBtn from "./buttons/resumebtn";
import RsPaperBtn from "./buttons/rspaperbtn";
import HorizontalScroll from "./hrscroll";

export default function GoToBtnHome(){
    return(
        <div className="px-3">
            <HorizontalScroll>
                <ProjectsBtn/>
                <ResumeBtn/>
                <BlogBtn/>
                <AboutBtn/>
                <ContactBtn/>
                <RsPaperBtn/>

            </HorizontalScroll>
        </div>
    )
}