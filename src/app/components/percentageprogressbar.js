"use client"
import React, { useEffect, useState } from 'react';

const CircularProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius; 
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
       
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="transparent"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute text-foreground text-xl font-bold">
        {progress}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
