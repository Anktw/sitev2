const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown:{
          '0%': {opacity: 0, transform: 'translateY(-20px)'},
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft:{
          '0%': {opacity: 0, transform: 'translateX(-20px)'},
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight:{
          '0%': {opacity: 0, transform: 'translateX(20px)'},
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        fadeInDown: 'fadeInDown 0.5s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        fadeInRight: 'fadeInRight 0.5s ease-out forwards',
      },
      fontFamily:{
        protestGuerrilla: ["var(--font-protestGuerrilla)"],
      },
    },
  },
  plugins: [],
};
