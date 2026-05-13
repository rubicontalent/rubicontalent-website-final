import { BarChart3, BriefcaseBusiness, ListChecks, Network, Search, Users } from "lucide-react";

const serviceCards = [
  {
    label: "Executive Search",
    description:
      "Discreet outreach for senior, specialist, and business-critical appointments.",
    icon: Search
  },
  {
    label: "Contingency Recruitment",
    description:
      "Focused shortlist delivery for permanent hires where the brief is clear.",
    icon: Users
  },
  {
    label: "Market Mapping",
    description:
      "Practical intelligence on target companies, compensation signals, and competitor teams.",
    icon: BarChart3
  },
  {
    label: "Research-Led Sourcing",
    description:
      "Structured sourcing supported by modern tools, with human judgement at the centre.",
    icon: ListChecks
  },
  {
    label: "Talent Pipeline",
    description:
      "Longer-term engagement with high-potential candidates before a role becomes urgent.",
    icon: Network
  },
  {
    label: "Career Consultation",
    description:
      "Confidential guidance for candidates weighing serious moves and market positioning.",
    icon: BriefcaseBusiness
  }
];

export function Services() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Search Capabilities</p>
          <h2 className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-white md:mt-3 md:text-5xl">
            Focused search for important hires.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
            Executive search, market intelligence, and confidential career advice for Hong Kong
            and APAC talent decisions.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3">
          {serviceCards.map(({ label, description, icon: Icon }) => (
            <article
              key={label}
              className="mobile-tight-card group rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-premium backdrop-blur transition duration-300 hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/20 bg-gold/10 text-gold md:h-14 md:w-14">
                <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white md:mt-6 md:text-xl">{label}</h3>
              <p className="mt-2 hidden text-sm leading-7 text-slate-300 sm:block md:mt-3">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
