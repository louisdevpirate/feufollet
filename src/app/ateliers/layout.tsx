import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ateliers - Laura Artiste | Apprenez l\'art du modèle vivant',
  description: 'Inscrivez-vous aux ateliers de dessin de Laura : débutant, intermédiaire ou avancé. Matériel fourni, groupes réduits.',
  keywords: 'atelier, dessin, modèle vivant, cours, apprentissage, artiste, Paris',
  openGraph: {
    title: 'Ateliers - Laura Artiste',
    description: 'Apprenez l\'art du modèle vivant',
    type: 'website',
  },
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
