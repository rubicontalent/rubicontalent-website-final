import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";

export function ReferralSection() {
  return (
    <section id="referral" className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Referral Network</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Refer Talent. Create Opportunity.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Great careers often start with the right introduction.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Successful referrals may be rewarded, subject to placement terms and eligibility.
          </p>
          <div className="mt-8">
            <ButtonLink href="#contact">Refer a Candidate</ButtonLink>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#071421] p-2 shadow-premium transition duration-300 hover:scale-[1.03] hover:shadow-glow">
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
