'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { THEMES } from '@/constants/themes';
import { ThemeConfig, Universe } from '@/types';

interface ThemeContextType {
  currentUniverse: string;
  theme: ThemeConfig;
  setUniverse: (universe: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentUniverse, setCurrentUniverse] = useState<string>('');

  const setUniverse = (universe: string) => {
    setCurrentUniverse(universe);
    // Sauvegarder dans localStorage
    localStorage.setItem('currentUniverse', universe);
  };

  useEffect(() => {
    // Charger depuis localStorage
    const saved = localStorage.getItem('currentUniverse');
    if (saved && THEMES[saved]) {
      setCurrentUniverse(saved);
    }
  }, []);

  const theme = currentUniverse ? THEMES[currentUniverse] : THEMES.tatouage;

  return (
    <ThemeContext.Provider value={{ currentUniverse, theme, setUniverse }}>
      <div 
        className={`min-h-screen bg-gradient-to-br ${theme.gradient}`}
        style={{
          '--primary': theme.primary,
          '--secondary': theme.secondary,
          '--accent': theme.accent,
          '--background': theme.background,
          '--text': theme.text,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
