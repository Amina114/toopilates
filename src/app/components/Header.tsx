"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
const MENU_ITEMS = [
  { label: "Too Pilates®", href: "/toopilates" },
  { label: "Avis", href: "/accueil" },
  { label: "Branches Too Pilates®", href: "/branches" },
  { label: "Coachs officiels", href: "/coachs" },
  { label: "Too Pilates® Certified Instructor", href: "/certifiedInstructor" },
  { label: "Livret Too Pilates®", href: "/livret" },
  { label: "Pedagogical Framework", href: "/pedagogicalFramework" },
  { label: "Où se trouve Too Pilates®", href: "/planning" },
];

function itemClass(active: boolean) {
  return [
    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition",
    active
      ? "bg-black/[0.04] text-gray-900"
      : "text-gray-700 hover:bg-black/[0.03] hover:text-gray-900",
  ].join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const activeLabel = useMemo(() => {
    if (!pathname) return "Menu";
    const found = MENU_ITEMS.find((i) => {
      if (i.href === pathname) return true;
      if (i.href !== "/" && pathname.startsWith(i.href + "/")) return true;
      return false;
    });
    return found?.label ?? "Menu";
  }, [pathname]);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
        <header
          className={[
            "fixed top-0 left-0 w-full z-50 transition-all duration-500",
            isTransparent
              ? "bg-transparent border-transparent text-white"
              : "bg-white/90 backdrop-blur border-b border-black/5 text-black",
          ].join(" ")}
        >      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isTransparent ? "/logo-white.svg" : "/Logo-TOO-Pilates.svg"}
              alt="Too Pilates®"
              width={140}
              height={60}
              priority
              className="h-10 md:h-12 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Right side */}
          <div className="relative" ref={panelRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="header-menu"
              className={[
                "group inline-flex items-center gap-2",
                "bg-transparent px-2 py-1",
                "text-sm font-medium text-[#13192e]",
                "transition hover:text-[#087389]",
                "focus:outline-none",
              ].join(" ")}
            >
              {/* ✅ Nouveau style: plus clean, moins “PLANNING” */}
              <span className="hidden sm:flex flex-col leading-none text-left">
                <span className="text-sm font-medium tracking-normal text-gray-900">
                  {activeLabel}
                </span>
              </span>

              {/* Minimal hamburger */}
              <span className="relative h-4 w-6">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-6 rounded bg-gray-900 transition",
                    open ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-6 rounded bg-gray-900 transition",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-[2px] w-6 rounded bg-gray-900 transition",
                    open ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>

            {/* Dropdown */}
            {open && (
              <div
                id="header-menu"
                className={[
                  "absolute right-0 mt-3 w-[320px] overflow-hidden rounded-3xl",
                  "border border-black/10 bg-white shadow-xl",
                ].join(" ")}
              >
                <div className="px-4 py-4">
                  <div className="flex items-center justify-between px-1 pb-3">
                    <p className="text-[11px] tracking-wide text-gray-500">
                      Navigation
                    </p>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-xs text-gray-500 hover:text-gray-900 transition"
                      aria-label="Fermer le menu"
                    >
                      Fermer
                    </button>
                  </div>

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
                            <span className="text-[10px] font-semibold text-gray-900">
                              Actif
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="border-t border-black/5 bg-black/[0.02] px-5 py-3">
                  <p className="text-[11px] tracking-wide text-gray-600">
                    <span className="font-semibold text-gray-900">Too Pilates®</span>{" "}
                    — une méthode qui allie performance, esprit et style.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
