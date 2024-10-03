import React from "react";
import Link from "next/link";

const Button2 = ({ text, onClick, type = "button", icon, href }) => {
  return (
    <div className="inline">
      <Link
        href={href}
        className="flex justify-center items-center p-3 border-2 border-foreground text-sm bg-background rounded font-semibold text-foreground overflow-hidden group hover:bg-foreground hover:text-background">
      
        <span className="inline-block transform transition-transform duration-300 group-hover:scale-105 whitespace-nowrap">
          {text}
        </span>
        {icon && <span>{icon}</span>}

      </Link>
    </div>
  );
};

export default Button2;
