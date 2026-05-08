import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

const employerBullets = ["Executive Search", "AI Talent Mapping", "Strategic Hiring"];

export function EmployerSection() {
  return (
    <section id="employers" className="texture-dark reveal-section py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:gap-12 md:px-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#071421] p-2 shadow-premium transition duration-300 hover:scale-[1.03] hover:shadow-glow">
          <Image
            src="/images/employer-services.jpg"
            alt="Executive employer search services"
            width={1600}
            height={1067}
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>

        <div className="reveal">
          <p className="section-kicker">For Employers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Decisive hiring for roles that shape the business.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            We map the market, approach the right people, and turn complex hiring decisions into
            confident action.
          </p>
          <div className="mt-8 space-y-4">
            {employerBullets.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-lg font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="#contact">
              Request Talent Consultation
            </ButtonLink>
          </div>
        </div>

      </div>
    </section>
  );
}
