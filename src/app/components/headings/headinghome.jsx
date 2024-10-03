import React from "react";

const HeadingHome = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-2">{text}</h1>
  );
};

export default HeadingHome;