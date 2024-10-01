import HeadingMain from "./components/headingmain.jsx"
import ProjectsComp from "./components/projectsmain";

import Button1 from "./components/button1";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-0 md:m-4 lg:p-4">
        <HeadingMain text="Projects"/>
        <ProjectsComp/>
        <HeadingMain text="Resume"/>
      </main>
      <footer p-4 m-4>
  
      </footer>
    </div>
  );
}