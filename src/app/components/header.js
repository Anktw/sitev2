"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOn, setIsThemeOn] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("lightmode");

    if (storedTheme === "active") {
      setIsThemeOn(true);
      document.body.classList.add("lightmode");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const enableLightMode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
  };

  const disableLightMode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", "null");
  };

  const toggleTheme = () => {
    if (isThemeOn) {
      disableLightMode();
    } else {
      enableLightMode();
    }
    setIsThemeOn(!isThemeOn);
  };

  const closeMenuOnScroll = () => {
    if (window.innerWidth < 768 && isOpen) {
      setIsOpen(false);
    }
  };

  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMenuOnScroll);
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [isOpen]);

  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Ankit Tiwari</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/projects"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Resume
          </Link>
          <Link
            href="/blog"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <div
            className={` w-16 py-1 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
              isThemeOn
                ? " border-foreground border-solid border-2"
                : "border-foreground border-solid border-2"
            }`}
            onClick={toggleTheme}
          >
            <div
              className={`w-6 h-6 mx-1 rounded-full bg-foreground shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
                isThemeOn ? "translate-x-7" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-background transition-opacity duration-300 ${
                  isThemeOn ? "opacity-100" : "opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>
        </nav>

        {/* Social Icons Section */}
        <div className="flex justify-center align-middle gap-4">
          <Link
            href="https://www.linkedin.com/in/unkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isThemeOn ? "fill-black" : "fill-white"}`}
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          <Link
            href="https://github.com/Anktw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isThemeOn ? "fill-black" : "fill-white"}`}
              viewBox="0 0 24 24"
            >
             <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>

          <Link
            href="https://x.com/Unkittiwari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isThemeOn ? "fill-black" : "fill-white"}`}
              viewBox="0 0 24 24"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          className="relative w-8 h-8 md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 md:w-64 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Close menu</span>
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col items-center mt-20 px-8 space-y-4">
          <Link
            href="/projects"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Resume
          </Link>
          <Link
            href="/blog"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300"
          >
            Contact
          </Link>
          
          <div
            className={` w-16 py-1 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
              isThemeOn
                ? " border-foreground border-solid border-2"
                : "border-foreground border-solid border-2"
            }`}
            onClick={toggleTheme}
          >
            <div
              className={`w-6 h-6 mx-1 rounded-full bg-foreground shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
                isThemeOn ? "translate-x-7" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-background transition-opacity duration-300 ${
                  isThemeOn ? "opacity-100" : "opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
