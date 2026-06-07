'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language from localStorage on client side
    try {
      const saved = localStorage.getItem('language') as Language | null;
      if (saved && (saved === 'en' || saved === 'ar')) {
        setLanguage(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      }
    } catch (e) {
      // localStorage might not be available in some cases
    }
    setMounted(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // localStorage might not be available
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  };

  // Return default value immediately for SSR, then hydrate on client
  return (
    <LanguageContext.Provider value={{ language: mounted ? language : 'en', setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default value instead of throwing
    return { language: 'en', setLanguage: () => {} };
  }
  return context;
}
