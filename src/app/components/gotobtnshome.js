import AboutBtn from "./ui/buttons/aboutbtn";
import ContactBtn from "./ui/buttons/contactbtn";
import ProjectsBtn from "./ui/buttons/projectbtn";
import ResumeBtn from "./ui/buttons/resumebtn";
import HorizontalScroll from "./hrscroll";

export default function GoToBtnHome() {
  return (
    <div>
      <HorizontalScroll>
        <div className="flex gap-5 mx-4 md:mx-3 animate-fadeInLeft">
          <ProjectsBtn />
          <ResumeBtn />
          <AboutBtn />
          <ContactBtn />
        </div>
      </HorizontalScroll>
    </div>
  );
}
