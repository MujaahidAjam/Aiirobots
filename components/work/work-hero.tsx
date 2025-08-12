'use client';

import { motion } from 'framer-motion';

export default function WorkHero() {
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
            Real Results for Real Businesses
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped South African businesses grow with modern web systems, 
            intelligent automation, and scalable cloud infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}