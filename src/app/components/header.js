"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full shadow-md backdrop-blur-lg bg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold font-">
          <Link href="/">Ankit Tiwari</Link>
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Burger Menu Button */}
        <button
      className="relative w-8 h-8 focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Toggle menu</span>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-5">
        <span className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
        <span className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
      </div>
    </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link href="/projects" className="block mb-2">
          Projects
        </Link>
        <Link href="/resume" className="block mb-2">
          Resume
        </Link>
        <Link href="/portfolio" className="block mb-2">
          Portfolio
        </Link>
        <Link href="/blog" className="block mb-2">
          Blog
        </Link>
        <Link href="/about" className="block mb-2">
          About
        </Link>
        <Link href="/contact" className="block mb-2">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
