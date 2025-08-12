'use client';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined') {
    // Simple event tracking - can be extended with GA4 or other analytics
    console.log('Analytics Event:', { action, category, label, value });
    
    // Store in localStorage for basic tracking
    const events = JSON.parse(localStorage.getItem('site-events') || '[]');
    events.push({
      timestamp: Date.now(),
      action,
      category,
      label,
      value
    });
    localStorage.setItem('site-events', JSON.stringify(events.slice(-100))); // Keep last 100 events
  }
};

// Common event helpers
export const trackCTAClick = (ctaType: string, location: string) => {
  trackEvent({
    action: 'click',
    category: 'CTA',
    label: `${ctaType} - ${location}`
  });
};

export const trackFormSubmit = (formType: string) => {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: formType
  });
};

export const trackPageView = (page: string) => {
  trackEvent({
    action: 'view',
    category: 'Page',
    label: page
  });
};