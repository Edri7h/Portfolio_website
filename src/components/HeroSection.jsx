import React from 'react';
import { Github, Linkedin } from 'lucide-react';
// import {motion} from "motion/react"
export default function HeroComponent() {
  return (
    <>
      {/* Sticky Light Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Ehtesham.dev</span>
          <div className="flex gap-6 text-sm font-medium">
            {['home', 'projects', 'tech', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative text-gray-700 hover:text-black transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-800 scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-6 pt-32 text-center bg-white text-gray-800"
      >
        {/* Heading */}
        <div className="mb-10 text-center">
  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
    Hi, I'm Ehtesham<span className="animate-pulse">_</span>
  </h1>
  <h2 className="text-3xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-300 mt-2">
    Developer. Student. Builder.
  </h2>
</div>



         
        {/* Description */}



        {/* Social Icons */}
        <div className="flex gap-4 mb-10">
          <a
            href="https://github.com/Edri7h"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            <Github className="text-gray-700 w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ehtesham-nawaz-471ab1220"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            <Linkedin className="text-gray-700 w-5 h-5" />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="border border-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition-all duration-200"
        >
          ↓ View Projects
        </a>
      </div>
    </>
  );
}
