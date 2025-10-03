'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Paintbrush, Camera, Palette, ArrowRight } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

const universeData = [
  {
    key: 'tatouage',
    title: 'Tatouage',
    subtitle: 'Art corporel',
    description: 'Transformez votre vision en tatouage unique grâce à un style artistique et moderne.',
    icon: Paintbrush,
    href: '/tatouage',
    stats: '50+ tatouages réalisés',
    color: 'neutral',
    features: ['Consultation personnalisée', 'Style adapté à vos goûts', 'Respect de votre peau'],
  },
  {
    key: 'portrait',
    title: 'Portrait',
    subtitle: 'Emotions capturées',
    description: 'Portraits intimes révélant l\'essence et les émotions de vos proches.',
    icon: Camera,
    href: '/portrait',
    stats: '200+ portraits',
    color: 'portrait',
    features: ['Qualité musée', 'Livraison numérique', 'Impression possible'],
  },
  {
    key: 'atelier',
    title: 'Atelier',
    subtitle: 'Transmission',
    description: 'Découvrez l\'art du portrait et développez votre créativité en petit groupe.',
    icon: Palette,
    href: '/atelier',
    stats: 'Formation disponible',
    color: 'atelier',
    features: ['Groupes limités', 'Matériel fourni', 'Certificats délivrés'],
  },
];

export function UniverseTiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { setUniverse } = useTheme();

  const handleUniverseChange = (universe: string) => {
    setUniverse(universe as 'tatouage' | 'portrait' | 'atelier');
  };

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-b from-white to-neutral-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 mb-6 text-neutral-900">
            Trois univers créatifs
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes domaines d'expertise artistique, chacun avec son identité visuelle unique
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {universeData.map((universe, index) => {
            const Icon = universe.icon;
            
            return (
              <motion.div
                key={universe.key}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Link
                  href={universe.href}
                  onClick={() => handleUniverseChange(universe.key)}
                  className="block h-full"
                >
                  <div className="
                    relative h-full p-8 rounded-hero border border-neutral-200
                    bg-white hover:bg-white/50 transition-all duration-std
                    hover:shadow-glass hover:border-neutral-300
                    group-hover:-translate-y-2
                  ">
                    {/* Background gradient */}
                    <div className={`
                      absolute inset-0 rounded-hero opacity-0 group-hover:opacity-5 transition-opacity duration-std
                      ${universe.color === 'neutral' && 'bg-gradient-to-br from-neutral-900 to-neutral-800'}
                      ${universe.color === 'portrait' && 'bg-gradient-to-br from-portrait-700 to-portrait-500'}
                      ${universe.color === 'atelier' && 'bg-gradient-to-br from-atelier-700 to-atelier-500'}
                    `} />

                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-card mb-6 flex items-center justify-center
                      border transition-all duration-std group-hover:scale-110
                      ${universe.color === 'neutral' && 'bg-neutral-50 border-neutral-200 group-hover:border-neutral-400'}
                      ${universe.color === 'portrait' && 'bg-portrait-50 border-portrait-200 group-hover:border-portrait-400'}
                      ${universe.color === 'atelier' && 'bg-atelier-50 border-atelier-200 group-hover:border-atelier-400'}
                    `}>
                      <Icon className={`
                        w-8 h-8 transition-colors duration-std
                        ${universe.color === 'neutral' && 'text-neutral-900 group-hover:text-neutral-700'}
                        ${universe.color === 'portrait' && 'text-portrait-700 group-hover:text-portrait-600'}
                        ${universe.color === 'atelier' && 'text-atelier-700 group-hover:text-atelier-600'}
                      `} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="space-y-4 mb-6">
                        <h3 className="text-h3 text-neutral-900 font-semibold">
                          {universe.title}
                        </h3>
                        <p className={`
                          text-sm font-medium uppercase tracking-wider
                          ${universe.color === 'neutral' && 'text-neutral-600'}
                          ${universe.color === 'portrait' && 'text-portrait-600'}
                          ${universe.color === 'atelier' && 'text-atelier-600'}
                        `}>
                          {universe.subtitle}
                        </p>
                        <p className="text-neutral-600 leading-relaxed">
                          {universe.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="mb-6">
                        <div className={`
                          inline-block px-3 py-1 rounded-full text-xs font-medium
                          ${universe.color === 'neutral' && 'bg-neutral-100 text-neutral-700'}
                          ${universe.color === 'portrait' && 'bg-portrait-100 text-portrait-700'}
                          ${universe.color === 'atelier' && 'bg-atelier-100 text-atelier-700'}
                        `}>
                          {universe.stats}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-8">
                        {universe.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-neutral-500">
                            <div className={`
                              w-1 h-1 rounded-full flex-shrink-0
                              ${universe.color === 'neutral' && 'bg-neutral-400'}
                              ${universe.color === 'portrait' && 'bg-portrait-400'}
                              ${universe.color === 'atelier' && 'bg-atelier-400'}
                            `} />
                            <sp>{feature}</sp>
                          </div>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center text-sm font-medium group-hover:text-neutral-900 transition-colors duration-std">
                        <span>Découvrir</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-std" />
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="
                      absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent
                      via-neutral-200 to-transparent group-hover:via-neutral-400
                      transition-colors duration-std
                    " />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">
            Vous avez une démarche artistique en tête ?
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Discutons de votre projet
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
