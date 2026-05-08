import Image from "next/image";

export function About() {
  return (
    <section id="about" className="texture-section reveal-section py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p className="section-kicker">About Rubicon Talent</p>
          <h2 className="section-title">Guided by Purpose. Driven by Impact.</h2>
          <p className="section-copy">
            Rubicon Talent represents the moment of commitment. We help clients and candidates
            make decisions that shape the future.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Decisive", "Strategic", "Confidential", "Founder-led"].map((value) => (
              <div key={value} className="rounded-2xl border border-gold/20 bg-white p-5 shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-glow">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-image-card min-h-[470px] border-gold/20 bg-navy p-8 lg:min-h-[540px]">
          <Image
            src="/images/background-texture.jpg"
            alt="Rubicon Talent strategic mission texture"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/72 to-black/65" />
          <div className="relative flex h-full min-h-[400px] flex-col justify-end">
            <p className="max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
              Decisive moves deserve disciplined search.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Built for clients and candidates who treat a hiring decision as a strategic
              commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
