"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={SITE.whatsappUrl} target="_blank" rel="noopener">
        <Button size="lg">WhatsApp Us</Button>
      </Link>
      <Link href={`mailto:${SITE.email}`}>
        <Button variant="outline" size="lg">Email Us</Button>
      </Link>
      <Link href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
        <Button variant="ghost" size="lg">Call {SITE.phone}</Button>
      </Link>
    </div>
  );
}
