'use client';

import { useState } from "react";

export default function Education() {
  // Tableau d'objets pour stocker les informations sur l'éducation
  const educationItems = [
    {
      title: "BUT Informatique",
      institution: "IUT de Blagnac",
      dates: "Septembre 2021 - Présent",
      description: "Actuellement en cours, j'étudie les fondamentaux de l'informatique, incluant la programmation, les bases de données et les réseaux."
    },
    {
      title: "Baccalauréat Général",
      institution: "Lycée Pape Clément",
      dates: "Septembre 2019 - Juin 2022",
      description: "Option NSI (Numérique et Sciences Informatiques), qui m'a permis de développer une passion pour la programmation et l'informatique en général."
    }
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="education" className="py-20 bg-gray-50"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-gray-600 font-bold mb-8 text-left">Formations</h2>
        <div className="w-40 h-1 mx-left mb-20 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>
        <div className="relative border-l-2 border-gray-300 pl-8">
          {educationItems.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Détails de l'éducation */}
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-600">{item.institution} • {item.dates}</p>
              <p className="text-gray-500 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
