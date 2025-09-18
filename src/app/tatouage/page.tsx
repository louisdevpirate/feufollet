'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Zap, Palette, Clock, MapPin, Euro } from 'lucide-react';

export default function TattooPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  const tattooTypes = [
    {
      name: 'Flash',
      description: 'Designs prêts à tatouer',
      icon: <Zap className="w-6 h-6" />,
      price: 'À partir de 80€',
      examples: ['Petits motifs', 'Symboles', 'Lettres']
    },
    {
      name: 'Custom',
      description: 'Création sur mesure',
      icon: <Palette className="w-6 h-6" />,
      price: 'À partir de 150€',
      examples: ['Portraits', 'Paysages', 'Designs complexes']
    }
  ];

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
              🖤 Tatouages
            </h1>
            <p className="text-xl text-gray-600">
              Des créations uniques gravées à vie
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="bg-white/50 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'gallery' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: activeTab === 'gallery' ? theme.primary : 'transparent'
                }}
              >
                Galerie
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'booking' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: activeTab === 'booking' ? theme.primary : 'transparent'
                }}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {tattooTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div style={{ color: theme.primary }}>{type.icon}</div>
                      <h3 className="text-xl font-semibold">{type.name}</h3>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                    <p className="font-semibold" style={{ color: theme.accent }}>
                      {type.price}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Exemples :</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {type.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'booking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <h2 className="text-2xl font-bold text-center" style={{ color: theme.primary }}>
                  Réserver votre tatouage
                </h2>
                <p className="text-center text-gray-600">
                  Remplissez le formulaire ci-dessous pour votre demande
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
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Type de tatouage</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50">
                      <option value="">Sélectionnez un type</option>
                      <option value="flash">Flash</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="Décrivez votre projet de tatouage..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Taille</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="ex: 10x15cm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Emplacement</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="ex: bras, dos, jambe..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget approximatif</label>
                    <input
                      type="number"
                      min="50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="€"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6" style={{ color: theme.primary }}>
                Informations Pratiques
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent }} />
                  <h3 className="font-semibold mb-2">Horaires</h3>
                  <p className="text-gray-600">Lun-Sam: 10h-19h</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent }} />
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-600">123 Rue de l&apos;Art<br />75000 Paris</p>
                </div>
                <div className="text-center">
                  <Euro className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent }} />
                  <h3 className="font-semibold mb-2">Paiement</h3>
                  <p className="text-gray-600">Espèces, CB, Virement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}