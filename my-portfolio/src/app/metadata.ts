// app/metadata.ts
import { Metadata } from 'next';

// Métadonnées SEO de base
const defaultMetadata: Metadata = {
  title: {
    default: 'Kylian Gachet | Portfolio',
    template: '%s | Kylian Gachet',
  },
  description: 'Portfolio de Kylian Gachet, développeur web et data analyst. Projets, compétences, et parcours professionnel.',
  keywords: [
    'Kylian Gachet', 
    'portfolio', 
    'développeur web', 
    'data analyst', 
    'développeur frontend', 
    'développeur full stack', 
    'react', 
    'typescript',
    'airbus',
    'développeur',
    'IA',
    'intelligence artificielle',
    'analyse de données',
    'data science'
  ],
  authors: [{ name: 'Kylian Gachet' }],
  creator: 'Kylian Gachet',
  publisher: 'Kylian Gachet',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://kyliangachet.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: 'Kylian Gachet | Portfolio',
    description: 'Portfolio de Kylian Gachet, développeur web et data analyst. Projets, compétences, et parcours professionnel.',
    url: 'https://kyliangachet.fr',
    siteName: 'Portfolio Kylian Gachet',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kylian Gachet Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kylian Gachet | Portfolio',
    description: 'Portfolio de Kylian Gachet, développeur web et data analyst. Projets, compétences, et parcours professionnel.',
    images: ['/og-image.jpg'],
    creator: '@KylianGachet',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'portfolio',
};

// Types pour les métadonnées des pages du projet
type ProjectMetadata = {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    title: string;
    description: string;
    images: string[];
  };
};

// Fonction pour générer des métadonnées pour les pages de projet
export function generateProjectMetadata(
  title: string,
  description: string,
  slug: string,
  imageUrl: string = '/images/placeholder-project.jpg'
): ProjectMetadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Kylian Gachet`,
      description,
      url: `https://kyliangachet.fr/projects/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title} | Kylian Gachet`,
      description,
      images: [imageUrl],
    },
  };
}

export default defaultMetadata;
