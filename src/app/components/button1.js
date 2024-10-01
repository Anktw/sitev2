import React from 'react';
import Link from 'next/link';

const Button1 = ({ text, onClick, type = 'button', icon, href }) => {
    return (
      <Link href={href} className="inline-flex gap-2 justify-center items-center border-none cursor-pointer bg-foreground text-background px-4 py-2 text-sm font-semibold rounded-lg">
          {text}
          {icon && <span>{icon}</span>}
          
      </Link>
    );
};

export default Button1;
