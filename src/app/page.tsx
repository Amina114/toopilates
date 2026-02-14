"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NAV = [
  { label: "Accueil", href: "/accueil" },
  { label: "Branches", href: "/branches" },
  { label: "Toopilates", href: "/toopilates", featured: true },
  { label: "Coachs", href: "/coachs" },
  { label: "Planning", href: "/planning" },
];

const GALLERY = [
  { src: "/home/1.jpg", alt: "Too Pilates 1" },
  { src: "/home/2.jpg", alt: "Too Pilates 2" },
  { src: "/home/3.jpg", alt: "Too Pilates 3" },
  { src: "/home/4.jpg", alt: "Too Pilates 4" },
];

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // auto scroll function
  const useAutoScroll = (ref: any) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let interval: any;

      const start = () => {
        interval = setInterval(() => {
          el.scrollLeft += 1;
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
            el.scrollLeft = 0;
          }
        }, 25);
      };

      const stop = () => clearInterval(interval);

      start();
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", start);

      return () => {
        stop();
        el.removeEventListener("mouseenter", stop);
        el.removeEventListener("mouseleave", start);
      };
    }, [ref]);
  };

  useAutoScroll(navRef);
  useAutoScroll(galleryRef);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image src="/home/hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">
              Philosophie de transmission
            </h1>

          </div>
        </div>
      </section>

      {/* NAV CAROUSEL */}
      <section className="py-10 border-b border-black/10 bg-white relative">
        <div className="mx-auto max-w-6xl px-6 relative">

          <button
            onClick={() => navRef.current?.scrollBy({ left: -350, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow p-2"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => navRef.current?.scrollBy({ left: 350, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow p-2"
          >
            <ChevronRight size={22} />
          </button>

          <div ref={navRef} className="flex gap-6 overflow-hidden">
            {NAV.map((item, idx) => {
              const img = GALLERY[idx % GALLERY.length];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative min-w-[320px] h-[220px] rounded-3xl overflow-hidden"
                >
                  <Image src={img.src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={[
                        "text-white uppercase tracking-[0.25em] font-medium text-sm md:text-base",
                        "transition-all duration-300",
                        "group-hover:font-bold group-hover:text-lg group-hover:tracking-[0.35em]",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="py-10 bg-white relative">
        <div className="mx-auto max-w-6xl px-6 relative">

          <button
            onClick={() => galleryRef.current?.scrollBy({ left: -350, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow p-2"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => galleryRef.current?.scrollBy({ left: 350, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow p-2"
          >
            <ChevronRight size={22} />
          </button>

          <div ref={galleryRef} className="flex gap-6 overflow-hidden">
            {[...GALLERY, ...GALLERY].map((img, i) => (
              <div key={i} className="relative min-w-[320px] h-[320px] rounded-3xl overflow-hidden">
                <Image src={img.src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
{/* VIDEO FULL WIDTH */}
    <section className="py-10 bg-white border-t border-black/10">
      <div className="w-full">
        <video
          className="w-full h-[70vh] object-cover"
          controls
          preload="metadata"
          src="/videos/intro.mp4"
        />
      </div>
    </section>

    </main>
  );
}