import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import HeroSection from '@/components/home/hero-section';
import ValueProps from '@/components/home/value-props';
import FeaturedCaseStudy from '@/components/home/featured-case-study';
import SecondaryCTA from '@/components/home/secondary-cta';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        email: SITE.email,
        contactType: 'customer service',
        areaServed: 'ZA',
        availableLanguage: 'en'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA'
      },
      sameAs: [
        SITE.whatsappUrl
      ]
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#service`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.subheading,
      provider: {
        '@id': `${SITE.url}/#organization`
      },
      areaServed: 'ZA',
      serviceType: [
        'Web System Development',
        'AI & Chatbots', 
        'Cloud & DevOps'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web System Development',
              description: 'Fast Next.js apps, dashboards, integrations'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service', 
              name: 'AI & Chatbots',
              description: 'Lead bots, support bots, RAG over your docs'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud & DevOps', 
              description: 'Azure/AWS, CI/CD, containers, monitoring'
            }
          }
        ]
      }
    }
  ]
};

export const metadata: Metadata = {
  title: `${SITE.name} - ${SITE.tagline}`,
  description: SITE.subheading,
  keywords: 'web development, AI chatbots, cloud services, DevOps, South Africa, Next.js',
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.subheading,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} - ${SITE.tagline}`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.subheading,
    images: ['/og-image.png']
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
    }
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: SITE.url,
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ValueProps />
      <FeaturedCaseStudy />
      <SecondaryCTA />
    </>
  );
}