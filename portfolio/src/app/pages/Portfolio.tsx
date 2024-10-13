'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../images/image1.png';

// Type pour un projet
interface Project {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
  link: string;
}

// Liste des projets (à remplacer par vos propres projets)
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    image: image1,
    description: "Description détaillée du projet 1.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/votre-username/projet1"
  },
  {
    id: 2,
    title: "Project 2",
    image: image1,
    description: "Description détaillée du projet 2.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://github.com/votre-username/projet2"
  },
  // ... autres projets
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 500 }}
      className="bg-white rounded-lg max-w-2xl w-full"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-64 object-cover mb-4 rounded" />
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Technologies used :</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">{tech}</span>
            ))}
          </div>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">See the project</a>
      </div>
      <div className="bg-gray-100 px-6 py-3 flex justify-end">
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
        <div className="w-40 h-1 bg-blue-500 mx-auto mb-20 rounded-full"></div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;