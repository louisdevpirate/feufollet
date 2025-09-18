import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tatouages - Laura Artiste | Créations uniques gravées à vie',
  description: 'Découvrez les tatouages de Laura : designs flash et créations sur mesure. Réservez votre séance en ligne avec paiement sécurisé.',
  keywords: 'tatouage, flash, custom, artiste, Paris, réservation en ligne',
  openGraph: {
    title: 'Tatouages - Laura Artiste',
    description: 'Créations uniques gravées à vie',
    type: 'website',
  },
};

export default function TattooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
