import React from 'react';

export default function AboutMain() {
  return (
    <div className="w-68 h-90 bg-gray-900 transition duration-1000 ease-in-out clip-polygon-card rounded-tr-lg rounded-bl-lg flex flex-col p-6">
      <div className="w-20 h-20 bg-white rounded-lg mx-auto"></div>
      <span className="font-bold text-white text-center text-xl mt-4">About Me</span>
      <p className="font-light text-white text-center text-sm my-4">
        I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="text-white transition-colors duration-400 hover:text-red-500">
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..." />
          </svg>
        </a>
        <a href="#" className="text-white transition-colors duration-400 hover:text-red-500">
          {/* Twitter Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334..." />
          </svg>
        </a>
        <a href="#" className="text-white transition-colors duration-400 hover:text-red-500">
          {/* Instagram Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048..." />
          </svg>
        </a>
        <a href="#" className="text-white transition-colors duration-400 hover:text-red-500">
          {/* YouTube Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033..." />
          </svg>
        </a>
      </div>
      <button className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full transition-colors duration-400 hover:bg-red-500 hover:text-white">
        Resume
      </button>
    </div>
  );
}
