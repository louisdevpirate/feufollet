import { ThemeConfig } from '@/types';

export const THEMES: Record<string, ThemeConfig> = {
  tatouage: {
    primary: '#000000', // Noir profond
    secondary: '#1a1a1a', // Gris très foncé
    accent: '#ffffff', // Blanc
    background: '#ffffff', // Blanc pur
    text: '#000000', // Noir
    gradient: 'from-white to-white',
    // Style Comic Noir/Ink
    ctaPrimary: 'bg-black text-white hover:bg-gray-900',
    ctaSecondary: 'border-2 border-black text-black hover:bg-black hover:text-white',
    cardStyle: 'bg-white border-2 border-black shadow-lg',
    textStyle: 'text-black',
    backgroundStyle: 'bg-white'
  },
  portraits: {
    primary: '#2d5016', // Vert forêt profond
    secondary: '#1a3d0a', // Vert très foncé
    accent: '#4a7c59', // Vert sauge
    background: '#f0f8f0', // Vert très clair
    text: '#1a3d0a', // Vert foncé
    gradient: 'from-green-900 via-green-800 to-green-900',
    // Style WitchCraft/Nature
    ctaPrimary: 'bg-green-800 text-white hover:bg-green-900',
    ctaSecondary: 'border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white',
    cardStyle: 'bg-green-50 border-2 border-green-200 shadow-lg',
    textStyle: 'text-green-900',
    backgroundStyle: 'bg-green-50'
  },
  ateliers: {
    primary: '#7c2d12', // Rouge brique
    secondary: '#991b1b', // Rouge foncé
    accent: '#dc2626', // Rouge vif
    background: '#fef2f2', // Rouge très clair
    text: '#7c2d12', // Rouge foncé
    gradient: 'from-red-900 via-red-800 to-red-900',
    // Style chaleureux pour les ateliers
    ctaPrimary: 'bg-red-600 text-white hover:bg-red-700',
    ctaSecondary: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
    cardStyle: 'bg-red-50 border-2 border-red-200 shadow-lg',
    textStyle: 'text-red-900',
    backgroundStyle: 'bg-red-50'
  }
};

export const UNIVERSES: Record<string, { name: string; description: string; icon: string; path: string }> = {
  tatouage: {
    name: 'Tatouages',
    description: 'Des créations uniques gravées à vie',
    icon: '🖤',
    path: '/tatouage'
  },
  portraits: {
    name: 'Portraits',
    description: 'Des créations sur mesure qui capturent l\'essence',
    icon: '🎨',
    path: '/portraits'
  },
  ateliers: {
    name: 'Ateliers',
    description: 'Apprenez le dessin de modèle vivant',
    icon: '🎭',
    path: '/ateliers'
  }
};