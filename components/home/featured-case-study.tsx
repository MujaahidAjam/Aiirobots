'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ShoppingCart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeaturedCaseStudy() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Success Story
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  E-commerce conversion up 28% after redesign + AI assistant
                </h3>
                
                <p className="text-slate-600 mb-8">
                  A Cape Town fashion retailer saw dramatic improvements in customer engagement and sales after implementing our complete web + AI solution. The new site loads 3x faster and the AI assistant handles 70% of customer inquiries.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">28%</div>
                    <div className="text-sm text-slate-600">Conversion</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">3x</div>
                    <div className="text-sm text-slate-600">Faster</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">70%</div>
                    <div className="text-sm text-slate-600">AI Handled</div>
                  </div>
                </div>

                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/work">View Full Case Study</Link>
                </Button>
              </div>

              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 lg:min-h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <ShoppingCart className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-slate-600">Fashion E-commerce Platform</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}