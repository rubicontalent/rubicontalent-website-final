import Link from "next/link";
import { BriefcaseBusiness, FileText, MessageCircle } from "lucide-react";

const actions = [
  {
    label: "Hire Talent",
    href: "#contact",
    icon: BriefcaseBusiness
  },
  {
    label: "CV",
    href: "mailto:info@rubicontalent.net?subject=CV%20Submission%20-%20Rubicon%20Talent",
    icon: FileText
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/85254159260",
    icon: MessageCircle
  }
];

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-[#071421]/96 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-[1.35fr_0.75fr_0.9fr] gap-2">
        {actions.map(({ label, href, icon: Icon }, index) => (
          <Link
            key={label}
            href={href}
            className={`flex min-h-12 items-center justify-center gap-2 rounded-lg px-3 py-2 text-[12px] font-semibold transition ${
              index === 0
                ? "bg-gold text-black shadow-lg shadow-gold/20"
                : "border border-white/10 bg-white/[0.06] text-white"
            }`}
          >
            <Icon
              className={`h-4 w-4 ${index === 0 ? "text-black" : "text-gold"}`}
              aria-hidden="true"
            />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
