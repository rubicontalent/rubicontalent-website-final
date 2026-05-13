import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";

export function ReferralSection() {
  return (
    <section id="referral" className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Referral Network</p>
          <h2 className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-white md:mt-3 md:text-5xl">
            Trusted introductions matter.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
            Many good appointments begin with a thoughtful referral.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:mt-4">
            Referrals are handled discreetly, with clear communication and respect for timing.
          </p>
          <div className="mt-7 md:mt-8">
            <ButtonLink href="#contact">Refer a Candidate</ButtonLink>
          </div>
        </div>

        <div className="mobile-editorial-image mt-8 rounded-lg border border-white/10 bg-[#071421] p-2 shadow-premium transition duration-300 hover:border-gold/35 md:mt-12">
          <Image
            src="/images/referral-network.jpg"
            alt="Professional referral network"
            width={1600}
            height={1067}
            quality={88}
            sizes="100vw"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
