'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';
import CTAButtons from '@/components/ui/cta-buttons';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We start by understanding your business, customers, and goals through detailed discovery sessions.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create user-focused designs and system architecture that align with your business objectives.'
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Develop your solution using modern, scalable technologies with regular progress updates.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy to production with thorough testing, training, and documentation for your team.'
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing maintenance, optimization, and support to ensure continued success and growth.'
  }
];

const tools = [
  'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure', 'AWS', 'Docker', 'OpenAI', 'Stripe', 'Tailwind CSS'
];

export default function AboutApproach() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Our Approach */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A proven process that ensures your project delivers real business value from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200 z-0">
                  <div className="h-full bg-blue-600 w-0 animate-pulse"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="bg-white border-2 border-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Tech */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Tools & Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with modern technology solutions.
          </p>
          <CTAButtons location="About Page" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}