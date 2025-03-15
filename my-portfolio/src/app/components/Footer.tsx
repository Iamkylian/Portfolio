'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Présentation */}
          <div className="mb-10 md:mb-0 md:w-1/3 pr-8">
            <motion.h2 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Kylian Gachet
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Data Analyst & Développeur Full Stack. Étudiant en BUT Informatique, passionné par les nouvelles technologies, l'IA et le développement web.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="https://linkedin.com/in/kyliangachet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://github.com/Iamkylian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="mailto:contact@kylian-gachet.fr"
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </div>

          {/* Liens rapides */}
          <motion.div 
            className="mb-10 md:mb-0 md:w-1/4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#intro" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#education" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Formation
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="font-medium">Email:</span>
                <a href="mailto:contact@kylian-gachet.fr" className="ml-2 hover:text-white transition-colors duration-300">
                  contact@kylian-gachet.fr
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium">Téléphone:</span>
                <a href="tel:+33662610084" className="ml-2 hover:text-white transition-colors duration-300">
                  +33 6 62 61 00 84
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium">Localisation:</span>
                <span className="ml-2">Toulouse, France</span>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Retour en haut */}
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToTop}
            className="mb-6 inline-block bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 animate-bounce-slow"
            aria-label="Retour en haut"
          >
            <FaArrowUp size={18} />
          </button>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 text-center">
              &copy;{currentYear} Kylian Gachet. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
