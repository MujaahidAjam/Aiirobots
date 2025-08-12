import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import PricingHero from '@/components/pricing/pricing-hero';
import PricingCards from '@/components/pricing/pricing-cards';

export const metadata: Metadata = {
  title: 'Pricing - Transparent, Affordable Web & AI Solutions',
  description: 'Clear, affordable pricing for web development, AI chatbots, and cloud services. 50% upfront, 50% on delivery. Build once or monthly maintenance options.',
  keywords: 'web development pricing, AI chatbot pricing, cloud services pricing, South Africa, transparent pricing',
  openGraph: {
    title: 'Our Pricing - Transparent & Affordable',
    description: 'Clear, affordable pricing for web development, AI chatbots, and cloud services. 50% upfront, 50% on delivery.',
    url: `${SITE.url}/pricing`,
  },
  alternates: {
    canonical: `${SITE.url}/pricing`,
  }
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
    </>
  );
}