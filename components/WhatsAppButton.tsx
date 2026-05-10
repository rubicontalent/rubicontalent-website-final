import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/85254159260"
      aria-label="WhatsApp Rubicon Talent"
      className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:grid"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </Link>
  );
}
