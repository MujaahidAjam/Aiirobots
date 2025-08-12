import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import AboutHero from '@/components/about/about-hero';
import AboutStory from '@/components/about/about-story';
import AboutApproach from '@/components/about/about-approach';

export const metadata: Metadata = {
  title: 'About Us - Your Digital Transformation Partners',
  description: 'Learn about Aii Robots\' mission to help South African businesses grow with modern web systems, AI automation, and cloud infrastructure.',
  keywords: 'about aii robots, web development company, AI consultancy, cloud services, South Africa, digital transformation',
  openGraph: {
    title: 'About Aii Robots - Your Digital Partners',
    description: 'Learn about our mission to help South African businesses grow with modern technology.',
    url: `${SITE.url}/about`,
  },
  alternates: {
    canonical: `${SITE.url}/about`,
  }
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutApproach />
    </>
  );
}