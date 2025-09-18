'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ui/theme-provider';
import { Menu, X, Home, Palette, Zap, Users } from 'lucide-react';

export function Navbar() {
  const { currentUniverse, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Tatouages', href: '/tatouage', icon: Zap, universe: 'tatouage' },
    { name: 'Portraits', href: '/portraits', icon: Palette, universe: 'portraits' },
    { name: 'Ateliers', href: '/ateliers', icon: Users, universe: 'ateliers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className="text-2xl font-bold hover:scale-105 transition-transform"
              style={{ color: theme.primary }}
            >
              Laura
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
              Artiste Polyvalente
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.universe ? currentUniverse === item.universe : item.href === '/';
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                  style={{
                    backgroundColor: isActive ? `${theme.primary}20` : 'transparent',
                    color: isActive ? theme.primary : scrolled ? '#374151' : '#000000',
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? theme.primary : '#000000' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.universe ? currentUniverse === item.universe : item.href === '/';
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100"
                    style={{
                      backgroundColor: isActive ? `${theme.primary}20` : 'transparent',
                      color: isActive ? theme.primary : '#374151',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
