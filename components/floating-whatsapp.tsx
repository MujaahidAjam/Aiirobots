"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <Link
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:block">WhatsApp</span>
    </Link>
  );
}
