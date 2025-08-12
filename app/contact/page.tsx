import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import ContactHero from '@/components/contact/contact-hero';
import ContactMethods from '@/components/contact/contact-methods';
import ContactForm from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Project Started Today',
  description: 'Ready to start your web, AI, or cloud project? Contact Aii Robots via WhatsApp, email, or phone. Free 20-minute discovery calls available.',
  keywords: 'contact, web development quote, AI chatbot consultation, cloud services, South Africa',
  openGraph: {
    title: 'Contact Us - Get Your Project Started',
    description: 'Ready to start your web, AI, or cloud project? Contact us today for a free consultation.',
    url: `${SITE.url}/contact`,
  },
  alternates: {
    canonical: `${SITE.url}/contact`,
  }
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
    </>
  );
}