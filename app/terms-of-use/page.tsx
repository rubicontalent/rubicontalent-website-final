import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Rubicon Talent Limited",
  description: "Website terms of use for Rubicon Talent Limited."
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white px-5 py-16 text-ink md:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-gold">
          Back to Rubicon Talent
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-6 leading-8 text-slate-600">
          This website provides general information about Rubicon Talent Limited and its
          recruitment services. Content is provided for informational purposes and does not
          guarantee role availability, candidate availability, placement, or hiring outcomes.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          Users should not submit confidential third-party information unless they are authorised
          to do so. All enquiries remain subject to further discussion, qualification, and
          applicable recruitment terms.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          For questions about these terms, contact info@rubicontalent.net.
        </p>
      </div>
    </main>
  );
}
