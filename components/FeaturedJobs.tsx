import Link from "next/link";
import { Award, BriefcaseBusiness } from "lucide-react";

const coverageAreas = [
  "Finance & Accounting",
  "Technology",
  "Commercial & Sales",
  "Supply Chain & Operations",
  "HR & Legal",
  "Executive Leadership"
];

const representativeSearches = [
  "Regional Finance Manager",
  "APAC Sales Director",
  "AI Engineer",
  "Supply Chain Lead"
];

export function FeaturedJobs() {
  return (
    <section id="jobs" className="reveal-section bg-white py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Typical Search Coverage</p>
            <h2 className="section-title">Mandates handled with discretion.</h2>
            <p className="section-copy">
              Representative coverage areas and anonymous-style search examples across Hong Kong
              and regional roles.
            </p>
          </div>
          <Link
            href="mailto:info@rubicontalent.net?subject=Speculative%20CV%20-%20Rubicon%20Talent"
            className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-8"
          >
            Send a speculative CV
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverageAreas.map((area) => (
            <article key={area} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-gold/40 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{area}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Search support across specialist, manager, and leadership appointments.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gold/20 bg-navy p-5 text-white shadow-premium md:p-7">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-gold" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Representative anonymous searches</h3>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {representativeSearches.map((search) => (
              <div key={search} className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold">
                {search}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
