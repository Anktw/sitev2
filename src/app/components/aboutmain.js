"use client";
import { useState } from "react";
import { useTheme } from "../context/Themescontext";
import ContactForm from "./contactform";

const AboutMain = () => {
  const [activeTab, setActiveTab] = useState("Education");
  const { isThemeOn } = useTheme();

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("Education")}
          className={`px-6 py-2 rounded-lg ${
            activeTab === "Education"
              ? "bg-foreground text-background border border-foreground opacity-80"
              : "border border-foreground text-foreground"
          } transition-all duration-300`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("Work Experience")}
          className={`px-6 py-2 rounded-lg ${
            activeTab === "Work Experience"
              ? "bg-foreground text-background border border-foreground opacity-80"
              : "border border-foreground text-foreground"
          } transition-all duration-300`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveTab("Tech Stacks")}
          className={`px-6 py-2 rounded-lg ${
            activeTab === "Tech Stacks"
              ? "bg-foreground text-background border border-foreground opacity-80"
              : "border border-foreground text-foreground"
          } transition-all duration-300`}
        >
          Tech Stacks
        </button>
      </div>

      <div className="w-full">
        {activeTab === "Education" && (
          <div className="p-4 border border-foreground text-foreground rounded-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 align-middle items-center">Education
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className={`transform transition-transform duration-300 group-hover:scale-110 ${
                isThemeOn
                  ? "fill-black group-hover:fill-white"
                  : "fill-white group-hover:fill-black"
              }`}
            >
            
            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
            </svg>
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl font-protestGuerrilla my-3">2022-2026</p>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">Bachelor of Technology</p>
            <p className="text-xl">S.I.E.T. Nilokheri, Karnal Haryana afw Kurukshetra University, Kurukshetra</p>
          </div>
        )}
        {activeTab === "Work Experience" && (
          <div className="p-4 border border-foreground text-foreground rounded-lg">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 align-middle items-center">Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className={`transform transition-transform duration-300 group-hover:scale-110 ${
              isThemeOn
                ? "fill-black group-hover:fill-white"
                : "fill-white group-hover:fill-black"
            }`}
          >
          
          <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
          </svg>
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl font-protestGuerrilla my-3">Prefer any means</p>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">Fill this form</p>
          <ContactForm/>
          <p className="text-xl"></p>
        </div>
        )}
        {activeTab === "Tech Stacks" && (
          <div className="p-4 bg-gray-800 text-foreground rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Tech Stacks</h3>
            <p>Details about tech stacks go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMain;
