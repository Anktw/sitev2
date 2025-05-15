"use client";
import { useState, useEffect } from "react";
import HeadingBiggest from "../../../components/ui/headings/headingbiggest";
import { useTheme } from "../../context/Themescontext";
import LoadingBar from "../../../components/loader";
import Button1 from "../../../components/ui/buttons/button1";

async function fetchBlogData(id) {
  const response = await fetch("/blogs.json");
  const blogs = await response.json();
  return blogs.find((b) => b.id === parseInt(id, 10)) || null;
}

export default function BlogPage({ params }) {
  const { isThemeOn } = useTheme();
  const [blog, setBlog] = useState(null);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    async function loadBlog() {
      const blogData = await fetchBlogData(params.id);
      setBlog(blogData);
    }
    loadBlog();
  }, [params.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondDiv(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        {showSecondDiv && (
          <div className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Blog not found
            <div className="my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="120px"
                viewBox="0 -960 960 960"
                width="120px"
                className={`justify-center m-auto ${
                  isThemeOn ? "fill-black" : "fill-white"
                }`}
              >
                <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
              </svg>
              <div className="flex m-auto justify-center">
                <Button1
                  text="Something wrong? Go to Blog page"
                  href="/blogs"
                  icon={
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
                      <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-0">
          <LoadingBar />
          {showSecondDiv && <div>Still trying to fetch...</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl px-1 md:px-4 justify-center mt-6 md:mt-8">
        <div className="text-center">
          <HeadingBiggest text={blog.title} />
        </div>
        <div className="my-3 md:my-6 text-center">
          {blog.categoryStack.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-foreground text-background opacity-50 text-xs px-3 py-1 mr-3 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="font-mono opacity-80 animate-fadeInDown text-center my-2">
          {blog.description}
        </p>
        <p className="font-serif mb-8 opacity-60 animate-fadeInDown text-center">
          {blog.date}
        </p>
        <div className="p-3 md:p-10">
          {blog.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl font-bold my-4">
                  {block.text}
                </h2>
              );
            } else if (block.type === "paragraph") {
              return (
                <p key={index} className="text-balance animate-fadeInLeft text-justify my-6 font-sans">
                  {block.text}
                </p>
              );
            } else if (block.type === "image") {
              return (
                <img key={index} src={block.src} alt={block.alt} className="my-6 mx-auto" />
              );
            }
            return null;
          })}
          <div className="group flex m-auto justify-center mt-8">
            <Button1
              text="More Blogs"
              href="/blog"
              icon={
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
                  <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
