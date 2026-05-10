import Link from "next/link";
import { navItems } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-5 pb-28 pt-10 text-white md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Rubicon Talent Limited</p>
          <p className="mt-1 text-sm text-gold">
            {"\u6C7A\u6E21\u4EBA\u624D\u6709\u9650\u516C\u53F8"}
          </p>
          <p className="mt-2 text-sm text-slate-400">Boutique executive search in Hong Kong.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-gold">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
        <Link href="/privacy-policy" className="hover:text-gold">
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:text-gold">
          Terms of Use
        </Link>
        <Link href="https://www.linkedin.com/" className="hover:text-gold">
          LinkedIn
        </Link>
        <Link href="mailto:info@rubicontalent.net" className="hover:text-gold">
          Email
        </Link>
        <Link href="https://wa.me/85254159260" className="hover:text-gold">
          WhatsApp
        </Link>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Rubicon Talent Limited. All rights reserved.</p>
        <p>rubicontalent.net</p>
      </div>
    </footer>
  );
}
