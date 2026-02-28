import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Language } from '../i18n/translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  isSelected: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const stored = sessionStorage.getItem('school_lang') as Language | null;
  const [language, setLanguageState] = useState<Language>(stored ?? 'en');
  const [isSelected, setIsSelected] = useState<boolean>(!!stored);

  const setLanguage = useCallback((lang: Language) => {
    sessionStorage.setItem('school_lang', lang);
    setLanguageState(lang);
    setIsSelected(true);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isSelected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
