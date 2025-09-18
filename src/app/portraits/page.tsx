'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Palette, Monitor, Clock, Star, Download } from 'lucide-react';

export default function PortraitsPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  return (
    <div className="min-h-screen">
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: theme.primary }}>
              🎨 Portraits
            </h1>
            <p className="text-xl text-gray-600">
              Vos souvenirs immortalisés
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center" style={{ color: theme.primary }}>
              Commander votre portrait
            </h2>
            <p className="text-center text-gray-600">
              Remplissez le formulaire pour votre commande personnalisée
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ '--tw-ring-color': theme.primary } as React.CSSProperties}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ '--tw-ring-color': theme.primary } as React.CSSProperties}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description du sujet</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ '--tw-ring-color': theme.primary } as React.CSSProperties}
                  placeholder="Décrivez la personne, l&apos;animal ou l&apos;objet à dessiner..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer la commande
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
