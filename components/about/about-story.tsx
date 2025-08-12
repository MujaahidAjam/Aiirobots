'use client';

import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'We measure success by your business growth, not just technical metrics.'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'From kickoff to launch in weeks, not months. No endless meetings or delays.'
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We work as an extension of your team, understanding your business inside out.'
  }
];

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Too many South African businesses struggle with outdated systems, manual processes, 
                and missed opportunities to connect with customers online.
              </p>
              <p>
                We started Aii Robots to bridge this gap. Our team combines deep technical expertise 
                with business understanding to deliver solutions that drive real growth.
              </p>
              <p>
                Whether you need a modern website, intelligent automation, or scalable cloud infrastructure, 
                we focus on one thing: helping your business win more customers and operate more efficiently.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}