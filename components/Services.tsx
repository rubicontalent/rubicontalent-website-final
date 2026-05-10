import { BarChart3, Brain, BriefcaseBusiness, Network, Search, Users } from "lucide-react";

const serviceCards = [
  {
    label: "Executive Search",
    description:
      "Discreet outreach for senior, specialist, and business-critical appointments where trust and timing matter.",
    icon: Search
  },
  {
    label: "Contingency Recruitment",
    description:
      "Focused shortlist delivery for permanent hires where the brief is clear and speed is commercially important.",
    icon: Users
  },
  {
    label: "Market Mapping",
    description:
      "Practical intelligence on target companies, talent availability, compensation signals, and competitor teams.",
    icon: BarChart3
  },
  {
    label: "AI Sourcing",
    description:
      "AI-assisted search workflows that expand reach while keeping screening, judgement, and candidate care human.",
    icon: Brain
  },
  {
    label: "Talent Pipeline",
    description:
      "Longer-term engagement with high-potential candidates before a role becomes urgent or publicly visible.",
    icon: Network
  },
  {
    label: "Career Consultation",
    description:
      "Confidential guidance for candidates weighing serious moves, market positioning, and interview readiness.",
    icon: BriefcaseBusiness
  }
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
          {serviceCards.map(({ label, description, icon: Icon }) => (
            <article
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-premium backdrop-blur transition duration-300 hover:scale-[1.03] hover:border-gold/50 hover:shadow-glow"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
