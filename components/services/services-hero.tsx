'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
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
            Services That Drive Results
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide the technical expertise to transform your business operations and accelerate growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}