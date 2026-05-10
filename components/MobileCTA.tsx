import Link from "next/link";
import { BriefcaseBusiness, FileText, MessageCircle } from "lucide-react";

const actions = [
  {
    label: "WhatsApp",
    href: "https://wa.me/85254159260",
    icon: MessageCircle
  },
  {
    label: "Submit CV",
    href: "mailto:info@rubicontalent.net?subject=CV%20Submission%20-%20Rubicon%20Talent",
    icon: FileText
  },
  {
    label: "Hire Talent",
    href: "#contact",
    icon: BriefcaseBusiness
  }
];

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 px-3 py-2 shadow-2xl backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex min-h-12 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2 text-[11px] font-semibold text-white transition hover:border-gold/50"
          >
            <Icon className="mb-1 h-4 w-4 text-gold" aria-hidden="true" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
