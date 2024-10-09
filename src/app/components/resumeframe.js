"use client"
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeadingBiggest from "./headings/headingbiggest";

const ResumeComponent = () => {
    const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("All");
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (response.ok) {
          const data = await response.json();


          const sortedProjects = data.sort((a, b) => b.id - a.id);
          setProjects(sortedProjects);


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

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg font-sans">
      <header className="mb-8 justify-between flex">
        <div>
          <h1 className="text-5xl font-bold mb-2">Ankit Tiwari</h1>
          <p className="text-sm opacity-60 max-w-lg">Developer</p>
        </div>
        <div>
          <Link href="mailto:at792226@gmail.com " className="text-sm">
            At792226@gmail.com
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block h-4 w-4 shrink-0 transition-transform"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link href="https://unkit.vercel.app" className="flex text-sm">
            unkit.vercel.app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block h-4 w-4 shrink-0 transition-transform"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <p className="text-sm mt-1">
            <Link href="https://github.com/anktw">
              github.com/anktw
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </p>
        </div>
      </header>

      <div className="flex">
        <div className="w-2/3 pr-8">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Projects
            </h2>
            </section><HeadingBiggest text="UNDER CONSTRUCTION"/>
            </div>

{/* 
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Lead Engineer · Upstatement</h3>
                <span className="text-sm text-gray-600">
                  Mar 2022 — Present
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Senior Engineer</h3>
                <span className="text-sm text-gray-600">
                  Sept 2020 — Mar 2022
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold">Engineer</h3>
                <span className="text-sm text-gray-600">
                  May 2018 — Sept 2020
                </span>
              </div>
    
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Developer · Scout Studio</h3>
                <span className="text-sm text-gray-600">
                  Spring 2017 & 2018
                </span>
              </div>
              <ul className="list-disc list-outside text-sm pl-5 space-y-2 mt-2">
                <li>
                  Collaborated with other student designers and engineers on
                  pro-bono projects to create new brands, design systems, and
                  websites for organizations in the community
                </li>
                <li>
                  Built and delivered technical solutions according to
                  stakeholder business requirements
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">UI Engineer Co-op · Apple</h3>
                <span className="text-sm text-gray-600">July — Dec 2017</span>
              </div>
              <ul className="list-disc list-outside text-sm pl-5 space-y-2 mt-2">
                <li>
                  Developed and styled interactive web applications for Apple
                  Music using Ember and SCSS
                </li>
                <li>
                  Built and shipped the Apple Music Extension for Facebook
                  Messenger leveraging third-party and internal API integrations
                </li>
                <li>
                  Architected and implemented the user interface of Apple
                  Music's embeddable web player widget for in-browser user
                  authorization and full song playback
                </li>
                <li>
                  Contributed extensively to the creation of MusicKit JS, a
                  public-facing JavaScript SDK for embedding Apple Music players
                  into web applications
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Software Engineer Co-op · Starry</h3>
                <span className="text-sm text-gray-600">July — Dec 2016</span>
              </div>
              <ul className="list-disc list-outside text-sm pl-5 space-y-2 mt-2">
                <li>
                  Engineered and improved major features of Starry's
                  customer-facing Android web app using Cordova, ES6,
                  Handlebars, Backbone, Marionette, and CSS
                </li>
                <li>
                  Proposed and implemented scalable solutions to issues
                  identified with cloud services and user-facing applications
                  responsible for communicating with the Starry Station router
                </li>
                <li>
                  Collaborated with designers and other developers to ensure
                  thoughtful and consistent user experiences across Starry's iOS
                  and Android mobile apps
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="w-1/3">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Skills</h2>

            <div className="mb-4">
              <p className="text-sm">
                JavaScript (ES2015+), TypeScript, HTML, CSS, Sass, PHP, GraphQL
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Major Selected Projects
            </h2>

            <div className="mb-4">
              <h3 className="font-bold">Build a Spotify Connected App</h3>
              <p className="text-sm">
                Video course that teaches how to build a web app with the
                Spotify API. Topics covered include the principles of REST APIs,
                user auth flows, Node, Express, React, Styled Components, and
                more
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Halcyon VS Code Theme</h3>
              <p className="text-sm">
                Dark blue theme for Visual Studio Code with 100k+ installs
              </p>
            </div>

            <div>
              <h3 className="font-bold">brittanychiang.com (v4)</h3>
              <p className="text-sm">
                Old personal website built with Gatsby with 7k+ stars and 3k+
                forks
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <h3 className="font-bold">Kurukshetra University</h3>
            <p className="text-sm">
              Bachelor of Technology
            </p>
            <p className="text-sm">Computer Science Engineering
            </p>
            <p className="text-sm">2022-26</p>
          </section>
        </div>*/}
      </div>
    </div>
  );
};

export default ResumeComponent;
