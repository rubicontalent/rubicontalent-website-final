import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";

export function ConsultationSection() {
  return (
    <section className="texture-section reveal-section py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-lg border border-gold/20 bg-white p-5 shadow-premium md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-kicker">Book a Consultation</p>
              <h2 className="section-title">Schedule a confidential discussion.</h2>
              <p className="section-copy">
                Discuss a hiring brief, a sensitive search, or a senior career move. We keep the
                first conversation practical, confidential, and clear.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="#contact"
                className="gold-glow inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d9bd7b]"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book a Consultation
              </Link>
              <Link
                href="https://wa.me/85254159260"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-navy transition hover:border-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Schedule a Confidential Discussion
              </Link>
            </div>
          </div>
          <div className="mt-6 hidden rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600 sm:block md:mt-8">
            For hiring teams, we can clarify the brief, likely market, compensation expectations,
            and approach before any outreach begins.
          </div>
        </div>
      </div>
    </section>
  );
}
