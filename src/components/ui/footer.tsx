'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ui/theme-provider';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Tatouages', href: '/tatouage' },
        { name: 'Portraits', href: '/portraits' },
        { name: 'Ateliers', href: '/ateliers' },
      ]
    },
    {
      title: 'Informations',
      links: [
        { name: 'À propos', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'Légal',
      links: [
        { name: 'Mentions légales', href: '/legal' },
        { name: 'Politique de confidentialité', href: '/privacy' },
        { name: 'CGV', href: '/terms' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
                Laura
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Artiste polyvalente passionnée par l&apos;art sous toutes ses formes. 
                Tatouages, portraits et ateliers pour partager ma créativité.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:laura@example.com" 
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4" style={{ color: theme.primary }}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: theme.primary }}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" style={{ color: theme.accent }} />
                <span className="text-gray-300">123 Rue de l&apos;Art, 75000 Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: theme.accent }} />
                <span className="text-gray-300">06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: theme.accent }} />
                <span className="text-gray-300">laura@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" style={{ color: theme.accent }} />
                <span className="text-gray-300">Lun-Sam: 10h-19h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Laura - Artiste Polyvalente. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
