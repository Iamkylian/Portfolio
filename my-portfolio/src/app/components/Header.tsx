"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Détection de la section active basée sur la position de défilement
      const sections = ["intro", "education", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          if (position >= top && position < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 50 
        ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 py-2" 
        : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-3.5"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#intro" className="nav-link flex items-center">
            <span className="font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">KYLIAN GACHET</span>
          </Link>
        </motion.div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={toggleMenu} className="ml-3 focus:outline-none text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        <motion.div
          className={`md:flex items-center md:space-x-8 ${
            isOpen
              ? "flex flex-col absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 p-4 space-y-4"
              : "hidden"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {[
            { href: "#education", label: "Parcours" },
            { href: "#skills", label: "Compétences" },
            { href: "#projects", label: "Projets" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href={item.href} 
                className={`nav-link block py-2 relative ${activeSection === item.href.slice(1) ? 'font-semibold' : ''}`}
                onClick={() => {setIsOpen(false);}}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" 
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <div className="flex md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0 flex-col md:flex-row items-center">
            <ThemeToggle />
            <a
              href="https://github.com/Iamkylian"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub size={22} />
              <span className="ml-2 md:hidden">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kyliangachet"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin size={22} />
              <span className="ml-2 md:hidden">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
