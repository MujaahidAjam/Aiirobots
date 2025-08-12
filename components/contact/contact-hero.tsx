'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and find the perfect solution for your business. 
            Free 20-minute discovery calls available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}