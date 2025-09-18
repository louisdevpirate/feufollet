'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Users, Calendar, Clock, MapPin, Star, CheckCircle, ArrowRight, Euro } from 'lucide-react';

export default function AteliersPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'gallery' | 'booking'>('gallery');

  const workshopTypes = [
    {
      name: 'Atelier Débutant',
      description: 'Initiation au dessin de modèle vivant',
      icon: <Users className="w-6 h-6" />,
      price: '25€/séance',
      duration: '2h',
      maxParticipants: 8,
      features: ['Matériel fourni', 'Modèle professionnel', 'Encadrement individuel']
    },
    {
      name: 'Atelier Avancé',
      description: 'Perfectionnement des techniques de dessin',
      icon: <Star className="w-6 h-6" />,
      price: '35€/séance',
      duration: '3h',
      maxParticipants: 6,
      features: ['Techniques avancées', 'Critique constructive', 'Portfolio personnalisé']
    }
  ];

  const upcomingWorkshops = [
    {
      id: 1,
      date: '2024-01-15',
      time: '14h-16h',
      type: 'Débutant',
      spots: 6,
      maxSpots: 8,
      price: 25
    },
    {
      id: 2,
      date: '2024-01-18',
      time: '18h-21h',
      type: 'Avancé',
      spots: 4,
      maxSpots: 6,
      price: 35
    },
    {
      id: 3,
      date: '2024-01-22',
      time: '14h-16h',
      type: 'Débutant',
      spots: 8,
      maxSpots: 8,
      price: 25
    },
    {
      id: 4,
      date: '2024-01-25',
      time: '18h-21h',
      type: 'Avancé',
      spots: 2,
      maxSpots: 6,
      price: 35
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inscription',
      description: 'Choisissez votre atelier et réservez votre place'
    },
    {
      step: '02',
      title: 'Préparation',
      description: 'Recevez toutes les informations pratiques par email'
    },
    {
      step: '03',
      title: 'Participation',
      description: 'Profitez de l&apos;atelier dans une ambiance conviviale'
    },
    {
      step: '04',
      title: 'Suivi',
      description: 'Conseils personnalisés pour continuer votre progression'
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
          <Breadcrumbs items={[{ name: 'Ateliers' }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                🎭 Ateliers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Apprenez le dessin de modèle vivant
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Rejoignez mes ateliers hebdomadaires pour découvrir ou perfectionner 
                l&apos;art du dessin de modèle vivant. Dans une ambiance conviviale 
                et bienveillante, développez votre technique et votre créativité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="px-8 py-4 text-lg">
                Voir les prochains ateliers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                Réserver une place
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
                Ateliers
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
            {/* Types d'ateliers */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Mes Ateliers
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Choisissez l&apos;atelier qui correspond à votre niveau
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {workshopTypes.map((workshop, index) => (
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
                          {workshop.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{workshop.name}</h3>
                        <p className="text-gray-600 mb-4">{workshop.description}</p>
                        <div className="flex justify-center items-center space-x-4 mb-4">
                          <div className="text-2xl font-bold" style={{ color: theme.accent }}>
                            {workshop.price}
                          </div>
                          <div className="text-gray-500">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {workshop.duration}
                          </div>
                          <div className="text-gray-500">
                            <Users className="w-4 h-4 inline mr-1" />
                            Max {workshop.maxParticipants}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <h4 className="font-semibold mb-2">Inclus :</h4>
                          <ul className="space-y-1">
                            {workshop.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 mr-2" style={{ color: theme.accent }} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Prochains ateliers */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Prochains Ateliers
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Réservez votre place pour les prochaines sessions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {upcomingWorkshops.map((workshop, index) => (
                  <motion.div
                    key={workshop.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Atelier {workshop.type}</h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(workshop.date).toLocaleDateString('fr-FR', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center text-gray-600 mb-2">
                              <Clock className="w-4 h-4 mr-2" />
                              {workshop.time}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold" style={{ color: theme.accent }}>
                              {workshop.price}€
                            </div>
                            <div className="text-sm text-gray-500">
                              {workshop.spots}/{workshop.maxSpots} places
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-300"
                              style={{ 
                                width: `${(workshop.spots / workshop.maxSpots) * 100}%`,
                                backgroundColor: theme.primary
                              }}
                            ></div>
                          </div>
                        </div>

                        <Button 
                          className="w-full" 
                          disabled={workshop.spots === 0}
                          variant={workshop.spots === 0 ? "outline" : "primary"}
                        >
                          {workshop.spots === 0 ? 'Complet' : 'Réserver'}
                        </Button>
                      </CardContent>
                    </Card>
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
                  Un processus simple pour rejoindre mes ateliers
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
                  Réserver votre atelier
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous pour votre inscription
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
                      <label className="block text-sm font-medium mb-2">Niveau</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50">
                        <option value="">Sélectionnez votre niveau</option>
                        <option value="debutant">Débutant</option>
                        <option value="intermediaire">Intermédiaire</option>
                        <option value="avance">Avancé</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Atelier souhaité</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50">
                        <option value="">Sélectionnez un atelier</option>
                        <option value="debutant">Atelier Débutant - 25€</option>
                        <option value="avance">Atelier Avancé - 35€</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Date préférée</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Expérience en dessin</label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="Décrivez votre expérience en dessin..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Objectifs</label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="Que souhaitez-vous apprendre ou améliorer ?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer l&apos;inscription
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
                  <p className="text-gray-600">Mercredi 14h-16h<br />Samedi 18h-21h</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.background }}>
                    <MapPin className="w-8 h-8" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lieu</h3>
                  <p className="text-gray-600">Atelier Laura<br />123 Rue de l&apos;Art, Paris</p>
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