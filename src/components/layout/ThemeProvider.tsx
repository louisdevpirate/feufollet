'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import clsx from 'clsx';

type Universe = 'tatouage' | 'portrait' | 'atelier';

interface ThemeContextType {
  universe: Universe;
  setUniverse: (universe: Universe) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [universe, setUniverse] = useState<Universe>('tatouage');

  // Appliques les styles selon l'univers
  useEffect(() => {
    document.documentElement.classList.remove(
      'universe-tatouage',
      'universe-portrait', 
      'universe-atelier'
    );
    document.documentElement.classList.add(`universe-${universe}`);
  }, [universe]);

  return (
    <ThemeContext.Provider value={{ universe, setUniverse }}>
      <div className={clsx('theme-transition', `theme-${universe}`)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
