import React from "react"
const ProjectLoader = () => {
  return (
    <div className="px-0 md:px-5 lg:px-8">
        {/* Main Content */}
        <div className="w-1/3 h-11 m-3 bg-foreground animate-pulse rounded-md"></div>
        <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-15">
        <div className=" bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div>
        <div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div>
        <div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div><div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div><div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div><div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div><div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div><div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div>
        <div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div>
        <div className="bg-foreground px-4 py-2 m-1 md:m-2 lg:m-3 rounded-full w-24 h-10 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {/* Cards */}
          {Array(9)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="h-64 bg-foreground animate-pulse rounded-xl"
              ></div>
            ))}
        </div>
    </div>
  );
};
export default ProjectLoader;
