'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
import { trackCTAClick } from '@/lib/analytics';

export default function SecondaryCTA() {
  const handleCallClick = () => {
    trackCTAClick('Free Discovery Call', 'Secondary CTA');
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 sm:p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure where to start?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free 20-min discovery call and we'll help you identify the biggest opportunities for your business.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-slate-50 hover:scale-105 transition-all duration-200"
            onClick={handleCallClick}
          >
            <a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Book Free Discovery Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}