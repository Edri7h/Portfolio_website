import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './Projects';
import TechStacks from './TechStacks';
import Projects from './Projects';
import Footer from './Footer';

export default function GridLayout() {
  const [scrollY, setScrollY] = useState(0);

 useEffect(() => {
  let latestScrollY = 0;
  let ticking = false;

  const updateScroll = () => {
    setScrollY(latestScrollY);
    ticking = false;
  };

  const handleScroll = () => {
    latestScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0 z-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Continuous grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.001}px, ${scrollY * 0.001}px)`
          }}
        ></div>
        
        {/* Premium corner shadows and glow effects */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/20 via-purple-800/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-900/15 via-blue-800/8 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-900/20 via-purple-800/8 to-transparent"></div>
        
        {/* Additional subtle glow effects */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container - This is where we'll add components */}
      <div className="relative z-10">
        <HeroSection/>
        {/* Hero Section Placeholder */}
     <section className="w-full flex justify-center pt-20 px-4">
  <div className="w-full max-w-4xl">
    <Projects />
  </div>
</section>




        {/* Additional sections will be added here */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
           <TechStacks/>
          </div>
        </section>

        
           <Footer/>
         
      </div>
    </div>
  );
}