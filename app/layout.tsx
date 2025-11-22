import type { Metadata, Viewport } from "next";
import Script from "next/script";
import React from "react";
import "../styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sarafcard.io"),
  title: {
    default:
      "SarafCard — Global Prepaid Card Ecosystem | Secure, Borderless Payments",
    template: "%s - SarafCard",
  },
  description:
    "SarafCard empowers users and partners with secure Visa & Mastercard prepaid cards, API distribution, and a global partner portal. Spend anywhere, manage everything in one dashboard.",
  keywords: [
    "SarafCard",
    "prepaid cards",
    "virtual cards",
    "Visa",
    "Mastercard",
    "B2B card platform",
    "digital vouchers",
    "borderless payments",
    "resellers",
    "fintech",
    "SarafCard.io",
  ],
  authors: [{ name: "SarafCard Inc." }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-80x80.png", sizes: "80x80", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarafcard.io/",
    siteName: "SarafCard",
    title: "SarafCard — Secure, Global Prepaid Card Ecosystem",
    description:
      "Global prepaid Visa & Mastercard ecosystem for individuals and resellers. Simple. Secure. Borderless.",
    images: [
      {
        url: "/assets/logos/SarafCard-Meta-Link-Image.jpg",
        width: 1200,
        height: 630,
        alt: "SarafCard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SarafCard",
    creator: "@SarafCard",
    title: "SarafCard — Secure, Global Prepaid Card Ecosystem",
    description:
      "Get prepaid Visa & Mastercard cards with borderless access and reseller API integration.",
    images: ["/assets/logos/SarafCard-Meta-Link-Image.jpg"],
  },
  other: {
    "apple-mobile-web-app-title": "SarafCard",
    "application-name": "SarafCard",
    "msapplication-TileColor": "#0B0B0C",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TZ8GZ35RK1"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TZ8GZ35RK1');
            `,
          }}
        />

        {/* Schema.org / Google Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SarafCard",
              url: "https://sarafcard.io/",
              logo: "https://sarafcard.io/assets/logos/SarafCard-Meta-Link-Image.jpg",
              sameAs: [
                "https://www.linkedin.com/company/sarafcard",
                "https://x.com/SarafCard",
                "https://www.instagram.com/SarafCard",
                "https://t.me/SarafCard",
              ],
              description:
                "SarafCard — prepaid Visa & Mastercard card ecosystem for resellers and end users. Secure, compliant, and borderless spending powered by SwiftReload Group.",
            }),
          }}
        />
      </head>
      <body className="bg-matte-black text-soft-white antialiased">
        {children}
      </body>
    </html>
  );
}
