"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "À propos", href: "/about" },
  { label: "Les branches", href: "/branches" },
  { label: "Coachs officiels", href: "/coachs" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Avis", href: "/avis" },
  { label: "Livre", href: "/livre" },
  { label: "Toolpilates Certificate Instructor", href: "/certificate-instructor" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Nom */}
        <Link href="/" className="text-lg font-bold">
          toopilates
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden rounded-md border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
