import ProjectsMain from "./components/projectmain";
import HeadingHome from "./components/headings/headinghome";
import PortBtn from "./components/buttons/portbtn";
import HorizontalScroll from "./components/hrscroll";
import GoToBtnHome from "./components/gotobtnshome";
export default function Home() {
  return ( 
    <div>
      <main className="px-0 md:px-3 lg:px-5 m-1 md:m-4 ">
        <PortBtn/><br></br>
        <HeadingHome text="Projects"/>
        <ProjectsMain/>
        <GoToBtnHome/>
        <HeadingHome text="Recent Blog"/>
        
      </main>
      <footer>
      </footer>
    </div>
  );
}
