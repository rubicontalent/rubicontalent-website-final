import { BadgeCheck, Brain, Clock3, Compass, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    title: "Speed",
    description: "Clear search priorities and fast market feedback without sacrificing judgement.",
    icon: Clock3
  },
  {
    title: "Confidentiality",
    description: "Sensitive hiring and career conversations are handled with discretion from day one.",
    icon: ShieldCheck
  },
  {
    title: "Market Mapping",
    description: "Targeted intelligence on where relevant talent sits and how to approach it.",
    icon: Compass
  },
  {
    title: "AI-Assisted Sourcing",
    description: "Technology expands coverage while human judgement protects quality and fit.",
    icon: Brain
  },
  {
    title: "Founder-Led Service",
    description: "Senior attention on the brief, shortlist, and candidate experience.",
    icon: BadgeCheck
  }
];

export function ClientTrust() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Client Trust</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Why clients choose Rubicon Talent
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Built for employers who need decisive hiring support, thoughtful communication, and
            a confidential route into the Hong Kong talent market.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-premium backdrop-blur transition duration-300 hover:scale-[1.03] hover:border-gold/50 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
