import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    "Founder-led Hong Kong executive search partner for confidential hiring, APAC talent moves, market mapping, and senior career advice.",
  keywords: [
    "Executive Search Hong Kong",
    "Headhunter Hong Kong",
    "Boutique Executive Search",
    "APAC executive search",
    "Executive Recruitment Firm Hong Kong",
    "Rubicon Talent",
    "Hong Kong recruitment",
    "headhunting Hong Kong",
    "Hong Kong headhunter",
    "executive search",
    "talent search"
  ],
  openGraph: {
    title: "Rubicon Talent Limited | Executive Search & Headhunting in Hong Kong",
    description:
      "Founder-led Hong Kong executive search partner for confidential hiring, APAC talent moves, market mapping, and senior career advice.",
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
      "Founder-led Hong Kong executive search partner for confidential hiring, APAC talent moves, market mapping, and senior career advice.",
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
    "APAC talent mapping",
    "Career consultation"
  ]
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

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
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {metaPixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}
        {linkedInPartnerId ? (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${linkedInPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript"; b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
          </Script>
        ) : null}
        {children}
      </body>
    </html>
  );
}
