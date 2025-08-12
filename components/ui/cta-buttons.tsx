'use client';

import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
import { trackCTAClick } from '@/lib/analytics';

interface CTAButtonsProps {
  location: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  showSecondary?: boolean;
}

export default function CTAButtons({ 
  location, 
  className = '', 
  size = 'default',
  showSecondary = true 
}: CTAButtonsProps) {
  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp', location);
  };

  const handleCallClick = () => {
    trackCTAClick('Book a Call', location);
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button 
        asChild 
        size={size}
        className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-200 shadow-lg"
        onClick={handleWhatsAppClick}
      >
        <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp Us
        </a>
      </Button>
      
      {showSecondary && (
        <Button 
          asChild 
          variant="outline" 
          size={size}
          className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
          onClick={handleCallClick}
        >
          <a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      )}
    </div>
  );
}