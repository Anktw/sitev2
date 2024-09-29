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
        <div className="flex justify-center align-middle">
          <Link
            href="https://www.linkedin.com/in/unkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Link>

          <Link
            href="https://github.com/Anktw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/components/icons/linkedin.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </Link>

          <Link
            href="https://x.com/Unkittiwari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <Image src="" alt="X" width={24} height={24} />
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
