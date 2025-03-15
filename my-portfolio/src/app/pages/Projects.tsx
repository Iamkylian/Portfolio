'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../projects';
import { FaGithub, FaFilter, FaUniversity, FaLaptopCode, FaTimes, FaChevronRight } from 'react-icons/fa';

// Composant pour afficher une carte de projet
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      layout
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="flex items-center">
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 rounded-full mr-2">{project.date}</span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                project.type === 'university' ? 'bg-green-600' : 'bg-purple-600'
              }`}>
                {project.type === 'university' ? 'Universitaire' : 'Personnel'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
      <div className="px-5 pb-4 flex justify-between items-center">
        <div className="flex space-x-1">
          {project.skills.map((skill) => (
            <div key={skill} className="w-2 h-2 rounded-full bg-blue-500"></div>
          ))}
        </div>
        <button className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium hover:underline">
          Voir plus <FaChevronRight className="ml-1" size={12} />
        </button>
      </div>
    </motion.div>
  );
};

// Composant pour afficher la modale avec les détails du projet
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: "spring", damping: 25, stiffness: 500 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex flex-col justify-end p-6">
          <div className="flex space-x-2 mb-3">
            <span className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
              {project.date}
            </span>
            <span className={`px-3 py-1 text-sm font-medium rounded-full text-white ${
              project.type === 'university' ? 'bg-green-600' : 'bg-purple-600'
            }`}>
              {project.type === 'university' ? 'Universitaire' : 'Personnel'}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skillId) => {
              const skillName = {
                "1": "Développement",
                "2": "Données",
                "3": "Analyse",
                "4": "Projet",
                "5": "Admin",
                "6": "Équipe"
              }[skillId];
              return (
                <Link href={`/skills/${["developpement-applications", "gestion-donnees", "analyse-optimisation", "conduite-projet", "administration", "gestion-equipe-informatique"][parseInt(skillId) - 1]}`} key={skillId}>
                  <span className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    {skillName}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        >
          <FaTimes size={18} />
        </button>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Description</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDescription || project.description}</p>
        </div>

        {project.context && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Contexte</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.context}</p>
          </div>
        )}

        {project.objectives && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Objectifs</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.objectives.map((objective, index) => (
                <li key={index} className="leading-relaxed">{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {project.methodology && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Méthodologie</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.methodology}</p>
          </div>
        )}

        {project.results && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Résultats</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.results.map((result, index) => (
                <li key={index} className="leading-relaxed">{result}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition-colors shadow-md"
          >
            <FaGithub size={20} /> Voir le code source
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Composant principal pour afficher le portfolio
const Portfolio: React.FC<{ skills?: string }> = ({ skills }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [filters, setFilters] = useState<string[]>(['university', 'personal']);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les projets en fonction des filtres et des compétences sélectionnées
  const filteredProjects = projects
    .filter(project => skills ? project.skills.includes(skills) : true)
    .filter(project => filters.includes(project.type))
    .filter(project => 
      searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Trier les projets: d'abord les projets mis en avant, puis par date décroissante
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.isHighlighted && !b.isHighlighted) return -1;
    if (!a.isHighlighted && b.isHighlighted) return 1;
    return 0;
  });

  // Gérer le toggle des filtres
  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      if (filters.length > 1) {
        setFilters(filters.filter(f => f !== filter));
      }
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">Mes Projets</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Découvrez les projets sur lesquels j'ai travaillé, tant dans le cadre universitaire que personnel
        </p>
        <div className="w-40 h-1 mx-auto mb-12 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>

        {/* Section de filtrage */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-3 mb-4 md:mb-0">
            <button
              onClick={() => toggleFilter('university')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                filters.includes('university') 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FaUniversity /> Universitaires
            </button>
            <button
              onClick={() => toggleFilter('personal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                filters.includes('personal') 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FaLaptopCode /> Personnels
            </button>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Grille des projets */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 dark:text-gray-400 text-lg">Aucun projet ne correspond à vos critères de recherche.</p>
              </motion.div>
            )}
          </AnimatePresence>
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

