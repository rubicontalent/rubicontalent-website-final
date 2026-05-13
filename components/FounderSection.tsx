import Image from "next/image";

export function FounderSection() {
  return (
    <section className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:gap-10 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mobile-editorial-image rounded-lg border border-white/10 bg-[#071421] p-2 shadow-premium">
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
          <h2 className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-white md:mt-3 md:text-5xl">
            Founder-led search, handled personally.
          </h2>
          <div className="mt-4 space-y-4 text-[0.95rem] leading-7 text-slate-300 md:mt-6 md:space-y-5 md:text-lg md:leading-8">
            <p>
              Rubicon Talent is a boutique Hong Kong search firm for clients and candidates who
              value discretion, market knowledge, and direct senior involvement. Each mandate is
              handled as a relationship, not a transaction.
            </p>
            <p className="hidden sm:block">
              The firm combines market mapping, careful outreach, and relationship-driven
              headhunting across Hong Kong and APAC talent networks.
            </p>
          </div>
          <div className="mt-6 rounded-lg border border-gold/20 bg-gold/10 p-4 md:mt-8 md:p-5">
            <p className="text-base font-semibold text-white md:text-lg">
              Selective search with senior judgement.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300 md:mt-3">
              Modern tools support the research. Human judgement protects fit, discretion, and
              long-term trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
