"use client";
import { useState, useEffect } from "react";
import Button1 from "./ui/buttons/button1";
import { useTheme } from "../context/Themescontext";
import BlogBtn from "./ui/buttons/blogbtn";

export default function BlogsMain() {
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
          const recentBlogs = data.sort((a, b) => b.id - a.id).slice(0, 3);
          setBlogs(recentBlogs);

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
          const sortedBlogs = data.sort((a, b) => b.id - a.id).slice(0, 3);
          setBlogs(sortedBlogs);
        });
    } else {
      fetch("/blogs.json")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data
            .filter((blog) => blog.categoryStack.includes(category))
            .sort((a, b) => b.id - a.id)
            .slice(0, 3);
          setBlogs(filtered);
        });
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center align-middle mt-2 px-0 md:px-5 lg:px-8 md:mt-6 lg:mt-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="border border-foreground rounded-3xl ">
            <div className="relative flex flex-col p-5 md:p-10">
              <h2 className="text-xl font-bold my-1">{blog.title}</h2>
              <p className="text-lg md:text-xl my-2 opacity-80">
                {blog.description}
              </p>
              <p className="text-sm opacity-60 mb-2">{blog.date}</p>
              <div className="inline mt-2 md:mt-4">
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
          </div>
        ))}
      </div>
      <div className="flex justify-center m-4">
        <BlogBtn />
      </div>
    </div>
  );
}
