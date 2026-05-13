import Link from "next/link";
import { Award, BriefcaseBusiness } from "lucide-react";

const coverageAreas = [
  "Finance & Accounting",
  "Technology",
  "Commercial & Sales",
  "Supply Chain & Operations",
  "Luxury Retail & Operations",
  "Executive Leadership"
];

const representativeSearches = [
  "Regional Finance Manager",
  "APAC Sales Director",
  "Technology Lead",
  "Operations Director"
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
              Representative coverage areas and anonymised search examples across Hong Kong,
              Greater China, and APAC roles.
            </p>
          </div>
          <Link
            href="mailto:info@rubicontalent.net?subject=Speculative%20CV%20-%20Rubicon%20Talent"
            className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-8"
          >
            Send a speculative CV
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:gap-4 lg:grid-cols-3">
          {coverageAreas.map((area) => (
            <article key={area} className="mobile-tight-card group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-gold/35">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-gold">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink md:mt-6 md:text-xl">{area}</h3>
              <p className="mt-2 hidden text-sm leading-7 text-slate-600 sm:block md:mt-3">
                Search support across specialist, manager, and leadership appointments.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-gold/20 bg-navy p-5 text-white shadow-premium md:mt-8 md:p-7">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-gold" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Representative anonymous searches</h3>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:mt-5 md:gap-3 lg:grid-cols-4">
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
