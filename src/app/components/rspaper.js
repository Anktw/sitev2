"use client"
import Button1 from "./buttons/button1"; // Adjust the import paths based on your folder structure
import { useTheme } from "../context/Themescontext";
import HorizontalScroll from "./hrscroll";
import HeadingMain from "./headings/headingmain";

export default function Blogs({ blogs = [], CategoryList = [], selectedCategory }) {
  const { isThemeOn } = useTheme();

  return (
    <div>
      <HeadingMain text="Blogs" />
      {/* Filter Buttons */}
      <HorizontalScroll>
        <div className="mx-5 md:mx-10 lg:mx-20">
          {CategoryList.length > 0 && CategoryList.map((category) => (
            <a
              key={category}
              href={`/?category=${category}`}  // URL link for server-side filtering
              className={`px-4 py-2 m-1 md:m-2 lg:m-3 border-2 border-foreground rounded-full ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "border-foreground bg-background text-foreground"
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      </HorizontalScroll>

      <div className="container mx-auto flex-row p-4 border border-foreground rounded-lg md:rounded-md animate-fadeInDown">
        {blogs.length > 0 ? (
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">
            {/* Render filtered blogs */}
            {blogs.map((blog) => (
              <div key={blog.id} className="relative flex flex-col p-5 md:p-10 ">
                <div className="absolute top-0 left-auto gap-2 hidden md:block">
                  {blog.categoryStack.map((category, index) => (
                    <span
                      key={index}
                      className="border border-foreground px-1 rounded mx-1"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold my-1">{blog.title}</h2>
                <p className="text-lg md:text-xl my-2 opacity-80">
                  {blog.description}
                </p>
                <p className="text-sm opacity-60 mb-2">{blog.date}</p>
                <div className="inline mt-2 md:mt-4">
                  <Button1
                    text="Read"
                    href={blog.link}
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
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}

// This function runs on the server-side and fetches the blogs data
export async function getServerSideProps(context) {
  const { query } = context;
  const selectedCategory = query.category || "All";

  try {
    // Fetch blogs data from the JSON file or an API
    const response = await fetch("/blogs.json"); // Adjust URL accordingly
    const data = await response.json();

    // Sort blogs and filter based on selected category
    let blogs = data.sort((a, b) => b.id - a.id);

    if (selectedCategory !== "All") {
      blogs = blogs.filter((blog) =>
        blog.categoryStack.includes(selectedCategory)
      );
    }

    // Create a list of categories for filtering
    const categories = new Set();
    data.forEach((blog) => {
      blog.categoryStack.forEach((category) => categories.add(category));
    });
    const CategoryList = ["All", ...Array.from(categories)];

    return {
      props: {
        blogs,            // Pass the blogs as props
        CategoryList,     // Pass the category list as props
        selectedCategory, // Pass the selected category as props
      },
    };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return {
      props: {
        blogs: [],          // Pass empty array in case of failure
        CategoryList: [],   // Pass empty array for categories
        selectedCategory,
      },
    };
  }
}
