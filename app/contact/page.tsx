// app/contact/page.tsx
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: "Get in touch via WhatsApp, email or the form below.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact us</h1>
      <p className="mt-2 text-slate-600">
        Prefer WhatsApp or a call?{" "}
        <a className="underline" href={SITE.whatsappUrl} target="_blank" rel="noopener">
          WhatsApp
        </a>{" "}
        • <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> •{" "}
        <a className="underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
      </p>

      {/* Netlify Forms */}
      <form
        name="contact"
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="mt-8 grid gap-4"
      >
        {/* Netlify needs these two hidden fields */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="name">Name</label>
          <input id="name" name="name" required
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="phone">Phone (WhatsApp)</label>
          <input id="phone" name="phone"
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="service">Service</label>
          <select id="service" name="service" defaultValue="Web"
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400">
            <option>Web</option>
            <option>AI</option>
            <option>Cloud</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="budget">Budget (optional)</label>
          <input id="budget" name="budget" placeholder="e.g. R10 000 – R30 000"
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5}
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="consent" required className="mt-1" />
          <span>I consent to being contacted about this enquiry. (POPIA compliant)</span>
        </label>

        <button type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white shadow transition hover:brightness-110">
          Send enquiry
        </button>

        <p className="mt-2 text-xs text-slate-500">We aim to reply within 1 business day.</p>
      </form>
    </div>
  );
}
