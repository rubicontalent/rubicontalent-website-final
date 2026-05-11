"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";

const inputClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/15";

const initialForm = {
  fullName: "",
  company: "",
  positionNeed: "",
  email: "",
  phone: "",
  message: ""
};

function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "rubicon-talent-contact",
          ...form
        })
      });
      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="texture-dark reveal-section py-16 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Start a confidential conversation.
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
            <p className="flex gap-2 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
              <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>All enquiries are handled confidentially.</span>
            </p>
          </div>
        </div>

        <form
          name="rubicon-talent-contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 text-white shadow-premium backdrop-blur-xl md:p-8"
        >
          <input type="hidden" name="form-name" value="rubicon-talent-contact" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          {status === "success" ? (
            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6">
              <h3 className="text-2xl font-semibold text-white">Thank you.</h3>
              <p className="mt-3 leading-7 text-slate-200">
                A consultant will contact you within 24 hours.
              </p>
              <Link
                href="https://wa.me/85254159260"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold sm:w-auto"
              >
                WhatsApp as a secondary option
              </Link>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Full Name</span>
                  <input
                    name="fullName"
                    className={inputClass}
                    required
                    value={form.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Company</span>
                  <input
                    name="company"
                    className={inputClass}
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    placeholder="Company name"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-white">
                    Position / Hiring Need
                  </span>
                  <input
                    name="positionNeed"
                    className={inputClass}
                    required
                    value={form.positionNeed}
                    onChange={(event) => updateField("positionNeed", event.target.value)}
                    placeholder="Role, function, or career move"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Email</span>
                  <input
                    name="email"
                    className={inputClass}
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Phone</span>
                  <input
                    name="phone"
                    className={inputClass}
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="+852"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-white">Message</span>
                  <textarea
                    name="message"
                    className={`${inputClass} min-h-36 resize-y`}
                    required
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Tell us the role you are hiring for, or the career move you are considering."
                  />
                </label>
              </div>

              {status === "error" ? (
                <p className="mt-4 rounded-xl border border-red-300/30 bg-red-500/10 p-3 text-sm text-red-100">
                  Something went wrong. Please email info@rubicontalent.net or contact us on WhatsApp.
                </p>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="gold-glow inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d9bd7b] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? "Submitting..." : "Send Enquiry"}
                </button>
                <Link
                  href="https://wa.me/85254159260"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold sm:w-auto"
                >
                  WhatsApp Us
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
