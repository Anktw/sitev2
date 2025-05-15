import React from "react";

const HeadingBiggest = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold my-1 md:my-3 lg:my-4 animate-fadeInLeft">{text}</h1>
  );
};

export default HeadingBiggest;