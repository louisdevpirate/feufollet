'use client';

import { Paintbrush, Camera, Palette, ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

const universeConfig = {
  tatouage: {
    icon: Paintbrush,
    label: 'Tatouage',
    description: 'Noir & blanc contrasté',
    color: 'bg-neutral-900',
  },
  portrait: {
    icon: Camera,
    label: 'Portrait',
    description: 'Ivoire & sépia',
    color: 'bg-portrait-700',
  },
  atelier: {
    icon: Palette,
    label: 'Atelier',
    description: 'Olive & crème',
    color: 'bg-atelier-700',
  },
};

export function UniverseSelector() {
  const { universe, setUniverse } = useTheme();

  const Icon = universeConfig[universe].icon;

  return (
    <div className="flex items-center space-x-3">
      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
        Univers: {universeConfig[universe].label}
      </span>
      
      <button
        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700 transition-colors"
        onClick={() => {
          const universes = ['tatouage', 'portrait', 'atelier'] as const;
          const currentIndex = universes.indexOf(universe);
          const nextIndex = (currentIndex + 1) % universes.length;
          setUniverse(universes[nextIndex]);
        }}
      >
        <Icon className="h-4 w-4" />
        <span className="font-medium">{universeConfig[universe].label}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
    </div>
  );
}
