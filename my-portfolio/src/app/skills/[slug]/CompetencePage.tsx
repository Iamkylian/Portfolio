"use client";

import { useRouter } from "next/navigation";
import Portfolio from "../../pages/Projects";
import { skills } from "../../skills";
import { FaArrowLeft, FaGraduationCap, FaTrophy, FaProjectDiagram } from "react-icons/fa";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CompetencePage({ slug }: { slug: string }) {
  const router = useRouter();
  const skill = skills.find((skill) => skill.slug === slug);
  const [isHovered, setIsHovered] = useState(false);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md text-center"
        >
          <h1 className="text-2xl font-bold text-red-600 mb-4">Compétence non trouvée</h1>
          <p className="text-gray-600 mb-6">La compétence que vous recherchez n'existe pas ou a été déplacée.</p>
          <button
            onClick={() => router.push("/#skills")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaArrowLeft /> Retour aux compétences
          </button>
        </motion.div>
      </div>
    );
  }

  const handleReturnToSkills = () => {
    router.push("/#skills");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Section d'en-tête avec animation */}
        <motion.header 
          className="relative w-full bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <img
            src={`/Portfolio/images/skills/${slug}.jpg`}
            alt={`${skill.name} Background`}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {skill.name}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-white rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <motion.p 
              className="mt-2 text-lg md:text-xl text-center max-w-2xl px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Découvrez les projets et niveaux liés à la compétence{" "}
              <strong>{skill.name}</strong>
            </motion.p>
          </div>
        </motion.header>

        {/* Section des niveaux avec affichage direct */}
        <section 
          className="py-16 bg-white"
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-flex items-center gap-3">
                <FaGraduationCap className="text-blue-600" /> Niveaux de compétence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Progression et maîtrise des différents niveaux de la compétence {skill.name}
              </p>
              <div 
                className="w-32 h-1 mx-auto mt-6 rounded-full transition-colors duration-300" 
                style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}
              ></div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {/* Affichage direct de tous les niveaux */}
              <div className="space-y-6">
                {skill.levels.map((level, index) => (
                  <motion.div
                    key={level.niveau}
                    className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center bg-blue-50 p-4">
                      <div className="flex-shrink-0">
                        <div className={`flex items-center justify-center ${
                          skill.levels.length === 3 ? (
                            level.niveau === 1 ? 'bg-blue-400' : 
                            level.niveau === 2 ? 'bg-blue-500' : 
                            'bg-blue-600'
                          ) : 
                          skill.levels.length === 2 ? (
                            level.niveau === 1 ? 'bg-blue-500' :  
                            'bg-blue-600'
                          ) : 
                          'bg-blue-500'
                        } text-white w-12 h-12 rounded-full text-xl font-bold`}>
                          {level.niveau}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-800">
                          Niveau {level.niveau}
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <FaTrophy className={`text-2xl ${
                          skill.levels.length === 3 ? (
                            level.niveau === 1 ? 'text-amber-700' : 
                            level.niveau === 2 ? 'text-gray-400' : 
                            'text-yellow-400'
                          ) : 
                          skill.levels.length === 2 ? (
                            level.niveau === 1 ? 'text-gray-400' :  
                            'text-yellow-400'
                          ) : 
                          'text-yellow-400'
                        }`} />
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <p className="text-gray-700 text-lg">{level.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section des projets associés */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-12">
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-flex items-center gap-3">
                <FaProjectDiagram className="text-blue-600" /> Projets associés
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez les projets sur lesquels j'ai appliqué cette compétence
              </p>
              <div className="w-32 h-1 mx-auto mt-6 rounded-full bg-blue-600"></div>
            </motion.div>
            
            <Portfolio skills={skill.id} />
          </div>
        </section>
      </main>

      <Footer />

      {/* Bouton de retour amélioré */}
      <motion.button
        onClick={handleReturnToSkills}
        className="fixed bottom-6 left-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-300 z-10 flex items-center justify-center"
        title="Retour aux compétences"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <FaArrowLeft className="mr-2" />
        <span>Retour aux compétences</span>
      </motion.button>
    </div>
  );
}
