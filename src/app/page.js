import HeadingMain from "./components/headingmain.jsx"
import ProjectsComp from "./components/projectsmain";
import HeadingHome from "./components/headinghome.jsx";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-0 md:m-4 lg:p-4">
        <HeadingHome text="Projects"/>
        <ProjectsComp/>
        <HeadingHome text="Resume"/>
      </main>
      <footer p-4 m-4>
  
      </footer>
    </div>
  );
}