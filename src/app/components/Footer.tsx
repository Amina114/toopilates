"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
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
  { label: "Too Pilates®", href: "https://www.instagram.com/toopilates?igsh=ajJnODl0OWI3ZXk4", icon: "IG" },
  { label: "Hedy Ammar", href: "https://www.instagram.com/hedy_ammar?igsh=a3dyMm84aWw4Y3J6", icon: "IG" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#075f7f]/30 bg-gradient-to-b from-white to-gray-50 text-[#13192e] dark:border-white/10 dark:from-gray-950 dark:to-gray-950 dark:text-gray-200">
      {/* Décor léger */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#087389]/30 blur-3xl dark:bg-[#033844]/10" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#43bac0]/30 blur-3xl dark:bg-[#033844]/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">

            </Link>

{/* Brand / Newsletter style Oysho */}
<div className="md:col-span-5">
  <h2 className="text-3xl md:text-4xl font-light text-[#13192e] dark:text-white leading-tight">
    Rejoignez la communauté  
    <span className="block font-semibold">Too Pilates® ®️</span>
  </h2>

        {/* champ email */}
        <div className="mt-8 max-w-md">
            <input
            type="email"
            placeholder="Saisissez votre e-mail"
            className="w-full border-b border-[#075f7f]/40 bg-transparent py-3 outline-none text-sm text-[#075f7f]"
          />

          <div className="mt-4 flex items-center justify-between">
            <button className="bg-[#43bac0]/10 px-6 py-3 text-sm text-[#033844] rounded-md">
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
                  className="group inline-flex items-center gap-2 rounded-full border border-[#075f7f]/20 bg-white/80 px-3 py-2 text-xs font-medium shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:border-[#087389] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#087389]/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:focus:ring-[#087389]/30"
                >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white">
                      <Instagram size={14} />
                    </span>
                    <span className="text-[#13192e] dark:text-gray-200">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>

           </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-[#13192e]">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:hedyammar111@gmail.com"
                  className="hover:underline"
                >
                  hedyammar111@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium">Téléphone:</span>{" "}
                <a
                  href="tel:+21656134950"
                  className="hover:underline"
                >
                  +216 56134950
                </a>
              </p>
            </div>
          </div>

          {/* Légal */}
          <div className="md:col-span-3 mt-7 min-w-[220px] md:mt-0">
            <h4 className="text-sm font-semibold text-[#13192e] dark:text-white">
              Légal
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap text-[#075f7f] underline-offset-4 transition hover:text-[#087389] hover:underline dark:text-gray-400 dark:hover:text-[#087389]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#075f7f]/30 pt-6 text-xs text-[#075f7f] dark:border-white/10 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Too Pilates® ®️. Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span>Fait avec ♥ — Tunis</span>
            <span className="hidden md:inline">•</span>
            <Link
              href="/contact"
              className="underline-offset-4 transition hover:text-[#087389] hover:underline dark:hover:text-[#087389]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
