'use client'

import Link from "next/link";
import { skills, technicalSkills, softSkills, languageSkills } from "./../skills";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaUserTie, FaGlobe, FaChevronDown, FaChevronUp, FaDatabase } from "react-icons/fa";
import { SiPython, SiC, SiPhp, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiAngular, SiSymfony, SiVuedotjs, SiTailwindcss, SiBootstrap, 
  SiDocker, SiGit, SiLinux, SiGithub, SiJupyter } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiDatabase2Fill } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";
import { VscCode } from "react-icons/vsc";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("BUT");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["development", "web", "data", "tools"]);
  const { language, messages } = useLanguage();

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "python": return <SiPython size={22} />;
      case "java": return <DiJava size={22} />;
      case "c": return <SiC size={22} />;
      case "csharp": return <SiC size={22} />;
      case "php": return <SiPhp size={22} />;
      case "html5": return <SiHtml5 size={22} />;
      case "css3": return <SiCss3 size={22} />;
      case "javascript": return <SiJavascript size={22} />;
      case "react": return <SiReact size={22} />;
      case "typescript": return <SiTypescript size={22} />;
      case "angular": return <SiAngular size={22} />;
      case "symfony": return <SiSymfony size={22} />;
      case "vuejs": return <SiVuedotjs size={22} />;
      case "tailwind": return <SiTailwindcss size={22} />;
      case "bootstrap": return <SiBootstrap size={22} />;
      case "database": return <RiDatabase2Fill size={22} />;
      case "jupyter": return <SiJupyter size={22} />;
      case "spark": return <GrDatabase size={22} />;
      case "etl": return <GrDatabase size={22} />;
      case "docker": return <SiDocker size={22} />;
      case "git": return <SiGit size={22} />;
      case "linux": return <SiLinux size={22} />;
      case "vscode": return <VscCode size={22} />;
      case "github": return <SiGithub size={22} />;
      case "fr": return <span className="font-bold">FR</span>;
      case "en": return <span className="font-bold">EN</span>;
      case "de": return <span className="font-bold">DE</span>;
      default: return null;
    }
  };

  // Textes traduits
  const texts = {
    development: language === 'fr' ? 'Développement' : 'Development',
    web: language === 'fr' ? 'Développement Web' : 'Web Development',
    data: 'Data',
    tools: language === 'fr' ? 'Outils & DevOps' : 'Tools & DevOps',
    languageLevels: {
      beginner: language === 'fr' ? 'Débutant' : 'Beginner',
      intermediate: language === 'fr' ? 'Intermédiaire' : 'Intermediate',
      expert: language === 'fr' ? 'Expert' : 'Expert',
      native: language === 'fr' ? 'C2 - Maîtrise / Langue maternelle' : 'C2 - Mastery / Native',
      advanced: language === 'fr' ? 'C1 - Avancé' : 'C1 - Advanced',
      upperIntermediate: language === 'fr' ? 'B2 - Intermédiaire supérieur' : 'B2 - Upper Intermediate',
      intermediate: language === 'fr' ? 'B1 - Intermédiaire' : 'B1 - Intermediate',
      elementary: language === 'fr' ? 'A2 - Élémentaire' : 'A2 - Elementary',
      beginner: language === 'fr' ? 'A1 - Débutant' : 'A1 - Beginner'
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700 dark:text-gray-200">
          {messages?.skills?.title || "Mes Compétences"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
          {language === 'fr' 
            ? "Découvrez l'ensemble de mes compétences techniques et non techniques acquises durant ma formation et mes expériences professionnelles"
            : "Discover all the technical and non-technical skills I've acquired during my education and professional experiences"
          }
        </p>
        <div className="w-40 h-1 mx-auto mb-12 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>
        
        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab("BUT")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === "BUT" ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <FaGraduationCap /> {language === 'fr' ? "Compétences BUT" : "BUT Skills"}
          </button>
          <button 
            onClick={() => setActiveTab("technical")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === "technical" ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <FaLaptopCode /> {language === 'fr' ? "Compétences techniques" : "Technical Skills"}
          </button>
          <button 
            onClick={() => setActiveTab("soft")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === "soft" ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <FaUserTie /> {language === 'fr' ? "Soft Skills" : "Soft Skills"}
          </button>
          <button 
            onClick={() => setActiveTab("language")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === "language" ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <FaGlobe /> {language === 'fr' ? "Langues" : "Languages"}
          </button>
        </div>

        {/* Contenu des onglets */}
        <div className="mt-6">
          {/* Compétences BUT */}
          {activeTab === "BUT" && (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={`/skills/${skill.slug}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={`/Portfolio/images/skills/${skill.slug}.jpg`}
                          alt={language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
                          <h3 className="text-xl font-bold text-white px-4 text-center">
                            {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                          </h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {skill.levels.map((level) => (
                            <li key={level.niveau} className="flex items-start">
                              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 w-6 h-6 shrink-0 mr-3 font-semibold text-sm">{level.niveau}</span>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {language === 'fr' ? level.description : (level.descriptionEn || level.description)}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 text-center">
                          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300">
                            En savoir plus
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Compétences techniques */}
          {activeTab === "technical" && (
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Développement */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => toggleCategory("development")}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                    <FaLaptopCode className="mr-2 text-blue-600 dark:text-blue-400" /> {texts.development}
                  </h3>
                  {expandedCategories.includes("development") ? <FaChevronUp className="dark:text-gray-300" /> : <FaChevronDown className="dark:text-gray-300" />}
                </div>
                
                {expandedCategories.includes("development") && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technicalSkills.development.map((skill, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-blue-600 dark:text-blue-400">
                              {getIcon(skill.icon)}
                            </div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Web */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => toggleCategory("web")}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                    <SiHtml5 className="mr-2 text-orange-500" /> {texts.web}
                  </h3>
                  {expandedCategories.includes("web") ? <FaChevronUp className="dark:text-gray-300" /> : <FaChevronDown className="dark:text-gray-300" />}
                </div>
                
                {expandedCategories.includes("web") && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technicalSkills.web.map((skill, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-blue-600 dark:text-blue-400">
                              {getIcon(skill.icon)}
                            </div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Data */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => toggleCategory("data")}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                    <RiDatabase2Fill className="mr-2 text-purple-600 dark:text-purple-400" /> {texts.data}
                  </h3>
                  {expandedCategories.includes("data") ? <FaChevronUp className="dark:text-gray-300" /> : <FaChevronDown className="dark:text-gray-300" />}
                </div>
                
                {expandedCategories.includes("data") && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technicalSkills.data.map((skill, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-purple-600 dark:text-purple-400">
                              {getIcon(skill.icon)}
                            </div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Outils */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => toggleCategory("tools")}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                    <FaLaptopCode className="mr-2 text-gray-700 dark:text-gray-400" /> {texts.tools}
                  </h3>
                  {expandedCategories.includes("tools") ? <FaChevronUp className="dark:text-gray-300" /> : <FaChevronDown className="dark:text-gray-300" />}
                </div>
                
                {expandedCategories.includes("tools") && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technicalSkills.tools.map((skill, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-gray-700 dark:text-gray-300">
                              {getIcon(skill.icon)}
                            </div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Soft Skills */}
          {activeTab === "soft" && (
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {softSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                        {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                      </h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
                        <motion.div 
                          className="bg-yellow-500 h-3 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{texts.languageLevels.beginner}</span>
                        <span>{texts.languageLevels.intermediate}</span>
                        <span>{texts.languageLevels.expert}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Langues */}
          {activeTab === "language" && (
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 gap-8">
                  {languageSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
                          <span className="mr-2 w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
                            {getIcon(skill.icon)}
                          </span>
                          {language === 'fr' ? skill.name : (skill.nameEn || skill.name)}
                        </h4>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.level >= 90 ? texts.languageLevels.native :
                           skill.level >= 75 ? texts.languageLevels.advanced :
                           skill.level >= 60 ? texts.languageLevels.upperIntermediate :
                           skill.level >= 40 ? texts.languageLevels.intermediate :
                           skill.level >= 20 ? texts.languageLevels.elementary : texts.languageLevels.beginner}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-4">
                        <motion.div 
                          className="bg-blue-600 h-3 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
