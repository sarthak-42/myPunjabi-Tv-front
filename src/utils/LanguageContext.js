
// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import en from '../locales/en.json';
import pu from '../locales/pu.json';

// Create context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  // Define translation function based on selected language
  const translate = (key) => {
    const translations = {
      en: en,
      pu: pu,
    };

    return translations[language][key] || key; // Default to key if translation not found
  };

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
