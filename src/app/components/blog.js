"use client";
import { useState, useEffect } from "react";
import Button1 from "./ui/buttons/button1";
import { useTheme } from "../context/Themescontext";
import HorizontalScroll from "./hrscroll";
import HeadingMain from "./ui/headings/headingmain";

export default function Blogs() {
  const { isThemeOn } = useTheme();
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        if (response.ok) {
          const data = await response.json();
          const sortedBlogs = data.sort((a, b) => b.id - a.id);
          setBlogs(sortedBlogs);

          const categories = new Set();
          data.forEach((blog) => {
            blog.categoryStack.forEach((category) => categories.add(category));
          });
          setCategoryList(["All", ...Array.from(categories)]);
        } else {
          console.error("Failed to load Blogs.");
        }
      } catch (error) {
        console.error("Error fetching Blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const filterBlogs = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      fetch("/blogs.json")
        .then((response) => response.json())
        .then((data) => {
          const sortedBlogs = data.sort((a, b) => b.id - a.id);
          setBlogs(sortedBlogs);
        });
    } else {
      fetch("/blogs.json")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter((blog) =>
            blog.categoryStack.includes(category)
          );
          setBlogs(filtered);
        });
    }
  };

  return (
    <div>
      <HeadingMain text="Blogs" />
      {/* Filter Buttons */}
      <HorizontalScroll>
        <div className="mx-5 md:mx-8 lg:mx-12">
          {CategoryList.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-1 md:m-1.5 lg:m-2 border-2 border-foreground rounded-full ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "border-foreground bg-background text-foreground"
              }`}
              onClick={() => filterBlogs(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </HorizontalScroll>
      <div className="container mx-auto p-4 border border-foreground rounded-lg md:rounded-md animate-fadeInDown">
        {blogs.length > 0 && (
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {/* First blog */}
            <div className="hidden md:block absolute top-0 left-auto">
              {blogs[(1, 3)].categoryStack.map((category, index) => (
                <span
                  key={index}
                  className="border border-foreground px-1 rounded mx-1"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="lg:col-span-2 p-4 md:p-8 flex-col justify-center animate-fadeInLeft">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3">
                {blogs[0].title}
              </h1>
              <p className="text-xl md:text-2xl opacity-80 font-mono my-2">
                {blogs[0].description}
              </p>
              <p className="text-sm opacity-60 font-serif my-2">{blogs[0].date}</p>
              <div className="inline my-2">
                <Button1
                  text="Read"
                  href={`/blogs/${blogs[0].id}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45  ${
                        isThemeOn
                          ? "fill-black group-hover:fill-white"
                          : "fill-white group-hover:fill-black"
                      }`}
                    >
                      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Right column blogs */}
            <div className="grid grid-cols-1 gap-4 animate-fadeInRight">
              {blogs.slice(1, 3).map((blog) => (
                <div
                  key={blog.id}
                  className="relative flex flex-col p-5 md:p-8 border border-foreground rounded-xl "
                >
                  <div className="absolute top-0 left-0 gap-2 hidden md:block">
                    {blog.categoryStack.map((category, index) => (
                      <span
                        key={index}
                        className="bg-foreground text-background px-1 rounded mx-1 opacity-50"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold my-2">{blog.title}</h2>
                  <p className="text-lg md:text-xl my-2 opacity-80 font-mono">
                    {blog.description}
                  </p>
                  <p className="text-sm mb-2 opacity-60 font-serif">{blog.date}</p>
                  <div className="inline mt-2">
                    <Button1
                      text="Read"
                      href={`/blogs/${blog.id}`}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45 ${
                            isThemeOn
                              ? "fill-black group-hover:fill-white"
                              : "fill-white group-hover:fill-black"
                          }`}
                        >
                          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional blogs */}
        {blogs.length > 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {blogs.slice(3).map((blog) => (
              <div
                key={blog.id}
                className="relative flex flex-col p-5 md:p-8 border border-foreground rounded-xl"
              >
                <div className="absolute top-0 left-0 gap-2 hidden md:block">
                  {blog.categoryStack.map((category, index) => (
                    <span
                      key={index}
                      className="bg-foreground text-background px-1 rounded mx-1 opacity-50"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold my-1">{blog.title}</h2>
                <p className="text-lg md:text-xl my-2 opacity-80 font-mono">
                  {blog.description}
                </p>
                <p className="text-sm opacity-60 mb-2 font-serif">{blog.date}</p>
                <div className="inline mt-2">
                  <Button1
                    text="Read"
                    href={`/blogs/${blog.id}`}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45 ${
                          isThemeOn
                            ? "fill-black group-hover:fill-white"
                            : "fill-white group-hover:fill-black"
                        }`}
                      >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
