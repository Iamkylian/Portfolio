"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, messages } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.button
      className="flex items-center space-x-1 p-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={messages?.common?.languageSelector || "Changer de langue"}
      aria-label={messages?.common?.languageSelector || "Changer de langue"}
    >
      <FaGlobeAmericas size={20} />
      <span className="ml-1 text-sm font-medium">{language === "fr" ? "FR" : "EN"}</span>
    </motion.button>
  );
};

export default LanguageSelector; 