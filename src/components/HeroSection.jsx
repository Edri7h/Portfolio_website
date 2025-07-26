import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Navbar from './Navbar';
// import {motion} from "motion/react"
export default function HeroComponent() {
  return (
    <>
      {/* Sticky Light Navbar */}
      <Navbar/>

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
