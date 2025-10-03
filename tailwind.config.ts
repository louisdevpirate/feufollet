import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Typographie harmonisée
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        portrait: ['Libre Baskerville', 'Playfair Display', 'serif'],
        tattoo: ['Bebas Neue', 'Oswald', 'sans-serif'],
        atelier: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      
      // Typographie scale harmonisée
      fontSize: {
        'hero': 'clamp(2.4rem, 4vw + 0.5rem, 4.2rem)',
        'h1': 'clamp(2rem, 3vw + 0.3rem, 3rem)',
        'h2': 'clamp(1.5rem, 2.5vw + 0.2rem, 2.2rem)',
        'h3': 'clamp(1.25rem, 2vw + 0.1rem, 1.75rem)',
        'body': '1rem',
        'small': '0.875rem',
      },
      
      // Container responsive
      maxWidth: {
        'container': '1200px',
      },
      
      // Spacing harmonisé
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
        'hero': 'clamp(6rem, 12vw, 8rem)',
      },
      
      // Couleurs par univers
      colors: {
        // Tatouage - noir & blanc contrasté
        tattoo: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        
        // Portrait - ivoire / sépia / brun
        portrait: {
          50: '#faf9f7',
          100: '#f5f3f0',
          500: '#8b7355',
          600: '#6d5843',
          700: '#5a4a38',
          900: '#3e3429',
        },
        
        // Atelier - olive / crème / vert doux
        atelier: {
          50: '#f7f8f3',
          100: '#eff0ea',
          500: '#7a8b54',
          600: '#6a7851',
          700: '#5a6948',
          900: '#3d4631',
        },
        
        // Neutres harmonisés
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      
      // Radius harmonisé  
      borderRadius: {
        'card': '0.75rem',
        'button': '0.5rem',
        'hero': '2rem',
      },
      
      // Ombres subtiles
      boxShadow: {
        'glass': '0 8px 30px rgba(0,0,0,0.12)',
        'subtle': '0 2px 8px rgba(0,0,0,0.08)',
        'hero': '0 25px 50px rgba(0,0,0,0.15)',
      },
      
      // Animations fluides
      transitionDuration: {
        'micro': '120ms',
        'std': '240ms',
        'hero': '420ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      
      // Breakpoints
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};

export default config;
