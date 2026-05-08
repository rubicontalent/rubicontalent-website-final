import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rubicontalent.net"),
  title: "Rubicon Talent Limited | Executive Search & Headhunting in Hong Kong",
  description:
    "Premium Hong Kong executive search firm helping decisive companies and ambitious talent make career-defining moves.",
  keywords: [
    "Rubicon Talent",
    "Hong Kong recruitment",
    "headhunting Hong Kong",
    "AI recruitment",
    "executive search",
    "talent search"
  ],
  openGraph: {
    title: "Rubicon Talent Limited | Executive Search & Headhunting in Hong Kong",
    description:
      "Boutique executive search for decisive companies and ambitious talent in Hong Kong.",
    url: "https://rubicontalent.net",
    siteName: "Rubicon Talent",
    locale: "en_HK",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Rubicon Talent executive search hero visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubicon Talent Limited | Executive Search & Headhunting in Hong Kong",
    description:
      "Premium Hong Kong executive search firm helping decisive companies and ambitious talent make career-defining moves.",
    images: ["/images/hero.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-HK" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
