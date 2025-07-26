import React from 'react';

const techStack = [
  { name: 'REACT', logo: 'react', border: 'border-[#61DBFB]' },
  { name: 'NEXT.JS', logo: 'nextjs', border: 'border-gray-400' },
  { name: 'TAILWINDCSS', logo: 'tailwindcss', border: 'border-[#38BDF8]' },
  { name: 'TYPESCRIPT', logo: 'typescript', border: 'border-[#3178C6]' },
  { name: 'JAVASCRIPT', logo: 'javascript', border: 'border-[#F7DF1E]' },
  { name: 'NODE.JS', logo: 'nodejs', border: 'border-[#3C873A]' },
  { name: 'EXPRESS.JS', logo: 'express', border: 'border-gray-500' },
  { name: 'POSTGRESQL', logo: 'postgresql', border: 'border-[#336791]' },
  { name: 'MONGODB', logo: 'mongodb', border: 'border-[#47A248]' },
  { name: 'REDIS', logo: 'redis', border: 'border-[#DC382D]' },
  { name: 'GIT', logo: 'git', border: 'border-[#F05032]' },
  { name: 'DOCKER', logo: 'docker', border: 'border-[#2496ED]' },
];

export default function TechStacks() {
  return (
    <section
      id="tech"
      className="relative bg-white text-gray-900 font-mono py-20 px-6 border-t overflow-hidden"
    >
      {/* Leaky C++ background */}
      <pre className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-sm md:text-base max-w-5xl text-black opacity-10 font-mono pointer-events-none select-none leading-relaxed whitespace-pre-wrap z-0">
{`#include <iostream>
#include <vector>
using namespace std;

class TechStack {
public:
    vector<string> techs = {
        "React", "Node.js", "MongoDB", "Docker"
    };

    void show() {
        cout << "Tech Stack Used:\\n";
        for (auto tech : techs) {
            cout << "- " << tech << endl;
        }
    }
};`}
      </pre>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
        <p className=" font-extrabold mb-12">Technologies I work with</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center border ${tech.border} rounded-xl p-6 w-[120px] h-[120px] hover:shadow-md transition`}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.logo}/${tech.logo}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2"
              />
              <span className="text-xs font-semibold text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
