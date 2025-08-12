'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Fashion E-commerce Platform',
    category: 'Web',
    image: 'bg-gradient-to-br from-pink-100 to-purple-100',
    tags: ['Next.js', 'Stripe', 'Analytics'],
    problem: 'Slow loading times and poor mobile experience were causing 40% cart abandonment.',
    solution: 'Rebuilt with Next.js, optimized images, and added AI shopping assistant for personalized recommendations.',
    result: '28% increase in conversions, 3x faster page loads, 70% of inquiries handled by AI assistant.',
    metrics: {
      conversion: '+28%',
      speed: '3x faster',
      automation: '70% AI handled'
    }
  },
  {
    id: 2,
    title: 'Healthcare Practice Management',
    category: 'AI',
    image: 'bg-gradient-to-br from-emerald-100 to-blue-100',
    tags: ['RAG Bot', 'WhatsApp', 'Scheduling'],
    problem: 'Reception staff overwhelmed with appointment bookings and basic patient inquiries.',
    solution: 'AI assistant trained on practice procedures, integrated with booking system and WhatsApp.',
    result: 'Reduced phone calls by 60%, automated 80% of appointment bookings, improved patient satisfaction.',
    metrics: {
      calls: '-60%',
      bookings: '80% automated',
      satisfaction: '+35%'
    }
  },
  {
    id: 3,
    title: 'Manufacturing Cloud Migration',
    category: 'Cloud',
    image: 'bg-gradient-to-br from-slate-100 to-blue-100',
    tags: ['Azure', 'Docker', 'CI/CD'],
    problem: 'Legacy systems causing downtime, manual deployments taking hours, no disaster recovery.',
    solution: 'Containerized applications, automated CI/CD pipelines, multi-region deployment with monitoring.',
    result: '99.9% uptime, deployments reduced from hours to minutes, comprehensive disaster recovery.',
    metrics: {
      uptime: '99.9%',
      deployment: '5 min vs 4 hrs',
      recovery: 'Full DR plan'
    }
  },
  {
    id: 4,
    title: 'Restaurant Delivery Platform',
    category: 'Web',
    image: 'bg-gradient-to-br from-orange-100 to-red-100',
    tags: ['Real-time Orders', 'Maps API', 'Mobile'],
    problem: 'Manual order taking, no delivery tracking, customer complaints about wait times.',
    solution: 'Custom ordering platform with real-time tracking, automated kitchen workflows, SMS notifications.',
    result: 'Orders increased 150%, delivery accuracy improved, customer satisfaction scores doubled.',
    metrics: {
      orders: '+150%',
      accuracy: '+95%',
      satisfaction: '2x improvement'
    }
  },
  {
    id: 5,
    title: 'Legal Firm Document Assistant',
    category: 'AI',
    image: 'bg-gradient-to-br from-blue-100 to-purple-100',
    tags: ['Document AI', 'RAG', 'Security'],
    problem: 'Lawyers spending hours searching through case files and legal documents.',
    solution: 'AI assistant trained on firm\'s legal database with secure document retrieval and summarization.',
    result: 'Research time reduced by 70%, improved case preparation, enhanced client service delivery.',
    metrics: {
      research: '-70%',
      preparation: '3x faster',
      billable: '+40%'
    }
  },
  {
    id: 6,
    title: 'Education Portal Infrastructure',
    category: 'Cloud',
    image: 'bg-gradient-to-br from-green-100 to-teal-100',
    tags: ['Auto-scaling', 'CDN', 'Security'],
    problem: 'School portal crashed during enrollment periods, slow content delivery to remote areas.',
    solution: 'Auto-scaling infrastructure with CDN, load balancing, and enhanced security measures.',
    result: 'Handles 10x traffic spikes, 50% faster content delivery, zero security incidents.',
    metrics: {
      capacity: '10x scale',
      delivery: '50% faster',
      security: 'Zero incidents'
    }
  }
];

export default function CaseStudiesGrid() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <>
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
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real projects, real results. See how we've helped businesses transform and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCase(study)}
              >
                {/* Image placeholder */}
                <div className={`h-48 ${study.image} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                      <span className="text-2xl">{study.category === 'Web' ? '🌐' : study.category === 'AI' ? '🤖' : '☁️'}</span>
                    </div>
                    <span className="text-slate-600 font-medium">{study.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {study.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <div className="font-bold text-emerald-600">{Object.values(study.metrics)[0]}</div>
                      <div className="text-slate-500 text-xs">{Object.keys(study.metrics)[0]}</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">{Object.values(study.metrics)[1]}</div>
                      <div className="text-slate-500 text-xs">{Object.keys(study.metrics)[1]}</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">{Object.values(study.metrics)[2]}</div>
                      <div className="text-slate-500 text-xs">{Object.keys(study.metrics)[2]}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {selectedCase.category}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCase(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {selectedCase.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                  <p className="text-slate-600">{selectedCase.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                  <p className="text-slate-600">{selectedCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                  <p className="text-slate-600 mb-4">{selectedCase.result}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedCase.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-slate-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}