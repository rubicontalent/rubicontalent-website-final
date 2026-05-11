import { BadgeCheck, Map, MessageSquare, Search, UsersRound } from "lucide-react";

const steps = [
  {
    title: "Market Mapping",
    description: "Define the target market, competitor landscape, and realistic talent pool.",
    icon: Map
  },
  {
    title: "Talent Identification",
    description: "Build a focused list of high-fit candidates using research and AI-assisted sourcing.",
    icon: Search
  },
  {
    title: "Discreet Outreach",
    description: "Approach selected candidates with a confidential, credible role narrative.",
    icon: MessageSquare
  },
  {
    title: "Assessment & Shortlisting",
    description: "Evaluate motivation, capability, culture fit, and timing before introduction.",
    icon: UsersRound
  },
  {
    title: "Placement Support",
    description: "Support interview flow, offer alignment, and transition through the final decision.",
    icon: BadgeCheck
  }
];

export function ProcessSection() {
  return (
    <section className="texture-section reveal-section py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Our Search Process</p>
          <h2 className="section-title">A disciplined route from market insight to appointment.</h2>
          <p className="section-copy mx-auto">
            A clear executive-search workflow designed for confidential, high-conviction hiring.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-gold/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
