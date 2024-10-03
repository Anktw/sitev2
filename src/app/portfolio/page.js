import HeadingHome from "../components/headings/headinghome";
import ProjectsPort from "../components/projectsport";
import ResumeFrame from "../components/resumeframe";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects"/>
        <ProjectsPort/>
        <HeadingHome text="Resume"/>
        <ResumeFrame/>
      </main>
      <footer>
  
      </footer>
    </div>
  );
}