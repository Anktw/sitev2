import HeadingHome from "../components/headinghome";
import ProjectsPort from "../components/projectsport.js";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects"/>
        <ProjectsPort/>
        <HeadingHome text="Resume"/>
      </main>
      <footer p-4 m-4>
  
      </footer>
    </div>
  );
}