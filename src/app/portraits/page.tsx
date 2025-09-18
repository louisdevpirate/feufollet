'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Palette, Monitor, Clock, Star, Download, ArrowRight, CheckCircle, Euro, MapPin } from 'lucide-react';

export default function PortraitsPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  const portraitTypes = [
    {
      name: 'Portrait Classique',
      description: 'Portrait traditionnel au crayon ou à l\'encre',
      icon: <Palette className="w-6 h-6" />,
      price: 'À partir de 80€',
      examples: ['Portrait de famille', 'Portrait d\'enfant', 'Portrait d\'animal'],
      features: ['Format A4', 'Livraison numérique', 'Révisions incluses']
    },
    {
      name: 'Portrait Numérique',
      description: 'Création digitale haute qualité',
      icon: <Monitor className="w-6 h-6" />,
      price: 'À partir de 120€',
      examples: ['Portrait stylisé', 'Portrait réaliste', 'Portrait fantasy'],
      features: ['Fichier HD', 'Plusieurs formats', 'Modifications illimitées']
    }
  ];

  const galleryImages = [
    { id: 1, src: '/api/placeholder/300/400', alt: 'Portrait classique', category: 'classique', title: 'Portrait au crayon' },
    { id: 2, src: '/api/placeholder/300/400', alt: 'Portrait numérique', category: 'numerique', title: 'Portrait stylisé' },
    { id: 3, src: '/api/placeholder/300/400', alt: 'Portrait animal', category: 'animal', title: 'Portrait d\'animal' },
    { id: 4, src: '/api/placeholder/300/400', alt: 'Portrait famille', category: 'famille', title: 'Portrait de famille' },
    { id: 5, src: '/api/placeholder/300/400', alt: 'Portrait fantasy', category: 'fantasy', title: 'Portrait fantasy' },
    { id: 6, src: '/api/placeholder/300/400', alt: 'Portrait enfant', category: 'enfant', title: 'Portrait d\'enfant' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Nous discutons de votre vision et de vos préférences artistiques'
    },
    {
      step: '02',
      title: 'Références',
      description: 'Vous fournissez les photos de référence pour le portrait'
    },
    {
      step: '03',
      title: 'Création',
      description: 'Réalisation du portrait selon vos spécifications'
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Réception de votre portrait finalisé et satisfaction garantie'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <Breadcrumbs items={[{ name: 'Portraits' }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                🎨 Portraits
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Des créations sur mesure qui capturent l&apos;essence
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Que ce soit un portrait classique au crayon ou une création numérique, 
                je transforme vos photos en œuvres d&apos;art uniques. 
                Chaque portrait raconte une histoire et immortalise un moment précieux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="px-8 py-4 text-lg">
                Voir mes réalisations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                Commander un portrait
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-8 py-3 rounded-md transition-all font-medium ${
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
                className={`px-8 py-3 rounded-md transition-all font-medium ${
                  activeTab === 'booking' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: activeTab === 'booking' ? theme.primary : 'transparent'
                }}
              >
                Commander
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Types de portraits */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Mes Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Choisissez le style de portrait qui correspond à votre vision
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {portraitTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4" style={{ color: theme.primary }}>
                          {type.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="text-2xl font-bold" style={{ color: theme.accent }}>
                          {type.price}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Exemples :</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {type.examples.map((example, i) => (
                                <li key={i}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Inclus :</h4>
                            <ul className="space-y-1">
                              {type.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: theme.accent }} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Galerie */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Mes Réalisations
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez quelques-uns de mes portraits récents
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 relative">
                      <div 
                        className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: theme.background }}
                      >
                        <span className="text-gray-400 text-sm">Image {image.id}</span>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-semibold text-sm">{image.title}</h3>
                          <p className="text-xs text-gray-300">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Processus */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Comment ça marche ?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Un processus simple et collaboratif pour votre portrait
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                      <span className="text-2xl font-bold" style={{ color: theme.primary }}>{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'booking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Commander votre portrait
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous pour votre commande
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
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
                      <label className="block text-sm font-medium mb-2">Type de portrait</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50">
                        <option value="">Sélectionnez un type</option>
                        <option value="classique">Portrait Classique</option>
                        <option value="numerique">Portrait Numérique</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="Décrivez votre projet de portrait..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Format souhaité</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          placeholder="ex: A4, A3, numérique..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Style</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          placeholder="ex: réaliste, stylisé, fantasy..."
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Délai souhaité</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50">
                        <option value="">Sélectionnez un délai</option>
                        <option value="urgent">Urgent (1 semaine)</option>
                        <option value="normal">Normal (2-3 semaines)</option>
                        <option value="flexible">Flexible (1 mois+)</option>
                      </select>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer la commande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Informations pratiques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Informations Pratiques
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <Clock className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Délais</h3>
                  <p className="text-gray-600">2-3 semaines selon complexité</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <MapPin className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Livraison</h3>
                  <p className="text-gray-600">Numérique ou physique</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <Euro className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Paiement</h3>
                  <p className="text-gray-600">50% à la commande, 50% à la livraison</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}