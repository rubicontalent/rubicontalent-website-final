import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
  ["CV Spam", "Precision Search"],
  ["Reactive", "Strategic Market Mapping"],
  ["Volume Outreach", "Relationship-Led Search"],
  ["Generic Recruiting", "AI-Assisted Executive Search"]
];

export function WhyRubicon() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Why Rubicon</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Executive search with sharper intent.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Rubicon is designed for focused, confidential mandates where judgement matters more
            than volume.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-premium backdrop-blur">
          <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.06] text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            <div className="p-4 md:p-5">Traditional Recruiters</div>
            <div className="border-l border-white/10 p-4 md:p-5">Rubicon</div>
          </div>
          {comparisons.map(([traditional, rubicon]) => (
            <div key={traditional} className="grid grid-cols-2 border-b border-white/10 last:border-b-0">
              <div className="flex items-center gap-3 p-4 text-sm text-slate-300 md:p-5">
                <XCircle className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
                {traditional}
              </div>
              <div className="flex items-center gap-3 border-l border-white/10 p-4 text-sm font-semibold text-white md:p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {rubicon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
