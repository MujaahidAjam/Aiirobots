import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import WorkHero from '@/components/work/work-hero';
import CaseStudiesGrid from '@/components/work/case-studies-grid';
import TestimonialsSection from '@/components/work/testimonials-section';

export const metadata: Metadata = {
  title: 'Our Work - Web Development & AI Success Stories',
  description: 'See our portfolio of successful web development, AI chatbot, and cloud infrastructure projects. Real results for South African businesses.',
  keywords: 'portfolio, case studies, web development examples, AI chatbot success stories, client testimonials',
  openGraph: {
    title: 'Our Work - Success Stories & Portfolio',
    description: 'See our portfolio of successful web development, AI chatbot, and cloud infrastructure projects.',
    url: `${SITE.url}/work`,
  },
  alternates: {
    canonical: `${SITE.url}/work`,
  }
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <CaseStudiesGrid />
      <TestimonialsSection />
    </>
  );
}