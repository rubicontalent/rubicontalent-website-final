import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const styles = {
    primary:
      "gold-glow rounded-xl bg-gold px-6 py-3 text-black shadow-lg shadow-gold/20 hover:bg-[#d9bd7b] focus-visible:outline-gold",
    secondary:
      "rounded-xl border border-white/70 bg-white/[0.05] px-6 py-3 text-white hover:border-gold hover:bg-white/[0.12] hover:text-white focus-visible:outline-white",
    dark: "gold-glow rounded-xl bg-navy px-6 py-3 text-white shadow-lg shadow-slate-900/20 hover:bg-ink focus-visible:outline-ink",
    light:
      "rounded-xl border border-gold/50 bg-white px-6 py-3 text-navy hover:border-gold hover:text-black focus-visible:outline-gold"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 text-sm font-semibold transition duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
