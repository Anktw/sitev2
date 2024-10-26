import Image from "next/image";
import { getProjects } from "../lib/projects";

export default async function ProjectsMain() {
  const projects = await getProjects();
  
  console.log('Projects data:', projects);

  if (!projects || projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="px-0 md:px-5 lg:px-8 mt-2 md:mt-6 lg:mt-10 animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 animate-fadeInLeft">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-1 rounded-md cursor-pointer transition-transform duration-500 transform hover:scale-100 md:hover:scale-100 lg:hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={project.image}
                alt={project.title}
                width={1600}
                height={900}
                priority={true}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}