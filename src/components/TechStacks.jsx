import React from 'react';

const techStack = [
  { name: 'REACT', color: 'bg-blue-500/10 hover:bg-blue-500/20', border: 'border-blue-500/30' },
  { name: 'NEXT.JS', color: 'bg-gray-800/10 hover:bg-gray-800/20', border: 'border-gray-500/30' },
  { name: 'TAILWINDCSS', color: 'bg-cyan-500/10 hover:bg-cyan-500/20', border: 'border-cyan-500/30' },
  { name: 'TYPESCRIPT', color: 'bg-blue-600/10 hover:bg-blue-600/20', border: 'border-blue-600/30' },
  { name: 'JAVASCRIPT', color: 'bg-yellow-500/20 hover:bg-yellow-500/30', border: 'border-yellow-500/30' },
  { name: 'NODE.JS', color: 'bg-green-500/10 hover:bg-green-500/20', border: 'border-green-500/30' },
  { name: 'EXPRESS.JS', color: 'bg-gray-500/10 hover:bg-gray-500/20', border: 'border-gray-400/30' },
  { name: 'POSTGRESQL', color: 'bg-blue-400/10 hover:bg-blue-400/20', border: 'border-blue-400/30' },
  { name: 'MONGODB', color: 'bg-green-600/10 hover:bg-green-600/20', border: 'border-green-600/30' },
  { name: 'Redis', color: 'bg-orange-500/10 hover:bg-orange-500/20', border: 'border-orange-500/30' },
  { name: 'GIT', color: 'bg-red-500/10 hover:bg-red-500/20', border: 'border-red-500/30' },
  { name: 'DOCKER', color: 'bg-blue-400/10 hover:bg-blue-400/20', border: 'border-blue-400/30' },
];

const TechStacks = () => {
  return (
    <section className="w-full py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Stack</span>
        </h2>

        <div className="flex flex-col items-center">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            {techStack.slice(0, 4).map((tech, idx) => (
              <TechPill key={idx} tech={tech} />
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            {techStack.slice(4, 8).map((tech, idx) => (
              <TechPill key={idx+4} tech={tech} />
            ))}
          </div>
          
          {/* Third Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.slice(8, 12).map((tech, idx) => (
              <TechPill key={idx+8} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for the tech pill for better reusability
const TechPill = ({ tech }) => {
  return (
    <div
      className={`
        px-7 py-4 rounded-full text-sm md:text-base font-medium uppercase
        transition-all duration-300 ease-in-out
        ${tech.color} ${tech.border} border
        hover:scale-105 hover:shadow-lg hover:shadow-current/10
        text-white/90 hover:text-white
        flex items-center
      `}
    >
      {tech.name}
    </div>
  );
};

export default TechStacks;