'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, FileCheck } from 'lucide-react';
import CTAButtons from '@/components/ui/cta-buttons';
import { SITE } from '@/lib/site';

const trustBadges = [
  { icon: Shield, text: 'SSL Secured' },
  { icon: Clock, text: '72h Kickoff' },
  { icon: FileCheck, text: 'POPIA Aware' }
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {SITE.tagline}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {SITE.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CTAButtons location="Hero" size="lg" />
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div 
                key={badge.text}
                className="flex items-center space-x-2 text-slate-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <badge.icon className="h-5 w-5 text-emerald-600" />
                <span className="font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}