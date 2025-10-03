'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/layout/ThemeProvider';

interface HeroCinematicProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export function HeroCinematic({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
}: HeroCinematicProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const { universe } = useTheme();
  
  // Animations parallax
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background avec parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        {backgroundImage ? (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className={`
            w-full h-full opacity-90
            ${universe === 'tatouage' && 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900'}
            ${universe === 'portrait' && 'bg-gradient-to-br from-portrait-100 via-portrait-50 to-portrait-200'}
            ${universe === 'atelier' && 'bg-gradient-to-br from-atelier-100 via-atelier-50 to-atelier-200'}
          `} />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className={`
            inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-8
            ${universe === 'tatouage' && 'bg-black/20 border border-white/20'}
            ${universe === 'portrait' && 'bg-white/30 border border-white/20 text-portrait-900'}
            ${universe === 'atelier' && 'bg-white/30 border border-white/20 text-atelier-900'}
          `}
        >
          <Sparkles className="w-4 h-4" />
          <span>{subtitle}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className={`
            text-hero font-bold leading-tight mb-6
            ${universe === 'tatouage' && 'text-white'}
            ${universe === 'portrait' && 'text-portrait-900'}
            ${universe === 'atelier' && 'text-atelier-900'}
          `}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div variants={buttonVariants}>
            <Link
              href={primaryAction.href}
              className={`
                inline-flex items-center space-x-2 py-4 px-8 rounded-lg font-semibold text-lg
                transition-all duration-std ease-smooth overflow-hidden relative group
                ${universe === 'tatouage' && 'bg-white text-neutral-900 hover:bg-white/90'}
                ${universe === 'portrait' && 'bg-portrait-700 text-white hover:bg-portrait-600'}
                ${universe === 'atelier' && 'bg-atelier-700 text-white hover:bg-atelier-600'}
              `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{primaryAction.label}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-std" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>

          {secondaryAction && (
            <motion.div variants={buttonVariants}>
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center space-x-2 py-4 px-8 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all duration-std group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-std" />
                <span>{secondaryAction.label}</span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mt-2" />
      </motion.div>

      {/* Glassmorphism elements */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
        <motion.div
          className="glass p-6 rounded-hero backdrop-blur-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 mx-auto flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Création Unique</h3>
            <p className="text-sm text-white/80 text-center max-w-xs">
              Chaque œuvre est pensée et réalisée avec passion et expertise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
