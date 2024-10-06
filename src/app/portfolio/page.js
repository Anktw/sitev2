import HeadingHome from "../components/headings/headinghome";
import ProjectsPort from "../components/projectsport";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects"/>
        <ProjectsPort/>
      </main>
      <footer className="w-full justify-center content-center p-3 md:p-6">
  <div className="flex justify-between">
  </div>
      </footer>
    </div>
  );
}