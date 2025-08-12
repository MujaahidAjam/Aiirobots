'use client';

import { motion } from 'framer-motion';
import { Globe, Bot, Cloud, Check } from 'lucide-react';
import { SERVICES } from '@/lib/site';
import CTAButtons from '@/components/ui/cta-buttons';

const iconMap = {
  Globe,
  Bot,
  Cloud
};

export default function ServicesSections() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.title}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-slate-600 mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <CTAButtons location={`Services - ${service.title}`} />
                </div>

                {/* Visual placeholder */}
                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'} bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-square flex items-center justify-center`}>
                  <div className="text-center">
                    <Icon className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">{service.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}