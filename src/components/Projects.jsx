import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Users, Zap } from 'lucide-react';
import chatApp from "../assets/chatApp.png"
import jobplatform from "../assets/jobplatform.png"
const projects = [
  {
    name: "ShoutOut",
    description: "ShoutOut is a simple real-time chat app built with Socket.IO for instant messaging between users.",
    image: chatApp,
    github: "https://github.com/Edri7h/chat-app",
    live: "#",
    tech: ["Socket.io", "React", "Node.js"],
    color: "from-purple-500 to-purple",
    icon: <Users className="w-6 h-6" />
  },
  {
    name: "GetHired",
    description: "GetHired is a MERN stack job portal where employers post jobs and seekers apply easily.",
    image: jobplatform,
    github: "https://github.com/Edri7h/job-portal-gethired",
    live: "#",
    tech: ["React", "express.js", "MongoDB","Restful API"],
    color: "from-blue-300 to-blue-400",
    icon: <Zap className="w-6 h-6" />
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // FIXED TYPO: Changed prevSlide to prevSlide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative max-w-xl py-10 lg:ml-36 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background with Grid Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2px, transparent 0)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 z-10" />

      <div className="relative z-20 max-w-2xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-center mb-6 leading-tight">
  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
    Featured&nbsp;
  </span>
  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Projects
  </span>
</h2>

          
        </div>

        {/* Slider Container */}
        <div className="relative ">
          {/* Navigation Buttons - FIXED POSITIONING */}
         {/* Left Button */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full lg:-translate-x-14 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
>
  <ChevronLeft className="w-4 h-4" />
</button>

{/* Right Button */}
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full lg:translate-x-14 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
>
  <ChevronRight className="w-4 h-4" />
</button>


          {/* Slider Track */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1 sm:px-2 lg:px-4">
                  <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                    
                    {/* Image Section - Now on top */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[16/8] relative">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center absolute inset-0">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${project.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl`}>
                            {React.cloneElement(project.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" })}
                          </div>
                        </div>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* Floating Icon */}
                      
                    </div>

                    {/* Content Section */}
                    <div className="p-3 sm:p-4 lg:p-5">
                      {/* Header */}
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 leading-tight">
                          {project.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 sm:px-2.5 sm:py-1 bg-white/10 text-white/80 text-xs rounded-md border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-xs sm:text-sm font-medium flex-1"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Code</span>
                        </a>
                        
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium text-xs sm:text-sm shadow-md flex-1`}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 gap-2 sm:gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6 max-w-xs sm:max-w-md mx-auto">
            <div className="w-full h-0.5 sm:h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;