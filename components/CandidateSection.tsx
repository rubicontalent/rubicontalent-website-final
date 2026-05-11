import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

const candidateBullets = ["Career Moves That Matter", "Confidential Opportunities"];

export function CandidateSection() {
  return (
    <section id="candidates" className="texture-section reveal-section py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:gap-12 md:px-8 lg:grid-cols-2">
        <div>
          <p className="section-kicker">For Candidates</p>
          <h2 className="section-title">Bold career moves, handled discreetly.</h2>
          <p className="section-copy">
            The right move should feel deliberate. We help ambitious professionals identify
            opportunities that fit their timing, strengths, and long-term direction.
          </p>
          <div className="mt-8 space-y-4">
            {candidateBullets.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-lg font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink
              href="mailto:info@rubicontalent.net?subject=CV%20Submission%20-%20Rubicon%20Talent"
              variant="dark"
            >
              Submit Your CV
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#071421] p-2 shadow-premium transition duration-300 hover:scale-[1.03] hover:shadow-glow">
          <Image
            src="/images/candidate-journey.jpg"
            alt="Candidate career journey"
            width={1600}
            height={1067}
            quality={88}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
