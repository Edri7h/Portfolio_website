import React from 'react';
// import { motion } from 'framer-motion';
import { Github, ExternalLink, Users, Zap, Code } from 'lucide-react';
import chatApp from "../assets/chatApp.png";
import jobplatform from "../assets/jobplatform.png";

const projects = [
  {
    name: "ShoutOut",
    description: "ShoutOut is a simple real-time chat app built with Socket.IO for instant messaging between users.",
    image: chatApp,
    github: "https://github.com/Edri7h/chat-app",
    live: "#",
    tech: ["Socket.io", "React", "Node.js"],
    color: "from-purple-500 to-purple",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "GetHired",
    description: "GetHired is a MERN stack job portal where employers post jobs and seekers apply easily.",
    image: jobplatform,
    github: "https://github.com/Edri7h/job-portal-gethired",
    live: "#",
    tech: ["React", "express.js", "MongoDB", "Restful API"],
    color: "from-blue-300 to-blue-400",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Turf Booking App",
    description: "A full-stack platform where players book 2-hour turf slots and owners manage availability with offline ticket verification.",
    image: "https://via.placeholder.com/600x300?text=Turf+App", // Replace with real image
    github: "https://github.com/Edri7h/turf-booking-app",
    live: "#",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
    color: "from-green-400 to-green-600",
    icon: <Code className="w-6 h-6" />,
  }
];

const Projects = () => {
  return (
    <section className="relative py-16 px-6 sm:px-8 lg:px-16 bg-black text-white">
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

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.03,
              zIndex: 1,
            }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
