# Site Web Laura - Artiste Polyvalente

Site web moderne pour Laura, artiste proposant des tatouages, portraits et ateliers de modèle vivant.

## 🎨 Fonctionnalités

- **Trois univers distincts** avec identités visuelles personnalisées
- **Formulaires structurés** pour chaque type de demande
- **Paiements en ligne** sécurisés avec Stripe
- **Système d'emails automatiques** pour les confirmations
- **Upload d'images** pour les références
- **Interface responsive** et moderne
- **SEO optimisé** pour chaque page

## 🚀 Installation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd feufollet
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration des variables d'environnement**
   
   Créez un fichier `.env.local` avec les variables suivantes :

   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # Email (Gmail recommandé)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Configuration Supabase**
   
   Créez un projet Supabase et configurez les tables suivantes :
   
   ```sql
   -- Table des demandes de tatouage
   CREATE TABLE tattoo_requests (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     client_name TEXT NOT NULL,
     client_email TEXT NOT NULL,
     client_phone TEXT NOT NULL,
     tattoo_type TEXT NOT NULL CHECK (tattoo_type IN ('flash', 'custom')),
     description TEXT NOT NULL,
     size TEXT NOT NULL,
     placement TEXT NOT NULL,
     budget INTEGER NOT NULL,
     availability TEXT[] NOT NULL,
     reference_images TEXT[],
     status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Table des demandes de portraits
   CREATE TABLE portrait_requests (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     client_name TEXT NOT NULL,
     client_email TEXT NOT NULL,
     client_phone TEXT NOT NULL,
     portrait_type TEXT NOT NULL CHECK (portrait_type IN ('digital', 'traditional')),
     subject_description TEXT NOT NULL,
     style TEXT NOT NULL,
     size TEXT NOT NULL,
     deadline DATE,
     reference_images TEXT[],
     budget INTEGER NOT NULL,
     status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Table des réservations d'ateliers
   CREATE TABLE workshop_bookings (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     client_name TEXT NOT NULL,
     client_email TEXT NOT NULL,
     client_phone TEXT NOT NULL,
     workshop_date DATE NOT NULL,
     workshop_type TEXT NOT NULL CHECK (workshop_type IN ('beginner', 'intermediate', 'advanced')),
     experience TEXT NOT NULL,
     special_requests TEXT,
     status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Table des paiements
   CREATE TABLE payments (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     request_id TEXT NOT NULL,
     request_type TEXT NOT NULL CHECK (request_type IN ('tattoo', 'portrait', 'workshop')),
     amount INTEGER NOT NULL,
     currency TEXT NOT NULL DEFAULT 'eur',
     status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'succeeded', 'failed', 'cancelled')),
     stripe_payment_intent_id TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Bucket pour les uploads d'images
   INSERT INTO storage.buckets (id, name, public) VALUES ('uploads', 'uploads', true);
   ```

5. **Configuration Stripe**
   
   - Créez un compte Stripe
   - Récupérez vos clés API
   - Configurez les webhooks pour `/api/webhooks/stripe`

6. **Configuration Email**
   
   Pour Gmail :
   - Activez l'authentification à 2 facteurs
   - Générez un mot de passe d'application
   - Utilisez ce mot de passe dans `EMAIL_PASS`

## 🏃‍♀️ Démarrage

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js
│   ├── tatouage/          # Section tatouages
│   ├── portraits/         # Section portraits
│   ├── ateliers/         # Section ateliers
│   └── api/              # API routes
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   └── forms/            # Formulaires
├── lib/                  # Utilitaires
│   ├── stripe/           # Configuration Stripe
│   ├── supabase/         # Configuration Supabase
│   ├── email/            # Système d'emails
│   └── validations/      # Schémas de validation
├── types/                # Types TypeScript
└── constants/            # Constantes et thèmes
```

## 🎨 Thèmes

Le site utilise un système de thèmes dynamiques :
- **Tatouage** : Tons chauds (marron, orange, rouge)
- **Portraits** : Tons neutres (gris, bleu, violet)
- **Ateliers** : Tons naturels (vert, émeraude, teal)

## 💳 Paiements

- **Tatouages** : Acompte de 30% (max 100€)
- **Portraits** : Acompte de 50% (max 50€)
- **Ateliers** : Paiement intégral (25-45€ selon le niveau)

## 📧 Emails automatiques

Le système envoie automatiquement :
- Confirmation de demande au client
- Notification à Laura pour chaque nouvelle demande
- Confirmation de paiement

## 🔧 Développement

```bash
# Linting
npm run lint

# Build
npm run build

# Production
npm start
```

## 📝 Notes importantes

- Les formulaires sont validés côté client et serveur
- Les images sont uploadées sur Supabase Storage
- Les paiements sont sécurisés avec Stripe
- Le site est responsive et optimisé SEO
- Les emails sont envoyés via SMTP

## 🆘 Support

Pour toute question ou problème, contactez l'équipe de développement.