import { BadgeCheck, Map, MessageSquare, Search, UsersRound } from "lucide-react";

const steps = [
  {
    title: "Market Mapping",
    description: "Define the target market, competitor landscape, and realistic talent pool.",
    icon: Map
  },
  {
    title: "Talent Identification",
    description: "Build a focused list of high-fit candidates through research and referrals.",
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
          <h2 className="section-title">A measured route from brief to appointment.</h2>
          <p className="section-copy mx-auto">
            A clear search workflow for confidential, high-conviction hiring.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:mt-12 md:gap-4 lg:grid-cols-5">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="mobile-tight-card rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-gold/35"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink md:mt-6">{title}</h3>
              <p className="mt-2 hidden text-sm leading-7 text-slate-600 sm:block md:mt-3">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
