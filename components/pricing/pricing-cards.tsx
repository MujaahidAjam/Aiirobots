'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
import { trackCTAClick } from '@/lib/analytics';

const pricingData = {
  web: {
    build: [
      {
        name: 'Starter Site',
        price: 'From R4 950',
        description: '1-3 pages, modern design, WhatsApp lead form',
        features: [
          '1–3 pages with modern design',
          'WhatsApp lead form integration',
          'Basic SEO optimization',
          'Analytics setup',
          '1 round of revisions',
          'Mobile responsive design'
        ],
        popular: false
      },
      {
        name: 'Growth Site', 
        price: 'From R12 950',
        description: '5-10 pages, blog/CMS, contact forms',
        features: [
          '5–10 pages with custom design',
          'Blog/CMS functionality',
          'Contact forms & lead capture',
          'Calendly embed integration',
          'Performance optimizations',
          '2 rounds of revisions',
          'SEO optimization',
          'Analytics & tracking'
        ],
        popular: true
      },
      {
        name: 'Pro Web App',
        price: 'From R24 950', 
        description: 'Custom app, auth, dashboards, API integrations',
        features: [
          'Custom web application',
          'User authentication system',
          'Admin dashboards',
          'API integrations',
          'Staging environment',
          '3 rounds of revisions',
          'Complete handover & documentation',
          'Priority support'
        ],
        popular: false
      }
    ],
    maintenance: [
      {
        name: 'Starter Care',
        price: 'R599 / mo',
        description: 'Essential maintenance and security',
        features: [
          'Uptime monitoring & alerts',
          'Security patches & updates',
          'Monthly automated backups',
          '30 minutes of updates/changes',
          'Email support',
          'Performance monitoring'
        ],
        popular: false
      },
      {
        name: 'Growth Care',
        price: 'R1 199 / mo', 
        description: 'Everything in Starter + SEO & improvements',
        features: [
          'Everything in Starter Care',
          'SEO tweaks & optimizations',
          'A/B testing suggestions',
          '2 hours of updates/changes',
          'Priority support',
          'Monthly performance reports'
        ],
        popular: true
      },
      {
        name: 'Pro Care',
        price: 'R2 499 / mo',
        description: 'Full-service maintenance with strategy',
        features: [
          'Everything in Growth Care', 
          'Performance audits & optimization',
          '5 hours of updates/changes',
          'Quarterly roadmap planning',
          'Direct phone support',
          'Emergency response (2hr)'
        ],
        popular: false
      }
    ]
  },
  ai: {
    build: [
      {
        name: 'Starter Bot',
        price: 'From R5 950',
        description: 'Website lead bot with branded flow',
        features: [
          'Website lead generation bot',
          'Branded conversation flow',
          'Pre-built FAQ responses',
          'WhatsApp click-to-chat handoff',
          'Basic analytics dashboard',
          'Setup & training'
        ],
        popular: false
      },
      {
        name: 'Growth Bot (RAG)',
        price: 'From R12 950',
        description: 'Bot trained on your docs with CRM integration',
        features: [
          'Bot trained on your documents',
          'RAG (Retrieval-Augmented Generation)',
          'CRM lead capture integration',
          'Advanced conversation flows',
          'Analytics dashboard',
          'Knowledge base management',
          'Multi-channel support setup'
        ],
        popular: true
      },
      {
        name: 'Pro Agent (Multi-channel)',
        price: 'From R24 950',
        description: 'Web + WhatsApp + social media integration',
        features: [
          'Web + WhatsApp + Facebook/Instagram',
          'Human escalation & inbox system',
          'Advanced analytics & reporting',
          'CRM integrations (HubSpot, Zoho)',
          'Zapier/Make automation',
          'Custom training & optimization',
          '24/7 monitoring'
        ],
        popular: false
      }
    ],
    maintenance: [
      {
        name: 'Bot Care Starter',
        price: 'R699 / mo',
        description: 'Basic bot maintenance and updates',
        features: [
          'Prompt/FAQ updates',
          'Conversation logs review',
          'Minor bot improvements',
          'Monthly performance report',
          'Email support'
        ],
        popular: false
      },
      {
        name: 'Bot Care Growth',
        price: 'R1 499 / mo',
        description: 'Enhanced bot care with content updates',
        features: [
          'Everything in Starter',
          'Content refreshes & updates',
          'Monthly analytics report',
          '2 hours of bot improvements',
          'Knowledge base expansion',
          'Priority support'
        ],
        popular: true
      },
      {
        name: 'Bot Care Pro',
        price: 'R2 999 / mo',
        description: 'Full-service bot optimization',
        features: [
          'Everything in Growth',
          'Proactive bot tuning',
          '5 hours of improvements',
          'Monthly strategy call',
          'A/B testing & optimization',
          'Emergency support'
        ],
        popular: false
      }
    ]
  },
  cloud: {
    build: [
      {
        name: 'Cloud Essentials',
        price: 'From R6 950',
        description: 'Basic cloud setup with CI/CD',
        features: [
          'Azure/AWS account hardening',
          'CI/CD pipeline setup',
          'Staging environment',
          'Automated backups',
          'Basic monitoring',
          'Security configuration'
        ],
        popular: false
      },
      {
        name: 'Scale Ready',
        price: 'From R14 950',
        description: 'Production-ready with monitoring',
        features: [
          'Dockerized application setup',
          'Comprehensive monitoring & alerts',
          'Cost optimization & guardrails',
          'Detailed runbooks',
          'Load balancing configuration',
          'Database optimization',
          'Security hardening'
        ],
        popular: true
      },
      {
        name: 'Pro Cloud',
        price: 'From R29 950',
        description: 'Enterprise-grade infrastructure',
        features: [
          'Multi-environment setup',
          'Auto-scaling configuration',
          'Zero-downtime deployments',
          'SSO integration',
          'Disaster recovery plan',
          'Advanced monitoring',
          'Compliance documentation'
        ],
        popular: false
      }
    ],
    maintenance: [
      {
        name: 'Cloud Care Starter',
        price: 'R899 / mo',
        description: 'Essential cloud monitoring',
        features: [
          '24/7 monitoring & alerts',
          'Security patching',
          'Monthly cost review',
          'Backup verification',
          'Basic incident response'
        ],
        popular: false
      },
      {
        name: 'Cloud Care Growth',
        price: 'R1 799 / mo',
        description: 'Enhanced cloud management',
        features: [
          'Everything in Starter',
          'Incident response playbooks',
          '2 hours of SRE time',
          'Performance optimization',
          'Monthly infrastructure review'
        ],
        popular: true
      },
      {
        name: 'Cloud Care Pro',
        price: 'R3 499 / mo',
        description: 'Full SRE support',
        features: [
          'Everything in Growth',
          'Weekly infrastructure reviews',
          '5 hours of SRE time',
          'Capacity planning',
          'Architecture consulting',
          'Emergency escalation'
        ],
        popular: false
      }
    ]
  }
};

export default function PricingCards() {
  const [selectedCategory, setSelectedCategory] = useState<'web' | 'ai' | 'cloud'>('web');
  const [selectedType, setSelectedType] = useState<'build' | 'maintenance'>('build');

  const handleCTAClick = (planName: string) => {
    trackCTAClick('Pricing CTA', `${selectedCategory}-${selectedType}-${planName}`);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-lg flex">
            {Object.keys(pricingData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as 'web' | 'ai' | 'cloud')}
                className={`px-6 py-2 rounded-md font-medium capitalize transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category === 'ai' ? 'AI & Chatbots' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Type toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-lg flex">
            <button
              onClick={() => setSelectedType('build')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedType === 'build'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Build Once
            </button>
            <button
              onClick={() => setSelectedType('maintenance')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedType === 'maintenance'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Maintenance
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[selectedCategory][selectedType].map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-slate-900 hover:bg-slate-800'
                } hover:scale-105 transition-all duration-200`}
                onClick={() => handleCTAClick(plan.name)}
                asChild
              >
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Payment policy note */}
        <motion.div 
          className="text-center mt-12 p-6 bg-slate-50 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-700">
            <strong className="text-slate-900">All projects:</strong> 50% upfront, 50% on final sign-off. 
            Clear milestones + acceptance testing included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}