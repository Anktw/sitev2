import React from 'react';
import Link from 'next/link';

const Button1 = ({ text, onClick, type = 'button', icon, href }) => {
    return (
      <Link href={href} className="inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-4 py-2 text-sm font-semibold rounded-lg group-hover:bg-foreground group-hover:text-background">
        <span className="transform transition-transform duration-300 group-hover:scale-105">
          {text}
          </span>
          {icon && <span>{icon}</span>}
      </Link>
    );
};

export default Button1;
