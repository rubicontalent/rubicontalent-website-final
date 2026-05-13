import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

const employerBullets = ["Executive Search", "Market Mapping", "APAC Hiring"];

export function EmployerSection() {
  return (
    <section id="employers" className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:gap-12 md:px-8 lg:grid-cols-2">
        <div className="mobile-editorial-image rounded-lg border border-white/10 bg-[#071421] p-2 shadow-premium transition duration-300 hover:border-gold/35">
          <Image
            src="/images/employer-services.jpg"
            alt="Executive employer search services"
            width={1600}
            height={1067}
            quality={88}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>

        <div className="reveal">
          <p className="section-kicker">For Employers</p>
          <h2 className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-white md:mt-3 md:text-5xl">
            Hiring support for business-critical roles.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
            We map the market, approach relevant people discreetly, and help employers make
            confident hiring decisions across Hong Kong and APAC.
          </p>
          <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
            {employerBullets.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-base font-medium text-white md:text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 md:mt-8">
            <ButtonLink href="#contact">
              Request Talent Consultation
            </ButtonLink>
          </div>
        </div>

      </div>
    </section>
  );
}
