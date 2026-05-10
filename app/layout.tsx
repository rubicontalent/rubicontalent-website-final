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
    "Boutique Hong Kong executive search and recruitment partner for decisive hiring, confidential career moves, market mapping, and AI-assisted talent sourcing.",
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
      "Boutique Hong Kong executive search and recruitment partner for decisive hiring, confidential career moves, market mapping, and AI-assisted talent sourcing.",
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
      "Boutique Hong Kong executive search and recruitment partner for decisive hiring, confidential career moves, market mapping, and AI-assisted talent sourcing.",
    images: ["/images/hero.jpg"]
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": "https://rubicontalent.net/#organization",
  name: "Rubicon Talent Limited",
  alternateName: "\u6C7A\u6E21\u4EBA\u624D\u6709\u9650\u516C\u53F8",
  url: "https://rubicontalent.net",
  logo: "https://rubicontalent.net/images/logo.png",
  image: "https://rubicontalent.net/images/hero.jpg",
  email: "info@rubicontalent.net",
  telephone: "+852 54159260",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hong Kong",
    addressRegion: "Hong Kong",
    addressCountry: "HK"
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Hong Kong"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  sameAs: ["https://www.linkedin.com/"],
  additionalType: ["https://schema.org/LocalBusiness"],
  knowsAbout: [
    "Executive search",
    "Recruitment",
    "Headhunting",
    "Market mapping",
    "AI-assisted sourcing",
    "Career consultation"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-HK" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
