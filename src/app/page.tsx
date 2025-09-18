'use client';

import { motion } from 'framer-motion';
import { UniverseSelector } from '@/components/ui/universe-selector';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UNIVERSES } from '@/constants/themes';
import { useTheme } from '@/components/ui/theme-provider';
import Link from 'next/link';

export default function Home() {
  const { currentUniverse } = useTheme();
  const currentUniverseData = UNIVERSES[currentUniverse];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              Laura
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Artiste Polyvalente
            </p>
          </motion.div>

          <UniverseSelector />
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-6xl mb-6">{currentUniverseData.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                {currentUniverseData.name}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {currentUniverseData.description}
              </p>
              <Link href={currentUniverseData.path}>
                <Button size="lg" className="mr-4">
                  Découvrir
                </Button>
              </Link>
              <Link href={`${currentUniverseData.path}#contact`}>
                <Button variant="outline" size="lg">
                  Réserver
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {Object.entries(UNIVERSES).map(([key, universe]) => (
            <Card key={key} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{universe.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                  {universe.name}
                </h3>
                <p className="text-gray-600 mb-4">{universe.description}</p>
                <Link href={universe.path}>
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                À propos de Laura
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Passionnée par l&apos;art sous toutes ses formes, Laura vous accompagne dans vos projets créatifs. 
                Que ce soit pour un tatouage unique, un portrait personnalisé ou l&apos;apprentissage du dessin, 
                elle met son talent et son expérience à votre service.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 Laura - Artiste Polyvalente. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}