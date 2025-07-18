import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function HeroComponent() {
  return (
    <div className="flex flex-col mt-12 items-center justify-center min-h-screen px-6 text-center">
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Hey! I'm Ehtesham, a
          </h1>
          
          {/* Gradient Title */}
          <div className="relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent px-8 py-4 rounded-2xl">
              Fullstack Developer
            </h2>
            {/* Subtle background for the gradient text */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-purple-600/10 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed mb-12 font-light">
I’m a third-year B.Tech student and a self-taught developer. I’ve mostly learned by trial, error, and an unhealthy number of browser tabs. I like building things that actually work and sipping tea while pretending I have it all under control

        </p>
        
        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
         
          <a 
            href="https://github.com/Edri7h" 
             target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
          </a>
        </div>
        
        {/* CTA Button */}
        
        
      </div>
  );
}