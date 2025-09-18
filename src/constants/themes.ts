import { ThemeConfig } from '@/types';

export const THEMES: Record<string, ThemeConfig> = {
  tatouage: {
    primary: '#8B4513', // Marron cuir
    secondary: '#D2691E', // Orange cuir
    accent: '#FF6347', // Rouge tomate
    background: '#FFF8DC', // Crème
    text: '#2F1B14', // Brun foncé
    gradient: 'from-amber-100 via-orange-50 to-red-100'
  },
  portraits: {
    primary: '#4A5568', // Gris ardoise
    secondary: '#718096', // Gris bleu
    accent: '#E53E3E', // Rouge
    background: '#F7FAFC', // Gris très clair
    text: '#2D3748', // Gris foncé
    gradient: 'from-gray-100 via-blue-50 to-purple-100'
  },
  ateliers: {
    primary: '#2D5016', // Vert forêt
    secondary: '#4A7C59', // Vert sauge
    accent: '#38A169', // Vert émeraude
    background: '#F0FFF4', // Vert très clair
    text: '#1A202C', // Presque noir
    gradient: 'from-green-100 via-emerald-50 to-teal-100'
  }
};

export const UNIVERSES = {
  tatouage: {
    name: 'Tatouages',
    description: 'Des créations uniques gravées à vie',
    icon: '🖤',
    path: '/tatouage'
  },
  portraits: {
    name: 'Portraits',
    description: 'Vos souvenirs immortalisés',
    icon: '🎨',
    path: '/portraits'
  },
  ateliers: {
    name: 'Ateliers',
    description: 'Apprenez l\'art du modèle vivant',
    icon: '✏️',
    path: '/ateliers'
  }
} as const;
