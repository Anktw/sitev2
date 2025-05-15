import AboutComp from "@/components/about"
import HeadingHome from "@/components/ui/headings/headinghome"
import ProjectsUnified from "@/components/ProjectsUnified"
import { getProjects } from "@/lib/projects"
import LoadingBar from "@/components/loader"

export const metadata = {
  title: "Portfolio | Ankit Tiwari",
  description: "Portfolio of Ankit Tiwari.",
}

export default async function Home() {
  const projects = await getProjects("All")
  
  if (!projects || projects.length === 0) {
    return <LoadingBar />
  }

  return (
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects" />
        <ProjectsUnified 
          projects={projects} 
          showFilter={true} 
          showRecent={true} 
          recentCount={3} 
          filterWithRecent={true} 
        />
        <HeadingHome text="About"/>
        <AboutComp/>
      </main>
    </div>
  );
}