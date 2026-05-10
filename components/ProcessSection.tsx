const employerSteps = ["Brief", "Market Map", "Approach", "Shortlist", "Placement"];
const candidateSteps = ["Submit CV", "Confidential Call", "Matching", "Interview Support", "Career Move"];

function ProcessTrack({ title, steps }: { title: string; steps: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <div className="mt-6 grid gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-gold">
              {index + 1}
            </span>
            <span className="text-sm font-semibold text-slate-800">{step}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ProcessSection() {
  return (
    <section className="texture-section reveal-section py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Process</p>
          <h2 className="section-title">A clear path from first conversation to decisive move.</h2>
          <p className="section-copy mx-auto">
            Simple, confidential workflows for both hiring teams and candidates.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ProcessTrack title="For Employers" steps={employerSteps} />
          <ProcessTrack title="For Candidates" steps={candidateSteps} />
        </div>
      </div>
    </section>
  );
}
