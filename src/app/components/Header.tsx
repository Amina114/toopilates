"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "Accueil", href: "/accueil" },
  { label: "Branches TOO PILATES", href: "/branches" },
  { label: "Coachs officiels", href: "/coachs" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Too Pilates Certified Instructor", href: "/certifiedInstructor" },
  { label: "Livret TOO PILATES", href: "/livret" },
  { label: "Pedagogical Framework", href: "/pedagogicalFramework" },
  { label: "Planning", href: "/planning" },
];

function itemClass(active: boolean) {
  return [
    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition",
    active
      ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white"
      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-white/5",
  ].join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const activeLabel = useMemo(() => {
    const found = MENU_ITEMS.find((i) => i.href === pathname);
    return found?.label ?? "Menu";
  }, [pathname]);

  // Fermer si on clique en dehors
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  // Fermer avec ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-gray-950/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo LEFT */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-TOO-Pilates noir.png"
            alt="TOO PILATES"
            width={520}
            height={160}
            priority
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>


          {/* Right side: current page + hamburger */}
          <div className="relative" ref={panelRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="header-menu"
              className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:focus:ring-fuchsia-300/30"
            >
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300">
                {activeLabel}
              </span>

              {/* Hamburger icon */}
              <span className="relative h-4 w-6">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-6 rounded bg-gray-900 transition dark:bg-white",
                    open ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-6 rounded bg-gray-900 transition dark:bg-white",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-[2px] w-6 rounded bg-gray-900 transition dark:bg-white",
                    open ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>

            {/* Dropdown menu */}
            {open && (
              <div
                id="header-menu"
                className="absolute right-0 mt-3 w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-gray-950"
              >
                <div className="px-3 py-3">
                  <p className="px-2 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Navigation
                  </p>

                  <nav className="flex flex-col gap-1">
                    {MENU_ITEMS.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href + item.label}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={itemClass(active)}
                        >
                          <span className="whitespace-nowrap">{item.label}</span>
                          {active && (
                            <span className="text-[10px] font-semibold text-fuchsia-700 dark:text-fuchsia-300">
                              Actif
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Footer mini dans le menu */}
                <div className="border-t border-gray-200/70 bg-gray-50 px-4 py-3 text-xs text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <span className="font-semibold">TOO PILATES</span> — la méthode qui allie performance,esprit et style.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
