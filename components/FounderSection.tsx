import Image from "next/image";

export function FounderSection() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#071421] p-2 shadow-premium">
          <Image
            src="/images/founder.jpg"
            alt="Founder-led executive search at Rubicon Talent"
            width={900}
            height={1200}
            quality={88}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>

        <div>
          <p className="section-kicker">Founder-Led Search</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built for decisive hiring and confidential career moves.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              Rubicon Talent was created for clients and candidates who expect recruitment to be
              strategic, discreet, and commercially aware. As a founder-led boutique executive
              search firm, every conversation is treated as a relationship rather than a
              transaction.
            </p>
            <p>
              The firm combines market intelligence, AI-assisted sourcing, and relationship-driven
              headhunting to identify people who are both capable and credible.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/10 p-5">
            <p className="text-lg font-semibold text-white">
              AI-assisted precision with human judgment.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Technology supports search coverage. Human judgement protects fit, discretion, and
              long-term trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
