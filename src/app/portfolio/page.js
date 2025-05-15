import AboutMain from "../components/aboutmain";
import HeadingHome from "../components/ui/headings/headinghome";
import ProjectsPort from "../components/projects/projectsport";
export const metadata = {
  title: "Portfolio | Ankit Tiwari",
  description: "Portfolio of Ankit Tiwari.",
};

export default function Home() {
  return (
    <div>
      <main className="p-0 md:p-2 m-1 md:m-4 lg:p-4">
        <HeadingHome text="Projects" />
        <ProjectsPort />
        <HeadingHome text="About"/>
        <AboutMain/>
      </main>
    </div>
  );
}
