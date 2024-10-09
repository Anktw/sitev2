import React from "react";
import Link from "next/link";

const ResumeComp = () => {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto shadow-md my-10 px-5 md:px-10">
      
      <div className="border-b pb-4 mb-6 justify-between flex">
      <h1 className="text-4xl font-bold">Ankit Tiwari</h1>
      <div>
          <Link href="mailto:at792226@gmail.com " className="text-sm">At792226@gmail.com
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
            unkit.vercel.app<svg
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
          <a href="https://github.com/anktw">
            github.com/anktw<svg
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
          </a>
        </p>
      </div></div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold">Programming Languages</h3>
            <p>
              JavaScript (ES2015+), TypeScript, HTML, CSS, Sass, PHP, GraphQL
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Libraries & Frameworks</h3>
            <p>
              React, Next.js, Gatsby, Eleventy, Node.js, React Native, Tailwind
              CSS, Styled Components, Framer Motion
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tools & Platforms</h3>
            <p>
              Git, GitHub, Netlify, Vercel, Heroku, WordPress, Contentful,
              Docker, Webpack, Figma
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>

        {/* Experience Item */}
        <div className="mb-4">
          <h3 className="font-semibold">Lead Engineer · Upstatement</h3>
          <p className="text-sm text-gray-600">Mar 2022 — Present</p>
          <ul className="list-disc list-inside text-sm">
            <li>
              Build, style, and ship high-quality websites, design systems, and
              mobile apps.
            </li>
            <li>
              Lead accessibility initiatives and improve developer experience.
            </li>
          </ul>
        </div>

        {/* More experience items can be added here similarly */}
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <div>
          <h3 className="font-semibold">Northeastern University</h3>
          <p className="text-sm text-gray-600">
            Bachelor of Science in Information Science
          </p>
          <p className="text-sm text-gray-600">
            Human Computer Interaction Concentration, Interaction & Experience
            Design Minors
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Selected Projects</h2>
        <div>
          <h3 className="font-semibold">Build a Spotify Connected App</h3>
          <p className="text-sm">
            Video course covering REST APIs, user auth, React, and more.
          </p>
        </div>
        {/* More projects can be added here */}
      </div>

      {/* Interests Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p className="text-sm">
          Web accessibility, rock climbing, snowboarding, science fiction &
          fantasy novels, The Legend of Zelda: Breath of the Wild & Tears of the
          Kingdom
        </p>
      </div>
    </div>
  );
};

export default ResumeComp;
