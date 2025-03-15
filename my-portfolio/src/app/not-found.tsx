'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-20">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Page non trouvée</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              La page que vous recherchez n'existe pas ou a été déplacée. Retournez à la page d'accueil pour continuer votre navigation.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              <FaHome className="text-lg" /> Retour à l'accueil
            </Link>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
              <FaSearch className="text-lg" /> Contactez-moi
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
            <g transform="translate(200, 110)">
              <g className="opacity-30">
                {/* Corps du robot */}
                <rect x="-40" y="-70" width="80" height="100" rx="10" fill="currentColor" />
                
                {/* Tête du robot */}
                <rect x="-30" y="-100" width="60" height="40" rx="5" fill="currentColor" />
                
                {/* Antennes */}
                <rect x="-5" y="-115" width="10" height="15" fill="currentColor" />
                <circle cx="0" cy="-120" r="8" fill="currentColor" />
                
                {/* Yeux */}
                <circle cx="-15" cy="-80" r="7" fill="#3B82F6" />
                <circle cx="15" cy="-80" r="7" fill="#3B82F6" />
                
                {/* Bouche */}
                <rect x="-20" y="-60" width="40" height="5" rx="2" fill="#3B82F6" />
                
                {/* Bras */}
                <rect x="-60" y="-50" width="20" height="10" rx="5" fill="currentColor" />
                <rect x="40" y="-50" width="20" height="10" rx="5" fill="currentColor" />
                
                {/* Jambes */}
                <rect x="-30" y="30" width="15" height="30" rx="5" fill="currentColor" />
                <rect x="15" y="30" width="15" height="30" rx="5" fill="currentColor" />
              </g>
            </g>
          </svg>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-xl font-bold text-blue-600">?</span>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}