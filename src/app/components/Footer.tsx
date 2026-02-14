"use client";

import Link from "next/link";
import Image from "next/image";

const SPONSORS = [
  { name: "SVR", logo: "/sponsors/svr.png" },
  { name: "CitySport", logo: "/sponsors/citysport.jpg" },
  { name: "Delice", logo: "/sponsors/delice.jpg" },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentionsLegales" },
  { label: "Politique de confidentialité", href: "/politiqueDeConfidentialite" },
];

const SOCIAL = [
  { label: "TOO PILATES", href: "https://www.instagram.com/toopilates?igsh=ajJnODl0OWI3ZXk4", icon: "IG" },
  { label: "Hedy Ammar", href: "https://www.instagram.com/hedy_ammar?igsh=a3dyMm84aWw4Y3J6", icon: "IG" },
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

            </Link>

{/* Brand / Newsletter style Oysho */}
<div className="md:col-span-5">
  <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white leading-tight">
    Rejoignez la communauté  
    <span className="block font-semibold">Too Pilates</span>
  </h2>

        {/* champ email */}
        <div className="mt-8 max-w-md">
          <input
            type="email"
            placeholder="Saisissez votre e-mail"
            className="w-full border-b border-gray-400 bg-transparent py-3 outline-none text-sm"
          />

          <div className="mt-4 flex items-center justify-between">
            <button className="bg-gray-200 px-6 py-3 text-sm text-gray-600 rounded-md">
              Rejoindre
            </button>

            <button className="text-sm underline text-gray-600 hover:text-black">
              Me désinscrire
            </button>
          </div>
        </div>
      </div>

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
                  hedyammar111@gmail.com
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
                  +216 56134950
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

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200/60 pt-6 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} TOO PILATES. Tous droits réservés.</p>

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
