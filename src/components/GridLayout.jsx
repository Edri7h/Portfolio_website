import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Projects from './Projects';
import TechStacks from './TechStacks';
import Footer from './Footer';

export default function GridLayout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-900 relative font-sans">
      {/* Light Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${scrollY * 0.002}px, ${scrollY * 0.002}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />

        <section
          id="projects"
          className="w-full flex justify-center pt-20 px-4 bg-white"
        >
          <div className="w-full max-w-5xl">
            <Projects />
          </div>
        </section>

        <section
          id="tech"
          className="min-h-screen flex items-center justify-center px-4 bg-white"
        >
          <TechStacks />
        </section>

        <section id="contact" className='bg-white'>
          <Footer />
        </section>
      </div>
    </div>
  );
}
