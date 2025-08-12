import type { Metadata } from 'next';
import { SITE, SERVICES } from '@/lib/site';
import ServicesHero from '@/components/services/services-hero';
import ServicesSections from '@/components/services/services-sections';

export const metadata: Metadata = {
  title: 'Services - Web Development, AI Chatbots & Cloud Solutions',
  description: 'Professional web development, AI chatbots, and cloud services for South African businesses. Next.js apps, intelligent automation, and scalable infrastructure.',
  keywords: 'web development services, AI chatbot development, cloud services, DevOps, Next.js development, business automation, South Africa',
  openGraph: {
    title: 'Our Services - Web, AI & Cloud Solutions',
    description: 'Professional web development, AI chatbots, and cloud services for South African businesses.',
    url: `${SITE.url}/services`,
  },
  alternates: {
    canonical: `${SITE.url}/services`,
  }
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSections />
    </>
  );
}