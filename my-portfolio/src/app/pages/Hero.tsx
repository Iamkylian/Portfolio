// components/Intro.tsx
"use client"; // Indique que c'est un composant client

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPlane, FaGraduationCap, FaFileDownload } from "react-icons/fa";

const jobLangages = [
  "Développeur Full Stack", // Français
  "Data Analyst", // Français
  "Full Stack Developer", // Anglais
  "フルスタック開発者", // Japonais
  "Full-Stack-Entwickler", // Allemand
  "Desarrollador Full Stack", // Espagnol
  "풀스택 개발자", // Coréen
];

// Kanji Characters to fall
const kanjiCharacters = [
  "漢", // Han
  "字", // Character
  "日", // Day/Sun
  "本", // Book/Origin
  "語", // Language
  "学", // Study/Learning
  "生", // Life/Birth
  "時", // Time
  "行", // Go/Conduct
  "見", // See/Look
  "大", // Big/Great
  "小", // Small
  "新", // New
  "古", // Old
  "高", // Tall/High
  "安", // Peace/Cheap
  "多", // Many
  "少", // Few/Little
  "長", // Long/Leader
  "短", // Short
  "明", // Bright/Clear
  "木", // Tree
  "人", // Person
  "心", // Heart
  "天", // Heaven
  "地", // Earth
  "夏", // Summer
  "秋", // Autumn
  "冬", // Hiver
  "愛", // Love
  "希", // Hope
  "夢", // Dream
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [kanjiPositions, setKanjiPositions] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobLangages.length);
    }, 2500);

    setKanjiPositions(kanjiCharacters.map(() => Math.random() * 100));

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20">
        <div className="absolute w-full h-full">
          {kanjiCharacters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ y: -100, opacity: 1 }}
              animate={{ y: "100vh", opacity: 0 }}
              transition={{
                duration: Math.random() * 3 + 2,
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${kanjiPositions[index]}vw`,
                position: "absolute",
                color: "gray",
                fontSize: "2rem"
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/Portfolio/images/PP.jpg"
                alt="Kylian Gachet"
                width={250}
                height={250}
                priority={true}
                draggable="false"
                className="rounded-full border-4 border-white shadow-xl"
              />
              <motion.div 
                className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 500, damping: 15 }}
              >
                <FaPlane size={24} />
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-blue-700 to-gray-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Kylian Gachet
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4 text-blue-600"
              >
                {jobLangages[index]}
              </motion.p>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Passionné par le développement et la cybersécurité, je suis actuellement <span className="font-semibold">Data Analyst en alternance chez Airbus</span>. En parallèle, j'étudie l'informatique à l'IUT de Blagnac en <span className="font-semibold">BUT Informatique</span>, où je développe mes compétences techniques et ma vision globale des projets.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a 
                href="/Portfolio/assets/CV_Kylian_GACHET.pdf" 
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                <FaFileDownload /> Télécharger mon CV
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Me contacter
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl bg-white p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <FaPlane size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Data Analyst - Airbus</h3>
              </div>
              <p className="text-gray-600 ml-14">2023 - 2025 | Alternance</p>
              <p className="text-gray-600 ml-14 mt-2">
                Conception d'un outil d'approbation d'offres commerciales et traitement ETL des données du DataHub pour fournir des indicateurs aux équipes business.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <FaGraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">BUT Informatique</h3>
              </div>
              <p className="text-gray-600 ml-14">2022 - 2025 | IUT de Blagnac</p>
              <p className="text-gray-600 ml-14 mt-2">
                Formation technique complète couvrant le développement d'applications, la gestion des données, l'analyse et optimisation, la conduite de projet, l'administration des systèmes et réseaux, et la gestion d'équipe informatique.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Python</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">SQL</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Data Science</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Java</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Angular</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Recueil de besoin</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
