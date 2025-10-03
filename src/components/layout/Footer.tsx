'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-50 border-t border-neutral-200">
      <div className="container-responsive">
        <div className="py-12 md:py-16">
          {/* Contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-h3 font-bold text-neutral-900">laura</h3>
                <p className="text-neutral-600 max-w-md leading-relaxed">
                  Artiste passionnée par le tatouage, le portrait et l'enseignement. 
                  Chaque projet est une nouvelle aventure créative.
                </p>
                
                {/* Contact */} 
                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Contact</h4>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Laura Follet</p>
                    <p>Paris, France</p>
                    <p>hello@laurafollet.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h4 className="font-medium text-neutral-900">Navigation</h4>
                <nav className="space-y-2">
                  {[
                    { href: '/tatouage', label: 'Tatouage' },
                    { href: '/portrait', label: 'Portrait' },
                    { href: '/atelier', label: 'Atelier' },
                    { href: '/a-propos', label: 'À propos' },
                    { href: '/contact', label: 'Contact' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-std"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Réseaux sociaux */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="font-medium text-neutral-900">Suivre</h4>
                <div className="flex space-x-4">
                  {[
                    { href: 'mailto:hello@laurafollet.com', icon: Mail, label: 'Email' },
                    { href: '#', icon: Instagram, label: 'Instagram' },
                    { href: '#', icon: Linkedin, label: 'LinkedIn' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-2 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-std"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-neutral-600" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Séparateur */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t border-neutral-200 mt-8 pt-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0"
          >
            <p className="text-sm text-neutral-500">
              © {currentYear} Laura Follet. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/conditions" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-std">
                Mentions légales
              </Link>
              <Link href="/conditions#cgv" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-std">
                CGV
              </Link>
              <Link href="/conditions#rgpd" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-std">
                RGPD
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
