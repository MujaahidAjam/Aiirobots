'use client';

import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Transparent, Affordable Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Help you win more customers with clear, fair pricing. All projects follow our 50% upfront, 50% on final sign-off policy.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">Payment Policy:</strong> 50% upfront, 50% on final sign-off of production-ready solution
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}