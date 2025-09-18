import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portraits - Laura Artiste | Vos souvenirs immortalisés',
  description: 'Commandez votre portrait personnalisé : digital ou traditionnel. Laura réalise des portraits uniques avec livraison rapide.',
  keywords: 'portrait, dessin, digital, traditionnel, commande, artiste, souvenir',
  openGraph: {
    title: 'Portraits - Laura Artiste',
    description: 'Vos souvenirs immortalisés',
    type: 'website',
  },
};

export default function PortraitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
