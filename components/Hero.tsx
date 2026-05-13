import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section id="top" className="hero-scene group relative flex min-h-[92svh] items-end overflow-hidden text-white sm:min-h-[100svh] sm:items-center">
      <Image
        src="/images/hero.jpg"
        alt="Hong Kong executive search visual for Rubicon Talent"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="hero-dark-overlay absolute inset-0 bg-black/50" />
      <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-t from-navy via-navy/82 to-black/10 sm:bg-gradient-to-r sm:from-navy/92 sm:via-navy/62 sm:to-black/24" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-navy via-navy/64 to-transparent sm:w-[66%] sm:via-navy/58" />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[72%] sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,28,44,0.98) 0%, rgba(11,28,44,0.92) 46%, rgba(11,28,44,0.54) 66%, transparent 100%)"
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-navy via-navy/82 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-[58%] bg-gradient-to-r from-navy via-navy/88 to-transparent sm:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-navy via-navy/90 to-transparent sm:h-[34%] sm:w-[60%] sm:bg-gradient-to-tr" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:pb-14 md:px-8 md:pt-32">
        <div className="reveal max-w-4xl">
          <p className="section-kicker">
            Rubicon Talent Limited{" \u00B7 "}{"\u6C7A\u6E21\u4EBA\u624D\u6709\u9650\u516C\u53F8"}
          </p>
          <h1 className="mt-4 max-w-[12ch] text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-white sm:mt-5 sm:max-w-4xl sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            Executive search for decisive hiring.
          </h1>
          <p className="mt-5 max-w-[19rem] text-[0.98rem] leading-7 text-slate-200 sm:max-w-2xl sm:text-lg md:mt-7 md:text-2xl">
            Founder-led recruitment for Hong Kong and APAC teams where judgement, discretion,
            and timing matter.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <ButtonLink href="#contact">Hire Talent</ButtonLink>
            <ButtonLink
              href="mailto:info@rubicontalent.net?subject=CV%20Submission%20-%20Rubicon%20Talent"
              variant="secondary"
            >
              Submit CV
            </ButtonLink>
          </div>

          <div className="mt-12 hidden max-w-3xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3 lg:mt-14">
            {[
              ["Based in", "Hong Kong"],
              ["Approach", "Discreet search"],
              ["Focus", "APAC talent moves"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur transition duration-300 hover:border-gold/45"
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
