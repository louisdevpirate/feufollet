'use client';

import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';
import { UNIVERSES } from '@/constants/themes';
import { Universe } from '@/types';

interface UniverseSelectorProps {
  onUniverseChange?: (universe: Universe) => void;
}

export function UniverseSelector({ onUniverseChange }: UniverseSelectorProps) {
  const { currentUniverse, setUniverse } = useTheme();

  const handleUniverseChange = (universe: Universe) => {
    setUniverse(universe);
    onUniverseChange?.(universe);
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {Object.entries(UNIVERSES).map(([key, universe]) => (
        <motion.button
          key={key}
          onClick={() => handleUniverseChange(key as Universe)}
          className={`
            relative px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${currentUniverse === key 
              ? 'text-white shadow-lg transform scale-105' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }
          `}
          style={{
            backgroundColor: currentUniverse === key ? 'var(--primary)' : 'transparent',
            border: currentUniverse === key ? 'none' : '2px solid var(--primary)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl mr-2">{universe.icon}</span>
          <span className="text-sm font-semibold">{universe.name}</span>
          {currentUniverse === key && (
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: 'var(--primary)' }}
              layoutId="activeUniverse"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
