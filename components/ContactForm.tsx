"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

const inputClass =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/15";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "Client",
    message: ""
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `I am a: ${form.type}`,
      "",
      form.message,
      "",
      "CV upload note: Please attach your CV manually to this email before sending."
    ].join("\n");

    window.location.href = `mailto:info@rubicontalent.net?subject=${encodeURIComponent(
      `Rubicon Talent enquiry - ${form.type}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="texture-dark reveal-section py-16 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Start the conversation.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Tell us what role you are hiring for or what career move you are considering.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-premium backdrop-blur">
            <h3 className="text-xl font-semibold">Rubicon Talent</h3>
            <p className="text-sm text-gold">
              Rubicon Talent Limited{" \u00B7 "}{"\u6C7A\u6E21\u4EBA\u624D\u6709\u9650\u516C\u53F8"}
            </p>
            <p className="text-sm leading-7 text-slate-300">
              Hong Kong
              <br />
              Office hours: Mon-Fri 9:00am-6:00pm
            </p>
            <div className="space-y-3 text-sm">
              <Link href="tel:+85254159260" className="flex items-center gap-3 text-slate-200 hover:text-white">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                +852 54159260
              </Link>
              <Link href="mailto:info@rubicontalent.net" className="flex items-center gap-3 text-slate-200 hover:text-white">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                info@rubicontalent.net
              </Link>
              <Link href="https://wa.me/85254159260" className="flex items-center gap-3 text-slate-200 hover:text-white">
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                WhatsApp Rubicon Talent
              </Link>
            </div>
            <p className="border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
              All enquiries are handled confidentially.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-premium md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Name</span>
              <input
                className={inputClass}
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Company</span>
              <input
                className={inputClass}
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="Company name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Email</span>
              <input
                className={inputClass}
                type="email"
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Phone</span>
              <input
                className={inputClass}
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+852"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-ink">I am a</span>
              <select
                className={inputClass}
                value={form.type}
                onChange={(event) => updateField("type", event.target.value)}
              >
                <option>Client</option>
                <option>Candidate</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-ink">Message</span>
              <textarea
                className={`${inputClass} min-h-36 resize-y`}
                required
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about the role, your career plans, or the candidate you would like to refer."
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-ink">CV attachment</span>
              <input className={inputClass} type="file" accept=".pdf,.doc,.docx" />
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                The form opens your email client. Attach the CV to the email before sending.
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="gold-glow inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d9bd7b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
            >
              Send Enquiry
            </button>
            <Link
              href="https://wa.me/85254159260"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:bg-slate-50 sm:w-auto"
            >
              WhatsApp Us
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
