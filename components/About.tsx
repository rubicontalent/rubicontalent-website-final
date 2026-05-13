import Image from "next/image";

export function About() {
  return (
    <section id="about" className="texture-section reveal-section py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:gap-12 md:px-8 lg:grid-cols-2">
        <div>
          <p className="section-kicker">About Rubicon Talent</p>
          <h2 className="section-title">A boutique search partner in Hong Kong.</h2>
          <p className="section-copy">
            Rubicon Talent works with employers and professionals who prefer direct advice,
            careful introductions, and a long-term view of the market.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
            {["Decisive", "Strategic", "Confidential", "Founder-led"].map((value) => (
              <div key={value} className="rounded-lg border border-gold/20 bg-white p-4 shadow-sm transition duration-300 hover:border-gold/35 md:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold md:text-sm md:tracking-[0.18em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-image-card min-h-[300px] border-gold/20 bg-navy p-5 md:min-h-[470px] md:p-8 lg:min-h-[540px]">
          <Image
            src="/images/background-texture.jpg"
            alt="Rubicon Talent strategic mission texture"
            fill
            quality={88}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/72 to-black/65" />
          <div className="relative flex h-full min-h-[250px] flex-col justify-end md:min-h-[400px]">
            <p className="max-w-md text-2xl font-semibold leading-tight text-white md:text-4xl">
              Discreet advice for considered decisions.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Built for clients and candidates who treat a hire, or a career move, as a serious
              commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
