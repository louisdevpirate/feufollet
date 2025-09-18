'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Zap, Palette, Clock, MapPin, Euro, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function TattooPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  const tattooTypes = [
    {
      name: 'Flash',
      description: 'Designs prêts à tatouer',
      icon: <Zap className="w-6 h-6" />,
      price: 'À partir de 80€',
      examples: ['Petits motifs', 'Symboles', 'Lettres'],
      features: ['Designs uniques', 'Réalisation rapide', 'Prix attractif']
    },
    {
      name: 'Custom',
      description: 'Création sur mesure',
      icon: <Palette className="w-6 h-6" />,
      price: 'À partir de 150€',
      examples: ['Portraits', 'Paysages', 'Designs complexes'],
      features: ['Design personnalisé', 'Consultation détaillée', 'Résultat unique']
    }
  ];

  const galleryImages = [
    { id: 1, src: '/api/placeholder/300/400', alt: 'Tatouage floral', category: 'flash', title: 'Motif floral délicat' },
    { id: 2, src: '/api/placeholder/300/400', alt: 'Tatouage géométrique', category: 'custom', title: 'Géométrie moderne' },
    { id: 3, src: '/api/placeholder/300/400', alt: 'Tatouage portrait', category: 'custom', title: 'Portrait réaliste' },
    { id: 4, src: '/api/placeholder/300/400', alt: 'Tatouage minimaliste', category: 'flash', title: 'Minimalisme élégant' },
    { id: 5, src: '/api/placeholder/300/400', alt: 'Tatouage animal', category: 'custom', title: 'Animal totem' },
    { id: 6, src: '/api/placeholder/300/400', alt: 'Tatouage lettrage', category: 'flash', title: 'Calligraphie artistique' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Nous discutons de votre projet, vos inspirations et vos contraintes'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Création du design personnalisé ou sélection parmi les flashs'
    },
    {
      step: '03',
      title: 'Réservation',
      description: 'Planification de votre séance selon vos disponibilités'
    },
    {
      step: '04',
      title: 'Réalisation',
      description: 'Séance de tatouage dans un environnement professionnel et sécurisé'
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
          <Breadcrumbs items={[{ name: 'Tatouages' }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                🖤 Tatouages
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Des créations uniques gravées à vie
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Que ce soit un design flash ou une création sur mesure, 
                chaque tatouage raconte une histoire. Laissez-moi transformer 
                vos idées en œuvres d&apos;art permanentes.
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
                Réserver une consultation
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
                Réserver
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
            {/* Types de tatouages */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Mes Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Choisissez le type de tatouage qui correspond à votre projet
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tattooTypes.map((type, index) => (
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
                  Découvrez quelques-unes de mes créations récentes
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
                  Un processus simple et professionnel pour votre tatouage
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
                  Réserver votre tatouage
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous pour votre demande
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Disponibilités</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day) => (
                          <label key={day} className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{day}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer la demande
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
                  <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                  <p className="text-gray-600">Lun-Sam: 10h-19h</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <MapPin className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-600">123 Rue de l&apos;Art<br />75000 Paris</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <Euro className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Paiement</h3>
                  <p className="text-gray-600">Espèces, CB, Virement</p>
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