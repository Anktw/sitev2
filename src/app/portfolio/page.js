import HeadingHome from "../components/headings/headinghome";
import ProjectsPort from "../components/projectsport";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects"/>
        <ProjectsPort/>
      </main>
      <footer>
  
      </footer>
    </div>
  );
}