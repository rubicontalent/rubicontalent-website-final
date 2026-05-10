import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Rubicon Talent Limited",
  description: "Privacy and confidentiality policy for Rubicon Talent Limited."
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-5 py-16 text-ink md:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-gold">
          Back to Rubicon Talent
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Rubicon Talent Limited handles client, candidate, and referral enquiries
          confidentially. Information submitted to us is used to respond to enquiries, assess
          potential recruitment opportunities, and communicate about relevant hiring or career
          conversations.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          We do not sell personal information. Candidate profiles and client briefs are shared
          only where there is a legitimate recruitment purpose and appropriate consent or
          business context.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          To request access, correction, or removal of information, contact
          info@rubicontalent.net.
        </p>
      </div>
    </main>
  );
}
