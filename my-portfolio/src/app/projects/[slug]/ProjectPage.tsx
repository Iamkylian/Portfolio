"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "../../projects";
import { skills } from "../../skills";
import { FaGithub, FaArrowLeft, FaCalendarAlt, FaUniversity, FaLaptopCode } from "react-icons/fa";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export function ProjectPage({ slug }: { slug: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Projet non trouvé</h1>
          <p className="text-gray-600 mb-8">Le projet que vous recherchez n'existe pas.</p>
          <button
            onClick={() => router.push("/#projects")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 bg-gray-50 min-h-screen">
        {/* Hero section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end">
            <div className="container mx-auto px-6 py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {project.type === 'university' ? (
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <FaUniversity /> Projet universitaire
                    </span>
                  ) : (
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <FaLaptopCode /> Projet personnel
                    </span>
                  )}
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {project.date}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">À propos de ce projet</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-6">{project.longDescription || project.description}</p>
                </div>
              </motion.div>

              {project.context && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-md mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Contexte</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>{project.context}</p>
                  </div>
                </motion.div>
              )}

              {project.objectives && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-8 rounded-xl shadow-md mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Objectifs</h2>
                  <ul className="space-y-3 text-gray-700">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 text-white bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.methodology && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-md mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Méthodologie</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>{project.methodology}</p>
                  </div>
                </motion.div>
              )}

              {project.results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Résultats</h2>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <ul className="space-y-4 text-gray-700">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-md mb-8 sticky top-24"
              >
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compétences */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Compétences</h3>
                  <div className="space-y-3">
                    {project.skills.map((skillId) => {
                      const skill = skills.find(s => s.id === skillId);
                      if (!skill) return null;
                      
                      return (
                        <Link key={skillId} href={`/skills/${skill.slug}`}>
                          <div className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3">
                              {skillId}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{skill.name}</h4>
                              <p className="text-xs text-gray-500">{skill.levels.length} niveau{skill.levels.length > 1 ? 'x' : ''}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Lien vers le code source */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 transition-colors shadow-md mb-4"
                >
                  <FaGithub size={20} /> Voir le code source
                </a>

                {/* Retour à la liste des projets */}
                <button
                  onClick={() => router.push("/#projects")}
                  className="flex items-center justify-center gap-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg px-6 py-3 transition-colors"
                >
                  <FaArrowLeft size={16} /> Retour aux projets
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 