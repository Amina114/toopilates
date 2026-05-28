import type { Metadata } from "next";

export const SITE_URL = "https://toopilates.com";

export const defaultKeywords = [
  "Too Pilates",
  "Toopilates",
  "Too Pilates officiel",
  "Too Pilates site officiel",
  "Too Pilates Tunisie",
  "Too Pilates Tunis",
  "Pilates Tunis",
  "Pilates Tunisie",
  "coach Pilates Tunis",
  "formation Pilates Tunisie",
  "méthode Pilates moderne",
  "Pedagogical Framework",
  "Too Pilates Method",
];

type SeoMetadataParams = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  verification?: {
    google?: string;
  };
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/Logo-TOO-Pilates-noir.png",
   verification,
}: SeoMetadataParams): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
      verification,
    authors: [{ name: "Too Pilates®" }],
    creator: "Too Pilates®",
    publisher: "Too Pilates®",

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalUrl,
      siteName: "Too Pilates®",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Logo officiel Too Pilates®",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Too Pilates®",
  alternateName: [
    "Too Pilates",
    "Toopilates",
    "Too Pilates Method",
    "Too Pilates Tunisie",
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/Logo-TOO-Pilates-noir.png`,
  description:
    "Too Pilates® est le site officiel de la méthode Too Pilates : Pilates moderne, coaching, formation, Pedagogical Framework et ressources pédagogiques.",
  sameAs: ["https://www.instagram.com/toopilates/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hedyammar111@gmail.com",
      telephone: "+21656134950",
      contactType: "customer service",
      areaServed: "TN",
      availableLanguage: ["fr", "ar", "en"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Too Pilates®",
  alternateName: ["Too Pilates", "Toopilates"],
  url: SITE_URL,
  inLanguage: ["fr", "en", "ar"],
  about: [
    "Méthode Pilates moderne",
    "Coaching Pilates",
    "Formation Pilates",
    "Pedagogical Framework",
    "Pilates à Tunis",
  ],
};