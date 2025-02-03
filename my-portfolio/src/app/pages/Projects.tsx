'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projects';
import { FaGithub } from 'react-icons/fa';

// Type pour un projet
interface Project {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
  link: string;
  skills: string[];
}



// Composant pour afficher une carte de projet
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        priority={true}
        draggable="false"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-600">{project.title}</h3>
      </div>
    </motion.div>
  );
};

// Composant pour afficher une modale avec les détails du projet
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
        <h2 className="text-2xl font-bold mb-4 text-gray-600">{project.title}</h2>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          draggable="false"
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="mb-4 text-gray-600">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-gray-600 font-semibold mb-2">Technologies utilisées :</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-500 px-2 py-1 rounded text-sm">{tech}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => window.open(project.link, '_blank')}
          rel="noopener noreferrer"
          className="flex items-center mt-4 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500 transition duration-300"
        >
          <FaGithub className="mr-2" />
          Voir Projet
        </button>
      </div>
      <div className="bg-gray-100 px-6 py-3 flex justify-end">
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Fermer
        </button>
      </div>
    </motion.div>
  </motion.div>
);

// Composant principal pour afficher le portfolio
// Composant principal pour afficher le portfolio
const Portfolio: React.FC<{ skills?: string }> = ({ skills }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Filtrer les projets en fonction de la compétence sélectionnée
  const filteredProjects = skills 
    ? projects.filter((project) => project.skills.includes(skills)) // Vérifie si la compétence est incluse
    : projects;
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-50" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">Mes Projets</h2>
        <div className="w-40 h-1 mx-auto mb-20 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>

        {/* Grille des projets */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Modale des projets */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;

