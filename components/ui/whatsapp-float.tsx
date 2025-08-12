'use client';

import { MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';
import { trackCTAClick } from '@/lib/analytics';

export default function WhatsAppFloat() {
  const handleClick = () => {
    trackCTAClick('WhatsApp', 'Floating Button');
  };

  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 group-hover:animate-none"></div>
    </a>
  );
}