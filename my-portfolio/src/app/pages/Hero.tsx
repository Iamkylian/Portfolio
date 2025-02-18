// components/Intro.tsx
"use client"; // Indique que c'est un composant client

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const jobLangages = [
  "Développeur Full Stack", // Français
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
      className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="absolute w-full h-full bg-black opacity-10 text-4xl text-black-800">
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
                color: "white",
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </div>
      {/*  
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 32 200 200">
            <g className="branches" stroke="rgba(0,0,0,0.6)" strokeWidth="1" fill="none">
              <motion.path
                d="M100 100 L150 50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M100 100 L50 50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M100 100 L160 100"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              />
              <motion.path
                d="M100 100 L40 100"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.path
                d="M100 100 L150 150"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
              />
              <motion.path
                d="M100 100 L50 150"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
              />
            </g>
          </svg>
          */}
      <div className="container mx-auto px-6 z-10 text-center">
        <Image
          src="/Portfolio/images/PP.jpg"
          alt="Kylian Gachet"
          width={200}
          height={200}
          priority={true}
          draggable="false"
          className="rounded-full mx-auto mb-8 border border-silver shadow-lg"
        />
        <h1 className="text-4xl text-gray-800 font-bold mb-4">Kylian Gachet</h1>

        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-gray-600 mb-8"
        >
          {jobLangages[index]}
        </motion.p>

        <p className="max-w-xl mx-auto text-gray-600">
          Au fil des années, j'ai développé un large éventail de compétences et
          acquis une grande expérience, qui me permet aujourd'hui d'aborder les
          projets avec une vision globale et réfléchie. J'ai également eu
          l'occasion de travailler sur des projets complexes, tant en termes de
          développement technique que de gestion.
        </p>

        {/* Bouton de téléchargement du CV */}
        <a href="/Portfolio/assets/CV_Kylian_GACHET.pdf" download>
          <button className="mt-8 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition duration-300">
            Mon CV
          </button>
        </a>
      </div>
    </section>
  );
}
