"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

export default function ProjectsUnified({
  projects = [],
  showFilter = false,
  showRecent = false,
  recentCount = 3,
  filterWithRecent = false, // for portfolio-style filter
  className = "",
}) {
  // unique tech stack for filters
  const allTechs = useMemo(() => {
    return Array.from(
      new Set(projects.flatMap((p) => p.techStack || []))
    )
  }, [projects])

  // Filter logic
  const [selectedTech, setSelectedTech] = useState(
    filterWithRecent ? "Recent" : "All"
  )

  let filtered = projects
  if (showFilter && selectedTech !== "All" && selectedTech !== "Recent") {
    filtered = projects.filter((p) => (p.techStack || []).includes(selectedTech))
  }
  if (showRecent && (!showFilter || selectedTech === "Recent")) {
    filtered = filtered
      .slice()
      .sort((a, b) => b.id - a.id)
      .slice(0, recentCount)
  }
  // If filter is 'All', show all
  if (showFilter && selectedTech === "All") {
    filtered = projects.slice().sort((a, b) => b.id - a.id)
  }

  return (
    <div className={className}>
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filterWithRecent && (
            <button
              className={`btn ${selectedTech === "Recent" ? "btn-active" : ""}`}
              onClick={() => setSelectedTech("Recent")}
            >
              Recent
            </button>
          )}
          <button
            className={`btn ${selectedTech === "All" ? "btn-active" : ""}`}
            onClick={() => setSelectedTech("All")}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`btn ${selectedTech === tech ? "btn-active" : ""}`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 animate-fadeInLeft">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-8">No projects found</div>
        ) : (
          filtered.map((project) => (
            <div
              key={project.id}
              className="p-1 rounded-md transition-transform duration-500 transform hover:scale-100 md:hover:scale-100 lg:hover:scale-105"
            >
              <div className="p-2">
                <Link href={`/projects/${project.id}`}>
                  <Image
                    className="w-full h-auto object-cover rounded-xl cursor-pointer"
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    priority={true}
                  />
                </Link>
              </div>
              <div className="p-2">
                <div className="text-lg font-bold cursor-pointer">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </div>
                <p className="text-sm mt-2">{project.marketingline}</p>
                <div className="flex gap-2 items-center justify-between my-2">
                  {project.livelink && (
                    <a href={project.livelink} target="_blank" rel="noopener noreferrer">
                      <span className=" text-wrap inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-2 py-1 text-sm font-semibold rounded-lg group hover:bg-foreground hover:text-background motion-reduce:transition-all">
                        Live link
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="-rotate-45 transform transition-transform duration-300">
                          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-2 py-1 text-sm font-semibold rounded-lg group hover:bg-foreground hover:text-background motion-reduce:transition-all">
                        Source Code
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.336 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.21 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.002 10.002 0 0022 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
