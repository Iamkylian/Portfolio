'use client';

import { useState } from "react";
import { educationItems } from "../educations";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaFilter } from "react-icons/fa";

export default function Education() {
  const [isHovered, setIsHovered] = useState(false);
  const [filters, setFilters] = useState<string[]>(['education', 'professional', 'certification']);

  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'graduation':
        return <FaGraduationCap className="text-blue-600 dark:text-blue-400" size={24} />;
      case 'work':
        return <FaBriefcase className="text-green-600 dark:text-green-400" size={24} />;
      case 'certificate':
        return <FaCertificate className="text-yellow-600 dark:text-yellow-400" size={24} />;
      default:
        return <FaGraduationCap className="text-blue-600 dark:text-blue-400" size={24} />;
    }
  };

  // Filtrer les éléments en fonction des filtres actifs
  const filteredItems = educationItems.filter(item => filters.includes(item.type));

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 font-bold mb-4 text-center">Mon Parcours</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Découvrez mon parcours académique, mes expériences professionnelles et mes certifications
        </p>
        <div className="w-40 h-1 mx-auto mb-10 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => toggleFilter('education')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filters.includes('education') 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 opacity-60'
            }`}
          >
            <FaGraduationCap /> Formation
          </button>
          <button 
            onClick={() => toggleFilter('professional')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filters.includes('professional') 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 opacity-60'
            }`}
          >
            <FaBriefcase /> Expérience
          </button>
          <button 
            onClick={() => toggleFilter('certification')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filters.includes('certification') 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 opacity-60'
            }`}
          >
            <FaCertificate /> Certification
          </button>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-2 bottom-2 w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
          
          {/* Éléments de la timeline */}
          <div className="space-y-16">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Icône */}
                <div className={`absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg z-10 
                  ${item.type === 'education' ? 'border-2 border-blue-200 dark:border-blue-700' : 
                    item.type === 'professional' ? 'border-2 border-green-200 dark:border-green-700' : 
                    'border-2 border-yellow-200 dark:border-yellow-700'}`}>
                  {getIcon(item.icon)}
                </div>

                {/* Contenu */}
                <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300
                  ${item.type === 'education' ? 'border-l-4 border-blue-500' : 
                    item.type === 'professional' ? 'border-l-4 border-green-500' : 
                    'border-l-4 border-yellow-500'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                    <span className={`text-sm font-medium mt-1 md:mt-0 px-3 py-1 rounded-full 
                      ${item.type === 'education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                        item.type === 'professional' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                      {item.dates}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
