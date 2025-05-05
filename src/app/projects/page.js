import Projects from "../components/projects/projects";
export const metadata = {
  title: "Projects By Ankit Tiwari",
  description: "Projects of Ankit Tiwari.",
}

export default function ProjectPage() {
  return (
    <main className="px-0 md:px-5 lg:px-8">
      <Projects />
    </main>
  );
}
