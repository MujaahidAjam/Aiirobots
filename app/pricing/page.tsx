import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingCards from "@/components/pricing/pricing-cards";

export const metadata: Metadata = {
  title: "Pricing - Transparent, Affordable Web & AI Solutions",
  description:
    "Clear, affordable pricing for web development, AI chatbots, and cloud services. 50% upfront, 50% on delivery. Build once or monthly maintenance options.",
  keywords:
    "web development pricing, AI chatbot pricing, cloud services pricing, South Africa, transparent pricing",
  openGraph: {
    title: "Our Pricing - Transparent & Affordable",
    description:
      "Clear, affordable pricing for web development, AI chatbots, and cloud services. 50% upfront, 50% on delivery.",
    url: `${SITE.url}/pricing`,
  },
  alternates: { canonical: `${SITE.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />

      <div className="bg-slate-50/60 border-t border-slate-200 mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-slate-700">
            <strong>Payment policy:</strong> 50% upfront to start, and 50% on final
            sign-off of the production-ready solution. Applies to Web, AI &
            Chatbots, and Cloud projects.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Maintenance tiers include updates, monitoring, and support based on the
            plan. Cancel anytime with 30 days’ notice.
          </p>
        </div>
      </div>
    </>
  );
}
