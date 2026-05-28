import "./globals.css";

import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import {
  createSeoMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "./seoConfig";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = createSeoMetadata({
  title: "Too Pilates® | Site officiel",
  verification: {
    google: "dw3eI4lDlnHJ1aiBY7lFSAfgvlYNlIW6KSOfCyxzxII",
  },
  description:
    "Site officiel de Too Pilates® : méthode Pilates moderne, coaching, formation, Pedagogical Framework, coachs officiels et ressources pédagogiques à Tunis.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [organizationJsonLd, websiteJsonLd];

  return (
    <html lang="fr">
      <body className={`${inter.className} site-bg`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}