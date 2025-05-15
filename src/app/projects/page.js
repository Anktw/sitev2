import { getProjects } from "@/lib/projects"
import ProjectsUnified from "@/components/ProjectsUnified"
import LoadingBar from "@/components/loader"

export const metadata = {
  title: "Projects | Ankit Tiwari",
  description: "Projects of Ankit Tiwari.",
}

export default async function ProjectPage() {
  const projects = await getProjects("All")
  
  if (!projects || projects.length === 0) {
    return <LoadingBar />
  }

  return (
    <main className="px-0 md:px-5 lg:px-8">
      <ProjectsUnified projects={projects} showFilter={true} showRecent={false} />
    </main>
  )
}
