"use client";
import React, { useRef, useState, useEffect } from "react"
import { useTheme } from "./context/Themescontext"

const HorizontalScroll = ({ children }) => {
  const { isThemeOn } = useTheme();
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const currentScroll = scrollRef.current;
    checkScroll();

    currentScroll.addEventListener("scroll", checkScroll);

    window.addEventListener("resize", checkScroll);

    return () => {
      currentScroll.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent" aria-label="Scroll button"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            className={`transform transition-transform duration-300 hover:opacity-80 bg-background ${
              isThemeOn
                ? "fill-black group-hover:fill-white"
                : "fill-white group-hover:fill-black"
            }`}
          >
            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex my-6 overflow-x-auto space-x-4 p-4 custom-scrollbar"
      >
        {children}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" aria-label="Scroll button"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            className={`transform transition-transform duration-300 hover:opacity-80 bg-background  ${
              isThemeOn
                ? "fill-black group-hover:fill-white"
                : "fill-white group-hover:fill-black"
            }`}
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      )}
    </div>
  );
};
export default HorizontalScroll;
