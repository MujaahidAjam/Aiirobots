'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
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
            Built by Developers, for Business
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're not another agency making big promises. We're experienced developers who understand 
            both technology and business, focused on delivering solutions that actually work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}