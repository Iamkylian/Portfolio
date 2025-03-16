'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

// Types pour la validation du formulaire
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact = () => {
  const { language, messages } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Configurer EmailJS
  useEffect(() => {
    emailjs.init("Ho-IrRor0TJcC6MxZ");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map des noms de champs du formulaire vers les clés de l'état formData
    let stateKey = name;
    if (name === 'from_name') stateKey = 'name';
    if (name === 'from_email') stateKey = 'email';
    
    setFormData({
      ...formData,
      [stateKey]: value
    });
    
    // Clear error when user types
    if (errors[stateKey]) {
      setErrors({
        ...errors,
        [stateKey]: ''
      });
    }
  };

  const validate = (values: FormData) => {
    const errors: FormErrors = {};
    
    if (!values.name) {
      errors.name = messages.contact.required;
    }
    
    if (!values.email) {
      errors.email = messages.contact.required;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = messages.contact.validEmail;
    }
    
    if (!values.subject) {
      errors.subject = messages.contact.required;
    }
    
    if (!values.message) {
      errors.message = messages.contact.required;
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validate(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0 && formRef.current) {
      setIsSubmitting(true);
      
      // Préparation des données pour EmailJS si nécessaire
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      try {
        // Envoi via EmailJS
        await emailjs.send(
          "service_80rbwdm",
          "template_6kimdda",
          templateParams,
          "Ho-IrRor0TJcC6MxZ"
        );
        
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Réinitialise l'état après 5 secondes
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        setIsSubmitting(false);
        alert("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ultérieurement.");
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
          {messages.contact.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
          {messages.contact.subtitle}
        </p>
        <div className="w-40 h-1 mx-auto mb-12 rounded-full transition-colors duration-300" style={{ backgroundColor: isHovered ? '#0077b5' : '#6b7280'}}></div>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Informations de contact */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {language === 'fr' ? "Informations de contact" : "Contact Information"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1">Email</h4>
                    <a href="mailto:kyliangachet@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      kyliangachet@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <FaPhone className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1">
                      {language === 'fr' ? "Téléphone" : "Phone"}
                    </h4>
                    <a href="tel:+33662610084" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +33 6 62 61 00 84
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1">
                      {language === 'fr' ? "Localisation" : "Location"}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      Toulouse, France
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {language === 'fr' ? "Me suivre" : "Follow me"}
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/kyliangachet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-600 text-blue-600 dark:text-blue-300 hover:text-white p-3 rounded-full transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/Iamkylian" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-600 text-blue-600 dark:text-blue-300 hover:text-white p-3 rounded-full transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {language === 'fr' ? "Envoyez-moi un message" : "Send me a message"}
              </h3>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">{messages.contact.success}</h4>
                  <p>{language === 'fr' ? "Merci pour votre message. Je vous répondrai dans les plus brefs délais." : "Thank you for your message. I will respond as soon as possible."}</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {messages.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 dark:text-gray-200 font-medium dark:bg-gray-700 dark:border-gray-600 ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'}`}
                        placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                      />
                      {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {messages.contact.email} *
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 dark:text-gray-200 font-medium dark:bg-gray-700 dark:border-gray-600 ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'}`}
                        placeholder={language === 'fr' ? "Votre email" : "Your email"}
                      />
                      {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {language === 'fr' ? "Sujet" : "Subject"} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 dark:text-gray-200 font-medium dark:bg-gray-700 dark:border-gray-600 ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'}`}
                    >
                      <option value="">{language === 'fr' ? "Sélectionnez un sujet" : "Select a subject"}</option>
                      <option value="Projet">{language === 'fr' ? "Proposition de projet" : "Project proposal"}</option>
                      <option value="Emploi">{language === 'fr' ? "Opportunité d'emploi" : "Job opportunity"}</option>
                      <option value="Stage">{language === 'fr' ? "Proposition de stage/alternance" : "Internship proposal"}</option>
                      <option value="Question">{language === 'fr' ? "Question technique" : "Technical question"}</option>
                      <option value="Autre">{language === 'fr' ? "Autre" : "Other"}</option>
                    </select>
                    {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {messages.contact.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 dark:text-gray-200 font-medium dark:bg-gray-700 dark:border-gray-600 ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'}`}
                      placeholder={language === 'fr' ? "Votre message" : "Your message"}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'fr' ? "Envoi en cours..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" /> {messages.contact.send}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 