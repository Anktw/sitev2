import React from 'react';
import Link from 'next/link';

const ResumeComp = () => {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto shadow-md my-10">
      {/* Header */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold text-blue-700 font-">Ankit Tiwari</h1>
        <p className="text-sm mt-2">
          <Link href="mailto:at792226@gmail.com">At792226@gmail.com</Link>  |{' '}
          <a href="https://unkit.vercel.app" className="underline">
            website
          </a>
        </p>
        <p className="text-sm mt-1">
          <a href="https://github.com/bchiang7" className="underline">
            github.com/bchiang7
          </a>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold">Programming Languages</h3>
            <p>JavaScript (ES2015+), TypeScript, HTML, CSS, Sass, PHP, GraphQL</p>
          </div>
          <div>
            <h3 className="font-semibold">Libraries & Frameworks</h3>
            <p>
              React, Next.js, Gatsby, Eleventy, Node.js, React Native, Tailwind CSS, Styled Components, Framer Motion
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tools & Platforms</h3>
            <p>Git, GitHub, Netlify, Vercel, Heroku, WordPress, Contentful, Docker, Webpack, Figma</p>
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
            <li>Build, style, and ship high-quality websites, design systems, and mobile apps.</li>
            <li>Lead accessibility initiatives and improve developer experience.</li>
          </ul>
        </div>

        {/* More experience items can be added here similarly */}
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <div>
          <h3 className="font-semibold">Northeastern University</h3>
          <p className="text-sm text-gray-600">Bachelor of Science in Information Science</p>
          <p className="text-sm text-gray-600">Human Computer Interaction Concentration, Interaction & Experience Design Minors</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Selected Projects</h2>
        <div>
          <h3 className="font-semibold">Build a Spotify Connected App</h3>
          <p className="text-sm">Video course covering REST APIs, user auth, React, and more.</p>
        </div>
        {/* More projects can be added here */}
      </div>

      {/* Interests Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p className="text-sm">
          Web accessibility, rock climbing, snowboarding, science fiction & fantasy novels, The Legend of Zelda: Breath of the Wild & Tears of the Kingdom
        </p>
      </div>
    </div>
  );
};

export default ResumeComp;
