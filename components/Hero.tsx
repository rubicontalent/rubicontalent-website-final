import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section id="top" className="hero-scene group relative flex min-h-screen items-center overflow-hidden text-white">
      <Image
        src="/images/hero.jpg"
        alt="Hong Kong executive search visual for Rubicon Talent"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="hero-image object-cover"
        style={{ objectPosition: "72% center" }}
      />
      <div className="hero-dark-overlay absolute inset-0 bg-black/60" />
      <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-black/35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy via-navy/92 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[54%] bg-gradient-to-r from-navy via-navy/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[38%] w-[64%] bg-gradient-to-tr from-navy via-navy/95 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(200,169,106,.26),transparent_34%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:86px_86px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 md:px-8">
        <div className="reveal max-w-4xl">
          <p className="section-kicker">
            Rubicon Talent Limited{" \u00B7 "}{"\u6C7A\u6E21\u4EBA\u624D\u6709\u9650\u516C\u53F8"}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            Crossing the{" "}
            <span className="text-gold drop-shadow-[0_0_24px_rgba(200,169,106,.28)]">
              Rubicon
            </span>{" "}
            to Better Careers
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-2xl">
            We connect decisive companies and ambitious talent at the moment that matters most.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#employers">Hire Talent</ButtonLink>
            <ButtonLink href="#candidates" variant="secondary">
              Submit CV
            </ButtonLink>
          </div>

          <div className="mt-14 hidden max-w-3xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3">
            {[
              ["Clients", "Decisive hiring"],
              ["Candidates", "Bold career moves"],
              ["Market", "Hong Kong focus"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur transition duration-300 hover:scale-[1.03] hover:border-gold/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {label}
                </p>
                <p className="mt-2 text-base font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
