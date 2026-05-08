"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/components/site-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        hasScrolled || isOpen
          ? "border-white/10 bg-navy/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "border-white/10 bg-navy/72 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 py-4 md:h-[84px] md:gap-10 md:px-8">
        <Link href="#top" className="group flex shrink-0 items-center" aria-label="Rubicon Talent home">
          <Image
            src="/images/logo.png"
            alt="Rubicon Talent"
            width={980}
            height={250}
            priority
            quality={100}
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 220px"
            className="h-auto w-[136px] object-contain sm:w-[150px] md:w-[180px] xl:w-[220px]"
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="tel:+85254159260"
            className="whitespace-nowrap rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            +852 54159260
          </Link>
          <Link
            href="#contact"
            className="gold-glow rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#d9bd7b]"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-navy/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-3 rounded-xl bg-gold px-4 py-3 text-center text-sm font-semibold text-black"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="tel:+85254159260"
              className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              +852 54159260
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
