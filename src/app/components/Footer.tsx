"use client";

import Link from "next/link";
import Image from "next/image";

const SPONSORS = [
  { name: "SVR", logo: "/sponsors/svr.png" },
  { name: "CitySport", logo: "/sponsors/citysport.jpg" },
  { name: "Delice", logo: "/sponsors/delice.jpg" },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com", icon: "FB" },
  { label: "TikTok", href: "https://tiktok.com", icon: "TT" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200/60 bg-gradient-to-b from-white to-gray-50 text-gray-700 dark:border-white/10 dark:from-gray-950 dark:to-gray-950 dark:text-gray-200">
      {/* Décor léger */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-500/10" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                  TOO
                </span>
                <span className="text-gray-900 dark:text-white">PILATES</span>
              </span>
              <span className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-700 dark:border-white/10 dark:bg-white/5 dark:text-fuchsia-200">
                Méthode
              </span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400">
              Rejoins nos cours et retrouve l’équilibre{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                corps & esprit
              </span>
              .
            </p>

            {/* Social */}
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-xs font-medium shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:border-fuchsia-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:focus:ring-fuchsia-300/30"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-[10px] font-bold text-white">
                    {s.icon}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>

          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Email:
                </span>{" "}
                <a
                  href="mailto:contact@toopilates.com"
                  className="underline-offset-4 hover:text-fuchsia-700 hover:underline dark:hover:text-fuchsia-300"
                >
                  contact@toopilates.com
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Téléphone:
                </span>{" "}
                <a
                  href="tel:+21600000000"
                  className="underline-offset-4 hover:text-fuchsia-700 hover:underline dark:hover:text-fuchsia-300"
                >
                  +216 00 000 000
                </a>
              </p>
            </div>

          </div>

          {/* Légal */}
          <div className="md:col-span-3 mt-7 min-w-[220px] md:mt-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Légal
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap text-gray-600 underline-offset-4 transition hover:text-fuchsia-700 hover:underline dark:text-gray-400 dark:hover:text-fuchsia-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Sponsors */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Ils nous font confiance
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Merci à nos partenaires qui soutiennent TOOPILATES.
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-3">
              {SPONSORS.map((sponsor) => (
                <li key={sponsor.name}>
                  <Link
                    href="/sponsors"
                    className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition hover:-translate-y-[1px] hover:border-fuchsia-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40 dark:border-white/10 dark:bg-gray-950 dark:hover:border-white/20 dark:focus:ring-fuchsia-300/30"
                    aria-label={`Voir les sponsors (ex: ${sponsor.name})`}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={92}
                      height={40}
                      className="h-10 w-auto object-contain grayscale transition group-hover:grayscale-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200/60 pt-6 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} TOOPILATES. Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span>Fait avec ♥ — Tunis</span>
            <span className="hidden md:inline">•</span>
            <Link
              href="/contact"
              className="underline-offset-4 transition hover:text-fuchsia-700 hover:underline dark:hover:text-fuchsia-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
