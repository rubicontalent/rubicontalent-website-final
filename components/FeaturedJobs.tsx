import Link from "next/link";
import { MapPin, WalletCards, Clock3 } from "lucide-react";
import { jobs } from "@/components/site-data";

export function FeaturedJobs() {
  return (
    <section id="jobs" className="reveal-section bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Featured Jobs</p>
            <h2 className="section-title">Selected current searches.</h2>
            <p className="section-copy">
              Selected searches across commercial, corporate, technology, finance, and operations
              roles in Hong Kong.
            </p>
          </div>
          <Link href="#contact" className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-8">
            Send a speculative CV
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {jobs.map((job) => (
            <article key={job.title} className="group flex min-h-[280px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-gold/40 hover:shadow-glow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <span className="text-sm font-bold">{job.title.slice(0, 2).toUpperCase()}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{job.title}</h3>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                  {job.location}
                </p>
                <p className="flex items-center gap-2">
                  <WalletCards className="h-4 w-4 text-gold" aria-hidden="true" />
                  {job.salary}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />
                  {job.type}
                </p>
              </div>
              <Link
                href={`mailto:info@rubicontalent.net?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                className="mt-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-gold group-hover:text-black"
              >
                Apply Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
