// app/thank-you/page.tsx
export default function ThankYouPage() {
    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold">Thanks! We received your enquiry.</h1>
            <p className="mt-2 text-slate-600">
                We’ll get back to you soon. For urgent requests, WhatsApp us at{" "}
                <a href="https://wa.me/27640472350" className="underline" target="_blank" rel="noopener">
                    064 047 2350
                </a>.
            </p>
        </div>
    );
}
