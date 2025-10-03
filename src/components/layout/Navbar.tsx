'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette, Camera, Paintbrush } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { UniverseSelector } from '@/components/ui/UniverseSelector';

const navItems = [
  {
    href: '/',
    label: 'Accueil',
    icon: null,
  },
  {
    href: '/tatouage',
    label: 'Tatouage',
    icon: Paintbrush,
    universe: 'tatouage',
  },
  {
    href: '/portrait',
    label: 'Portrait',
    icon: Camera,
    universe: 'portrait',
  },
  {
    href: '/atelier',
    label: 'Atelier',
    icon: Palette,
    universe: 'atelier',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { universe, setUniverse } = useTheme();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture au changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [universe]);

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-std ease-smooth
          ${scrolled ? 'glass backdrop-blur-md' : 'bg-white/80'}
          ${scrolled ? 'border-b border-neutral-200/20' : 'border-b border-transparent'}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-responsive">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="text-xl font-bold tracking-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                laura
              </motion.div>
              <motion.div
                className="h-1 w-1 rounded-full bg-neutral-900"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <UniverseSelector />
              
              {/* Menu navigation */}
              <div className="flex items-center space-x-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.href === '/' ? false : item.universe === universe;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => item.universe && setUniverse(item.universe)}
                      className={`
                        flex items-center space-x-2 text-sm font-medium
                        transition-all duration-std ease-smooth
                        hover:text-neutral-900
                        ${isActive ? 'text-neutral-900' : 'text-neutral-600'}
                        ${Icon ? 'group cursor-pointer' : ''}
                      `}
                    >
                      {Icon && (
                        <Icon 
                          className={`
                            h-4 w-4 transition-all duration-std group-hover:scale-110
                            ${isActive ? 'text-neutral-900' : 'text-neutral-500'}
                          `} 
                        />
                      )}
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="h-px bg-neutral-900 absolute -bottom-1 left-0"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bouton mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-std hover:bg-neutral-100"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="fixed top-16 left-4 right-4 bg-white rounded-lg shadow-glass z-50 lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="p-6 space-y-4">
                <UniverseSelector />
                
                <div className="border-t border-neutral-100 pt-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.href === '/' ? false : item.universe === universe;
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          item.universe && setUniverse(item.universe);
                          setIsOpen(false);
                        }}
                        className={`
                          flex items-center space-x-3 py-3 px-2 rounded-lg text-sm font-medium
                          transition-all duration-std ease-smooth
                          ${isActive ? 'bg-neutral-50 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}
                        `}
                      >
                        {Icon && <Icon className="h-5 w-5" />}
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer pour mobile */}
      <div className="h-20 lg:h-16" />
    </>
  );
}
