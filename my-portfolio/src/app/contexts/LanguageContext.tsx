"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import frMessages from '../../messages/fr.json';
import enMessages from '../../messages/en.json';

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr");
  const [messages, setMessages] = useState(frMessages);

  useEffect(() => {
    // Récupérer la langue stockée localement si elle existe
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem("language") as Language;
      if (storedLanguage) {
        setLanguage(storedLanguage);
        setMessages(storedLanguage === 'fr' ? frMessages : enMessages);
      }
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setMessages(newLanguage === 'fr' ? frMessages : enMessages);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", newLanguage);
      document.documentElement.lang = newLanguage;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}; 