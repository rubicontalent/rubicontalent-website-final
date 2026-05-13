import { BadgeCheck, Clock3, Compass, Handshake, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    title: "Clear Priorities",
    description: "A calibrated brief, realistic market view, and focused shortlist.",
    icon: Clock3
  },
  {
    title: "Confidentiality",
    description: "Sensitive hiring and career conversations are handled carefully from day one.",
    icon: ShieldCheck
  },
  {
    title: "Market Mapping",
    description: "Grounded intelligence on where relevant Hong Kong and APAC talent sits.",
    icon: Compass
  },
  {
    title: "Relationship-Led",
    description: "Introductions are handled with credibility, context, and candidate care.",
    icon: Handshake
  },
  {
    title: "Founder-Led Service",
    description: "Senior attention on the brief, shortlist, candidate experience, and close.",
    icon: BadgeCheck
  }
];

export function ClientTrust() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Client Trust</p>
          <h2 className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-white md:mt-3 md:text-5xl">
            Trusted for discreet Hong Kong search.
          </h2>
          <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
            Built for employers who need informed hiring support, thoughtful communication, and
            a confidential route into the market.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:gap-4 lg:grid-cols-5">
          {trustItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="mobile-tight-card rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-premium backdrop-blur transition duration-300 hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white md:mt-5">{title}</h3>
              <p className="mt-2 hidden text-sm leading-7 text-slate-300 sm:block md:mt-3">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
