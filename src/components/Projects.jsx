import React from 'react';
import { Github, ExternalLink, Users, Zap, Code } from 'lucide-react';



// Icon mapping
const iconMap = {
  users: <Users className="w-6 h-6 text-white" />,
  zap: <Zap className="w-6 h-6 text-white" />,
  code: <Code className="w-6 h-6 text-white" />,
};

const projects = [
  {
    name: "Turf Booking App",
    description: "A platform for users to book turf slots while owners manage turfs, track bookings, and control everything from a central dashboard",
    image: "https://i.ibb.co/RkKcNPtv/Screenshot-2025-07-18-101637.png", // fixed the URL from your previous input
    github: "https://github.com/Edri7h/reserveMyTurf-client",
    live: "https://reserve-my-turf-client.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    color: "from-green-100 to-green-800",
    icon: "code",
  },
  {
    name: "ShoutOut",
    description: "ShoutOut is a simple real-time chat app built with Socket.IO for instant messaging between users.",
    image: "https://i.ibb.co/4wXbKzFz/chatApp.png",
    github: "https://github.com/Edri7h/chat-app",
    live: "#",
    tech: ["Socket.io", "React", "Node.js"],
    color: "from-purple-500 to-purple",
    icon: "users",
  },
  {
    name: "GetHired",
    description: "GetHired is a MERN stack job portal where employers post jobs and seekers apply easily.",
    image: "https://i.ibb.co/m1Vf18q/jobplatform.png",
    github: "https://github.com/Edri7h/job-portal-gethired",
    live: "#",
    tech: ["React", "express.js", "MongoDB", "Restful API"],
    color: "from-blue-300 to-blue-400",
    icon: "zap",
  },
  
];

const Projects = () => {
  return (
    <section className="relative py-16 px-6 sm:px-8 lg:px-20 bg-transparent text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Featured&nbsp;
          </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
              <div className="absolute top-3 left-3 bg-black/50 rounded-md p-1">
                {iconMap[project.icon]}
              </div>
            </div>

            <div className="p-6 lg:p-7">
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-2 text-sm bg-gradient-to-r ${project.color} text-white rounded-md hover:shadow-lg transition`}
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
