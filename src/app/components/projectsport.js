"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button1 from "./buttons/button1";
import { useTheme } from "../context/Themescontext";
import HorizontalScroll from "./hrscroll";

export default function ProjectsPort() {
  const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("Recent", "All");
  const [techList, setTechList] = useState([]);
  const { isThemeOn } = useTheme();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (response.ok) {
          const data = await response.json();

          const sortedProjects = data.sort((a, b) => b.id - a.id).slice(0, 3);
          setProjects(sortedProjects);

          const techs = new Set();
          data.forEach((project) => {
            project.techStack.forEach((tech) => techs.add(tech));
          });

          setTechList(["Recent", "All", ...Array.from(techs)]);
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

    if (tech === "Recent") {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const sortedProjects = data.sort((a, b) => b.id - a.id).slice(0, 3);
          setProjects(sortedProjects);
        });
    } else if (tech === "All") {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const sortedProjects = data.sort((a, b) => b.id - a.id);
          setProjects(data);
        });
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
    <div>
      <HorizontalScroll>
        {/* Filter Buttons */}
        <div className=" flex">
          {techList.map((tech) => (
            <button
              key={tech}
              className={` px-4 py-2 m-1 md:m-2 lg:m-3 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background ${
                selectedTech === tech
                  ? "bg-foreground text-background  cursor-auto "
                  : "border-foreground bg-background text-foreground"
              }`}
              onClick={() => filterProjects(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </HorizontalScroll>
      <div className="px-0 md:px-5 lg:px-8">
        {/* Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-1 rounded-md cursor-pointer transition-transform duration-500 transform hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9 ">
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
        <div className=" flex justify-center">
          <Button1
            text="Go To All Projects"
            href="/projects"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45 ${
                  isThemeOn
                    ? "fill-black group-hover:fill-white"
                    : "fill-white group-hover:fill-black"
                }`}
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
