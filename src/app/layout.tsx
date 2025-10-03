import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Laura - Artiste Tatouage, Portrait & Ateliers',
    template: '%s | Laura',
  },
  description: 'Découvrez l\'univers artistique de Laura : tatouages sur mesure, portraits personnalisés et ateliers créatifs. Une approche unique et chaleureuse de l\'art.',
  keywords: ['tatouage', 'portrait', 'atelier', 'artiste', 'art', 'dessin'],
  authors: [{ name: 'Laura' }],
  creator: 'Laura',
  publisher: 'Laura',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laurafollet.com',
    siteName: 'Laura Artiste',
    title: 'Laura - Artiste Tatouage, Portrait & Ateliers',
    description: 'Découvrez l\'univers artistique de Laura : tatouages sur mesure, portraits personnalisés et ateliers créatifs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laura Artiste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laura - Artiste Tatouage, Portrait & Ateliers',
    description: 'Découvrez l\'univers artistique de Laura : tatouages sur mesure, portraits personnalisés et ateliers créatifs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-white text-neutral-900">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}