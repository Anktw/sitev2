import Link from "next/link";
import Image from "next/image";
import React from "react";
import GoToTopButton from "./gototopbutton";

export function Footer() {
  return (
    <div className="relative bottom-0 mt-5 md:mt-28 lg:mt-36">
      <div className="grid max-w-screen-xl grid-cols-1 lg:grid-cols-3 gap-10 pt-10 mx-auto mt-7 md:mt-10 border-t px-5">
        <div className="w-full">
          <div className="flex items-center space-x-2 text-2xl font-semibold">
            <Image
              src="/icons/favicon.ico"
              alt="Site logo"
              width="32"
              height="32"
              className="w-8 mr-2 md:mr-3 rotate-90"
            />
            <span>Fun fact about this site</span>
          </div>
          <div className="w-full mt-4 opacity-75 leading-7">
            This site is entirely built using two primary variables:{" "}
            <span className="font-mono opacity-100">#fff</span> (white) and{" "}
            <span className="font-mono opacity-100">#000</span> (black). The design revolves around the manipulation of these two core colors.
          </div>
        </div>

        {/* Tech stack section */}
        <div className="w-full">
          <div className="leading-7 mt-4">
            This site is built with{" "}
            <Link href="https://nextjs.org/" className=" font-bold hover:underline">
              Next.js
            </Link>{" "}
            and{" "}
            <Link href="https://tailwindcss.com/" className=" font-bold hover:underline">
              Tailwind CSS
            </Link>, deployed on{" "}
            <Link href="https://vercel.com" className=" font-bold hover:underline">
              Vercel
            </Link>.
          </div>
        </div>

        {/* Links section */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Portfolio", "Projects", "Resume", "Blogs", "About", "Contact"].map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="group flex items-center space-x-2 transition-all duration-300">
              <span>{link}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className="my-10 text-sm text-center">
        Made with ♥ by @{" "}
        <Link href="/about" className=" hover:underline">
          Ankit Tiwari
        </Link>
      </div>
      <GoToTopButton />
    </div>
  );
}
