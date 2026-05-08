import { BarChart3, Brain, BriefcaseBusiness, Network, Search, Users } from "lucide-react";

const serviceCards = [
  { label: "Executive Search", icon: Search },
  { label: "Contingency Recruitment", icon: Users },
  { label: "Market Mapping", icon: BarChart3 },
  { label: "AI Sourcing", icon: Brain },
  { label: "Talent Pipeline", icon: Network },
  { label: "Career Consultation", icon: BriefcaseBusiness }
];

export function Services() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Executive Search Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A sharper route through the market.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Strategic search, market intelligence, and career consultation for decisive hiring
            and meaningful career moves.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3">
          {serviceCards.map(({ label, icon: Icon }) => (
            <article
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-premium backdrop-blur transition duration-300 hover:scale-[1.03] hover:border-gold/50 hover:shadow-glow"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Focused support for the moments where precision, confidentiality, and timing
                matter.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
