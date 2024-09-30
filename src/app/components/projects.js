"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("All");
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json"); 
        if (response.ok) {
          const data = await response.json();
          setProjects(data);

         
          const techs = new Set();
          data.forEach((project) => {
            project.techStack.forEach((tech) => techs.add(tech));
          });

          
          setTechList(["All", ...Array.from(techs)]);
        } else {
          console.error("Failed to load projects.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const filterProjects = (tech) => {
    setSelectedTech(tech);
    if (tech === "All") {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => setProjects(data));
    } else {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter((project) =>
            project.techStack.includes(tech)
          );
          setProjects(filtered);
        });
    }
  };

  return (
    <div className="px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2">Projects</h1>

      {/*Filter Buttons */}
      <div>
        {techList.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 mb-5 m-3 md:mb-3 border-2 border-foreground rounded-full ${
              selectedTech === tech
                ? "bg-foreground text-background"
                : "border-foreground bg-background text-foreground"
            }`}
            onClick={() => filterProjects(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="p-1 rounded-md cursor-pointer transition-transform duration-500 transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9 ">
            <Image
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              priority={true}
            /></div>
            <div className="p-4 ">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
