"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LEFT_ITEMS = [
  { label: "Nos branches", href: "/branches" },
  { label: "Nos coachs officiels", href: "/coachs" },
  { label: "Avis", href: "/avis" },
];

const RIGHT_ITEMS = [
  { label: "Nos sponsors", href: "/sponsors" },
  { label: "TOOPILATES Certificate Instructor", href: "/certificate" },
  { label: "Le livre", href: "/livre" },
];

const MOBILE_ITEMS = [...LEFT_ITEMS, ...RIGHT_ITEMS];

function linkClass(active: boolean) {
  return [
    "px-4 py-2 text-sm font-medium rounded-md transition",
    active
      ? "text-black"
      : "text-gray-600 hover:text-black hover:bg-gray-50",
  ].join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left menu (desktop) */}
          <nav className="hidden md:flex flex-1 items-center justify-end">
            {LEFT_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo center */}
          <Link
            href="/"
            className="mx-4 text-lg font-bold tracking-tight uppercase"
          >
            TOOPILATES
          </Link>

          {/* Right menu (desktop) */}
          <nav className="hidden md:flex flex-1 items-center justify-start">
            {RIGHT_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Ouvrir le menu"
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-nav" className="md:hidden border-t pb-3 pt-3">
            <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
              {MOBILE_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-md px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50 hover:text-black",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
