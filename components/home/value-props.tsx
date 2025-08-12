'use client';

import { motion } from 'framer-motion';
import { Globe, Bot, Cloud } from 'lucide-react';

const valueProps = [
  {
    icon: Globe,
    title: 'Web Systems',
    description: 'Fast Next.js apps, dashboards, integrations.',
    details: 'Modern web applications built for performance and scale. From simple brochure sites to complex business systems.'
  },
  {
    icon: Bot,
    title: 'AI & Chatbots',
    description: 'Lead bots, support bots, RAG over your docs, CRM/Zapier/Make.',
    details: 'Intelligent automation that actually helps your customers and reduces your workload. Trained on your specific business knowledge.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Azure/AWS, CI/CD, containers, monitoring, scaling.',
    details: 'Rock-solid infrastructure that grows with your business. Automated deployments, monitoring, and cost optimization.'
  }
];

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to grow online
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From idea to launch, we handle the technical complexity so you can focus on your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="group bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                <prop.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {prop.title}
              </h3>
              
              <p className="text-slate-600 mb-4">
                {prop.description}
              </p>
              
              <p className="text-sm text-slate-500">
                {prop.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}