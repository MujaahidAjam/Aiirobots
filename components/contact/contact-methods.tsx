'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { trackCTAClick } from '@/lib/analytics';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick response, perfect for urgent questions',
    action: 'Message Us',
    href: SITE.whatsappUrl,
    color: 'emerald'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Detailed project discussions and documentation',
    action: 'Email Us',
    href: `mailto:${SITE.email}`,
    color: 'blue'
  },
  {
    icon: Phone,
    title: 'Phone Call',
    description: 'Direct conversation about your requirements',
    action: 'Call Us',
    href: `tel:${SITE.phone}`,
    color: 'purple'
  }
];

export default function ContactMethods() {
  const handleClick = (method: string) => {
    trackCTAClick(method, 'Contact Methods');
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a
                href={method.href}
                target={method.title === 'Email' ? undefined : '_blank'}
                rel={method.title === 'Email' ? undefined : 'noopener noreferrer'}
                onClick={() => handleClick(method.action)}
                className="block p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`mx-auto w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-${method.color}-200 transition-colors`}>
                  <method.icon className={`h-8 w-8 text-${method.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {method.description}
                </p>
                
                <span className={`inline-flex items-center text-${method.color}-600 font-medium hover:text-${method.color}-700 transition-colors`}>
                  {method.action}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}