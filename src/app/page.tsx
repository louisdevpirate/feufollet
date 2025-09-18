'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UniverseSelector } from '@/components/ui/universe-selector';
import { useTheme } from '@/components/ui/theme-provider';
import { UNIVERSES } from '@/constants/themes';
import Link from 'next/link';
import { ArrowRight, Star, Users, Award, Palette, Zap, Users2 } from 'lucide-react';

export default function Home() {
  const { currentUniverse } = useTheme();
  const currentUniverseData = UNIVERSES[currentUniverse] || UNIVERSES.tatouage;

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Créations Uniques',
      description: 'Chaque œuvre est pensée et réalisée sur mesure selon vos souhaits'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Accompagnement Personnalisé',
      description: 'Un suivi individuel pour chaque projet, du concept à la réalisation'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise Reconnue',
      description: 'Plus de 5 ans d\'expérience dans l\'art et l\'enseignement'
    }
  ];

  const testimonials = [
    {
      name: 'Marie',
      text: 'Laura a transformé mon idée en un magnifique tatouage. Son professionnalisme et sa créativité sont exceptionnels.',
      rating: 5,
      service: 'Tatouage'
    },
    {
      name: 'Thomas',
      text: 'Le portrait de ma grand-mère réalisé par Laura est un véritable chef-d\'œuvre. Je recommande vivement !',
      rating: 5,
      service: 'Portrait'
    },
    {
      name: 'Sophie',
      text: 'Les ateliers de Laura m\'ont permis de découvrir le dessin. Une enseignante patiente et passionnée.',
      rating: 5,
      service: 'Atelier'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec effet de particules */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Laura
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Artiste Polyvalente
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Découvrez l&apos;univers artistique de Laura : tatouages personnalisés, 
              portraits sur commande et ateliers de modèle vivant. 
              Une créativité sans limites au service de vos projets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="px-8 py-4 text-lg">
                Découvrir mes créations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Réserver un rendez-vous
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Universe Selector Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Mes Univers Artistiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois domaines d&apos;expertise, trois façons d&apos;exprimer ma créativité. 
              Choisissez l&apos;univers qui vous inspire.
            </p>
          </motion.div>

          <UniverseSelector />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-6">{currentUniverseData.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  {currentUniverseData.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  {currentUniverseData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={currentUniverseData.path}>
                    <Button size="lg" className="px-8 py-4">
                      Explorer cet univers
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href={`${currentUniverseData.path}#contact`}>
                    <Button variant="outline" size="lg" className="px-8 py-4">
                      Réserver maintenant
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Choisir Laura ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche artistique unique alliant créativité, professionnalisme et passion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6" style={{ color: 'var(--primary)' }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce Que Disent Mes Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des témoignages authentiques de personnes qui ont fait confiance à ma créativité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Donner Vie à Votre Projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd&apos;hui pour discuter de votre projet artistique. 
              Ensemble, créons quelque chose d&apos;unique et de mémorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-gray-900 hover:bg-gray-100">
                <Palette className="mr-2 w-5 h-5" />
                Commencer mon projet
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                <Users2 className="mr-2 w-5 h-5" />
                Réserver un atelier
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}