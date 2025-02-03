'use client'

import Link from "next/link";
import { skills } from "./../skills"; // Ajustez le chemin d'importation selon votre structure
import { useState } from "react";

export default function Skills() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="skills" className="py-20 bg-gray-100 relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">Compétences</h2>
        <div className="w-40 h-1 mx-auto mb-20 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Link key={skill.id} href={`/skills/${skill.slug}`}>
              <div className="bg-gray-500 text-white text-center py-8 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-400 cursor-pointer transition duration-300">
                {skill.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
