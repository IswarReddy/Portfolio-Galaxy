import React, { useEffect, useRef, useState } from 'react';

const PortfolioGalaxy = () => {
  const galaxyRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      name: "RayBan Landing Page",
      type: "Web Design",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A stunning RayBan sunglasses landing page with modern design elements and smooth animations.",
      color: "from-black to-gray-600",
      glowColor: "shadow-gray-400/50",
      size: "w-20 h-20",
      orbitRadius: 200,
      orbitDuration: 20,
      details: {
        features: ["Responsive Design", "Smooth Animations", "Product Showcase", "Modern UI/UX"],
        github: "https://github.com/IswarReddy/Rayban",
        demo: "https://rayban-iswar.netlify.app"
      }
    },
    {
      id: 2,
      name: "Color Palette Studio",
      type: "Design Tool",
      tech: ["React", "JavaScript", "CSS"],
      description: "A comprehensive color palette generator and studio for designers and developers to create beautiful color schemes.",
      color: "from-blue-400 to-cyan-400",
      glowColor: "shadow-blue-400/50",
      size: "w-24 h-24",
      orbitRadius: 280,
      orbitDuration: 30,
      details: {
        features: ["Color Generator", "Palette Export", "Accessibility Check", "Color Harmony"],
        github: "https://github.com/IswarReddy/Color-Palette-Studio",
        demo: "https://color-palette-studio-iswar.netlify.app"
      }
    },
    {
      id: 3,
      name: "Fenta GSAP",
      type: "Animation",
      tech: ["HTML", "CSS", "GSAP", "JavaScript"],
      description: "A visually stunning website featuring advanced GSAP animations and smooth transitions for an immersive user experience.",
      color: "from-green-400 to-emerald-400",
      glowColor: "shadow-green-400/50",
      size: "w-16 h-16",
      orbitRadius: 160,
      orbitDuration: 15,
      details: {
        features: ["GSAP Animations", "Smooth Scrolling", "Interactive Elements", "Performance Optimized"],
        github: "https://github.com/IswarReddy/Fenta-GSAP",
        demo: "https://fenta-gsap.netlify.app"
      }
    },
    {
      id: 4,
      name: "Weather Wish",
      type: "Web App",
      tech: ["React", "API Integration", "CSS"],
      description: "A beautiful weather application that provides real-time weather information with an intuitive and responsive design.",
      color: "from-yellow-400 to-orange-400",
      glowColor: "shadow-yellow-400/50",
      size: "w-20 h-20",
      orbitRadius: 240,
      orbitDuration: 25,
      details: {
        features: ["Real-time Weather", "Location Search", "7-Day Forecast", "Mobile Responsive"],
        github: "https://github.com/IswarReddy/Weather-Wish",
        demo: "https://watherapp-iswar.netlify.app"
      }
    },
    {
      id: 5,
      name: "Profile Card",
      type: "Component",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "An elegant and interactive profile card component with smooth animations and modern design aesthetics.",
      color: "from-indigo-400 to-purple-400",
      glowColor: "shadow-indigo-400/50",
      size: "w-20 h-20",
      orbitRadius: 320,
      orbitDuration: 35,
      details: {
        features: ["Interactive Design", "Smooth Animations", "Responsive Layout", "Modern Styling"],
        github: "https://github.com/IswarReddy/ProfileCard",
        demo: "https://profilecrad-iswar.netlify.app"
      }
    },
    {
      id: 6,
      name: "Tic-Tac-Toe Game",
      type: "Game",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A classic Tic-Tac-Toe game with interactive gameplay, score tracking, and modern design elements.",
      color: "from-red-400 to-pink-400",
      glowColor: "shadow-red-400/50",
      size: "w-14 h-14",
      orbitRadius: 180,
      orbitDuration: 18,
      details: {
        features: ["Interactive Gameplay", "Score Tracking", "Reset Functionality", "Responsive Design"],
        github: "https://github.com/IswarReddy/Tic-Tac-Toe",
        demo: "https://tic-tac-toe-iswar.netlify.app"
      }
    }
  ];

  const handlePlanetClick = (project) => {
    setSelectedProject(project);
    setIsZoomed(true);
  };

  const handleCloseProject = () => {
    setIsZoomed(false);
    setSelectedProject(null);
  };

  const generateStars = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 bg-white rounded-full animate-pulse`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.3,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 40px var(--glow-color), 0 0 60px var(--glow-color); }
        }
        
        @keyframes nebula {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .orbit-container {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        
        .planet-orbit {
          animation: orbit linear infinite;
        }
        
        .galaxy-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .nebula-pulse {
          animation: nebula 4s ease-in-out infinite;
        }
        
        .central-star {
          animation: spin-slow 20s linear infinite;
        }
        
        .planet-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .zoom-out {
          transform: scale(0.3);
          opacity: 0.3;
          transition: all 0.5s ease-in-out;
        }
      `}</style>

      {/* Background stars */}
      {generateStars()}
      
      {/* Nebula effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent nebula-pulse" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full nebula-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full nebula-pulse" />

      {/* Header */}
      <header className="relative z-10 text-center py-8">
        <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Portfolio Galaxy
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore my projects floating in space. Click on any planet to discover more about each project.
        </p>
      </header>

      {/* Galaxy Container */}
      <div className="relative flex items-center justify-center h-screen">
        <div
          ref={galaxyRef}
          className={`relative w-full h-full flex items-center justify-center galaxy-float ${isZoomed ? 'zoom-out' : ''}`}
        >
          {/* Central Star */}
          <div className="absolute w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-2xl shadow-yellow-400/50 flex items-center justify-center planet-glow">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full central-star">
              <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </div>
          </div>

          {/* Project Planets */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="orbit-container"
            >
              <div
                className="planet-orbit cursor-pointer transform transition-all duration-300 hover:scale-110 group"
                style={{
                  '--orbit-radius': `${project.orbitRadius}px`,
                  animationDuration: `${project.orbitDuration}s`,
                  animationDelay: `${index * 2}s`
                }}
                onClick={() => handlePlanetClick(project)}
              >
                <div className={`${project.size} rounded-full bg-gradient-to-br ${project.color} shadow-2xl ${project.glowColor} group-hover:shadow-3xl transition-all duration-300 planet-glow`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent" />
                </div>
                
                {/* Project label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm whitespace-nowrap">
                    {project.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {isZoomed && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-gray-700 transform transition-all duration-500 scale-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm">
                  {selectedProject.type}
                </span>
              </div>
              <button
                onClick={handleCloseProject}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {selectedProject.details.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={selectedProject.details.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold text-center"
              >
                View Demo
              </a>
              <a 
                href={selectedProject.details.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-all duration-200 font-semibold text-center"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400 z-10">
        <p className="text-sm">Click on any planet to explore the project</p>
      </div>
    </div>
  );
};

export default PortfolioGalaxy;