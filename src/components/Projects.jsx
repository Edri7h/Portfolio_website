import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "Turf Booking App",
    description: "A platform for users to book turf slots while owners manage turfs, track bookings, and control everything from a central dashboard",
    image: "https://i.ibb.co/RkKcNPtv/Screenshot-2025-07-18-101637.png",
    github: "https://github.com/Edri7h/reserveMyTurf-client",
    live: "https://reserve-my-turf-client.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    name: "ShoutOut",
    description: "ShoutOut is a simple real-time chat app built with Socket.IO for instant messaging between users.",
    image: "https://i.ibb.co/4wXbKzFz/chatApp.png",
    github: "https://github.com/Edri7h/chat-app",
    live: "#",
    tech: ["Socket.io", "React", "Node.js"],
  },
  {
    name: "GetHired",
    description: "GetHired is a MERN stack job portal where employers post jobs and seekers apply easily.",
    image: "https://i.ibb.co/m1Vf18q/jobplatform.png",
    github: "https://github.com/Edri7h/job-portal-gethired",
    live: "#",
    tech: ["React", "express.js", "MongoDB", "Restful API"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 sm:px-8 lg:px-20 bg-white font-mono text-gray-800 overflow-hidden"
    >
      {/* Leaky C++ background code */}
      <pre className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-sm md:text-base max-w-5xl text-black opacity-10 font-mono pointer-events-none select-none leading-relaxed whitespace-pre-wrap z-0">
{`#include <iostream>
#include <vector>
using namespace std;

class Project {
public:
    string name;
    vector<string> tech;

    Project(string n, vector<string> t) : name(n), tech(t) {}

    void showTechStack() {
        cout << "Project: " << name << "\\nStack: ";
        for (string &t : tech) cout << t << " ";
        cout << endl;
    }
};`}
      </pre>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          Featured Projects<span className="text-gray-500">_</span>
        </h2>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-md transition overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-gray-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-gray-300 rounded bg-gray-50 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition rounded"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm rounded transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
