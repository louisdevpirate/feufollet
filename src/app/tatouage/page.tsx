'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ThemedButton } from '@/components/ui/themed-button';
import { useTheme } from '@/components/ui/theme-provider';
import { Zap, Palette, Clock, MapPin, Euro, ArrowRight, CheckCircle } from 'lucide-react';

export default function TattooPage() {
  const { theme, setUniverse } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  // Définir le thème tatouage au chargement de la page
  useEffect(() => {
    setUniverse('tatouage');
  }, [setUniverse]);

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
      <section className="relative pt-20 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ name: 'Tatouages' }]} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-black text-black leading-tight">
                TATOUAGES
                <br />
                <span className="text-4xl md:text-5xl font-light">sur mesure</span>
              </h1>
              
              <p className="text-xl text-gray-800 leading-relaxed max-w-lg">
                Des créations uniques gravées à vie. 
                Chaque tatouage raconte une histoire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center">
                  Réserver maintenant
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="text-black underline hover:no-underline transition-all duration-200">
                  Comment ça marche ?
                </button>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-white border-2 border-black relative overflow-hidden">
                {/* Illustration SVG en ligne noire */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Personne avec tatouage */}
                  <circle cx="200" cy="120" r="25" fill="none" stroke="black" strokeWidth="3"/>
                  <path d="M 200 145 L 200 200" stroke="black" strokeWidth="3" fill="none"/>
                  <path d="M 200 200 L 150 250" stroke="black" strokeWidth="3" fill="none"/>
                  <path d="M 200 200 L 250 250" stroke="black" strokeWidth="3" fill="none"/>
                  <path d="M 200 160 L 150 180" stroke="black" strokeWidth="3" fill="none"/>
                  <path d="M 200 160 L 250 180" stroke="black" strokeWidth="3" fill="none"/>
                  
                  {/* Tatouage sur le bras */}
                  <path d="M 150 180 Q 160 170 170 180 Q 160 190 150 180" stroke="black" strokeWidth="2" fill="none"/>
                  
                  {/* Outils de tatouage */}
                  <rect x="100" y="200" width="40" height="8" fill="none" stroke="black" strokeWidth="2"/>
                  <rect x="260" y="200" width="40" height="8" fill="none" stroke="black" strokeWidth="2"/>
                  
                  {/* Motifs décoratifs */}
                  <circle cx="80" cy="80" r="15" fill="none" stroke="black" strokeWidth="2"/>
                  <circle cx="320" cy="80" r="15" fill="none" stroke="black" strokeWidth="2"/>
                  <circle cx="80" cy="220" r="15" fill="none" stroke="black" strokeWidth="2"/>
                  <circle cx="320" cy="220" r="15" fill="none" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Cercles décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-black rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-black rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 border-2 border-black">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-8 py-3 rounded-md transition-all font-medium ${
                  activeTab === 'gallery' 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                Galerie
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-8 py-3 rounded-md transition-all font-medium ${
                  activeTab === 'booking' 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-black hover:bg-gray-200'
                }`}
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
            <section className="mb-20 py-16">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
                    MES SERVICES
                  </h2>
                  <div className="w-24 h-1 bg-black mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {tattooTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                          {type.icon}
                        </div>
                        <h3 className="text-3xl font-black text-black mb-3">{type.name}</h3>
                        <p className="text-lg text-gray-800 mb-4">{type.description}</p>
                        <div className="text-2xl font-bold text-black border-b-2 border-black pb-2 inline-block">
                          {type.price}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-black mb-3 text-lg">EXEMPLES</h4>
                          <ul className="space-y-2">
                            {type.examples.map((example, i) => (
                              <li key={i} className="text-gray-800 flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 text-lg">INCLUS</h4>
                          <ul className="space-y-2">
                            {type.features.map((feature, i) => (
                              <li key={i} className="text-gray-800 flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Galerie */}
            <section className="mb-20 py-16 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
                    MES RÉALISATIONS
                  </h2>
                  <div className="w-24 h-1 bg-black mx-auto"></div>
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
                      <div className="aspect-[3/4] bg-white border-2 border-black relative overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🖤</span>
                            </div>
                            <p className="text-sm font-bold text-black">{image.title}</p>
                            <p className="text-xs text-gray-600">{image.category}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Processus */}
            <section className="mb-20 py-16">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
                    COMMENT ÇA MARCHE ?
                  </h2>
                  <div className="w-24 h-1 bg-black mx-auto"></div>
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
                      <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 bg-white">
                        <span className="text-2xl font-black text-black">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-black mb-4 text-black">{step.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
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

              <Card className="bg-white border-2 border-black">
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

                    <ThemedButton type="submit" variant="primary" size="lg" className="w-full">
                      Envoyer la demande
                    </ThemedButton>
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
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <div className="bg-white border-2 border-black p-12">
              <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-black">
                INFORMATIONS PRATIQUES
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-16"></div>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 bg-white">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-black">HORAIRES</h3>
                  <p className="text-gray-800 text-lg">Lun-Sam: 10h-19h</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 bg-white">
                    <MapPin className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-black">ADRESSE</h3>
                  <p className="text-gray-800 text-lg">123 Rue de l&apos;Art<br />75000 Paris</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 bg-white">
                    <Euro className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-black">PAIEMENT</h3>
                  <p className="text-gray-800 text-lg">Espèces, CB, Virement</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}