import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://toopilates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Too Pilates® | Site officiel",
    template: "%s | Too Pilates®",
  },

  description:
    "Too Pilates® est le site officiel de la méthode Too Pilates : Pilates, coaching, formation, bien-être et Pedagogical Framework.",

  keywords: [
    "Too Pilates",
    "Toopilates",
    "Too Pilates officiel",
    "Too Pilates site officiel",
    "Too Pilates Tunis",
    "Pilates Tunisie",
    "Pilates Tunis",
    "coach Pilates",
    "formation Pilates",
    "Pedagogical Framework",
  ],

  authors: [{ name: "Too Pilates®" }],
  creator: "Too Pilates®",
  publisher: "Too Pilates®",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Too Pilates®",
    title: "Too Pilates® | Site officiel",
    description:
      "Découvrez le site officiel de Too Pilates® : méthode Pilates, coaching, formation et Pedagogical Framework.",
    images: [
      {
        url: "/Logo-TOO-Pilates-noir.png",
        width: 1200,
        height: 630,
        alt: "Logo Too Pilates®",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Too Pilates® | Site officiel",
    description:
      "Découvrez le site officiel de Too Pilates® : Pilates, coaching, formation et bien-être.",
    images: ["/Logo-TOO-Pilates-noir.png"],
  },

  icons: {
    icon: "/Logo-TOO-Pilates.svg",
    shortcut: "/Logo-TOO-Pilates.svg",
    apple: "/Logo-TOO-Pilates-noir.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Too Pilates®",
    alternateName: ["Toopilates", "Too Pilates"],
    url: siteUrl,
    logo: `${siteUrl}/Logo-TOO-Pilates-noir.png`,
    description:
      "Too Pilates® est le site officiel de la méthode Too Pilates : Pilates, coaching, formation, bien-être et Pedagogical Framework.",
    sameAs: [
      "https://www.instagram.com/toopilates/"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hedyammar111@gmail.com",
      telephone: "+21656134950",
      contactType: "customer service",
      areaServed: "TN",
      availableLanguage: ["French", "Arabic", "English"],
    },
  };

  const jsonLdEn = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Too Pilates®",
    alternateName: ["Toopilates", "Too Pilates"],
    url: siteUrl,
    logo: `${siteUrl}/Logo-TOO-Pilates-noir.png`,
    description:
      "Too Pilates® is the official site of the Too Pilates method: Pilates, coaching, training, wellness and Pedagogical Framework.",
    sameAs: [
      "https://www.instagram.com/toopilates/"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hedyammar111@gmail.com",
      telephone: "+21656134950",
      contactType: "customer service",
      areaServed: "TN",
      availableLanguage: ["French", "Arabic", "English"],
    },
  };

  return (
    <html lang="fr">
      <body className={`${inter.className} site-bg`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEn) }}
        />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}