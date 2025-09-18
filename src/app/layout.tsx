import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura - Artiste Polyvalente | Tatouages, Portraits & Ateliers",
  description: "Découvrez l'univers artistique de Laura : tatouages personnalisés, portraits sur commande et ateliers de modèle vivant. Réservez en ligne facilement.",
  keywords: "tatouage, portrait, atelier, modèle vivant, artiste, dessin, art",
  authors: [{ name: "Laura" }],
  openGraph: {
    title: "Laura - Artiste Polyvalente",
    description: "Tatouages, Portraits & Ateliers d'art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ color: 'var(--text)' }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
