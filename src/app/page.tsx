"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY = [
  { src: "/home/gallery1.jpeg", alt: "Too Pilates® 1" },
  { src: "/home/gallery2.jpg", alt: "Too Pilates® 2" },
  { src: "/home/gallery3.jpeg", alt: "Too Pilates® 3" },
  { src: "/home/gallery4.JPG", alt: "Too Pilates® 4" },
];

const MENU_ITEMS = [
  { label: "Too Pilates®", href: "/toopilates", featured: true },
  { label: "Accueil", href: "/accueil" },
  { label: "Branches", href: "/branches" },
  { label: "Coachs", href: "/coachs" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Too Pilates® Certified Instructor", href: "/certifiedInstructor" },
  { label: "Livret Too Pilates®", href: "/livret" },
  { label: "Pedagogical Framework", href: "/pedagogicalFramework" },
  { label: "Planning", href: "/planning" },
];

const FEATURED_LOGO = {
  src: "/home/liste/logo-white.svg",
  alt: "Too Pilates®",
};

const NAV_IMAGES = [
  { src: "/home/liste/DSC07330.JPG", alt: "Pilates 2" },
  { src: "/home/liste/DSC07329.JPG", alt: "Pilates 3" },
  { src: "/home/liste/DSC07319.JPG", alt: "Pilates 4" },
  { src: "/home/liste/DSC07316.JPG", alt: "Pilates 5" },
];

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const useAutoScroll = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let interval: ReturnType<typeof setInterval>;

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

  return (
    <main className="bg-[#faf8f4] text-[#13192e]">
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/home/imageprincipal.jpg"
          alt="Image principale Too Pilates®"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">


            <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight">
              Philosophie de transmission
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">
              Une approche du mouvement où la pédagogie, la précision et la
              conscience corporelle se rejoignent pour transmettre bien plus
              qu’une pratique.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/toopilates"
                className="rounded-full bg-[#E6D3A3] px-6 py-3 text-sm font-semibold text-[#13192e] transition hover:opacity-90"
              >
                Découvrir Too Pilates®
              </Link>

              <Link
                href="/planning"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Voir le planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NAV CAROUSEL */}
      <section className="py-14 border-b border-black/5 bg-[#faf8f4] relative">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#087389]">
              Navigation
            </p>
          </div>

          <button
            onClick={() =>
              navRef.current?.scrollBy({ left: -380, behavior: "smooth" })
            }
            className="absolute left-2 top-[58%] -translate-y-1/2 z-20 rounded-full bg-white/90 shadow-md p-3 backdrop-blur transition hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() =>
              navRef.current?.scrollBy({ left: 380, behavior: "smooth" })
            }
            className="absolute right-2 top-[58%] -translate-y-1/2 z-20 rounded-full bg-white/90 shadow-md p-3 backdrop-blur transition hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={navRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {MENU_ITEMS.map((item, idx) => {
              const isFeatured = item.label === "Too Pilates®";

              const img = isFeatured
                ? FEATURED_LOGO
                : NAV_IMAGES[(idx - 1 + NAV_IMAGES.length) % NAV_IMAGES.length];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative shrink-0 overflow-hidden rounded-[30px] transition-all duration-500",
                    "min-w-[300px] md:min-w-[320px] h-[220px]",
                    isFeatured
                      ? "shadow-2xl ring-1 ring-[#E6D3A3]/50"
                      : "shadow-lg hover:shadow-xl",
                  ].join(" ")}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={[
                      isFeatured ? "object-contain bg-[#d9d9d9]" : "object-cover",
                      "transition-transform duration-700 group-hover:scale-105",
                    ].join(" ")}
                  />

                  {!isFeatured && (
                    <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/30" />
                  )}

                  {isFeatured && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                      <span
                        className={[
                          "block uppercase transition-all duration-300",
                          isFeatured
                            ? "text-[#E6D3A3] text-xl md:text-2xl font-extrabold tracking-[0.28em] drop-shadow-md"
                            : "text-[#E6D3A3] text-sm md:text-base font-semibold tracking-[0.22em] group-hover:tracking-[0.28em]",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>

                      {isFeatured && (
                        <span className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/85 backdrop-blur">
                          Signature de la méthode
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="bg-white relative overflow-hidden py-6">
        <div className="mx-auto max-w-[1600px] relative">


          <button
            onClick={() =>
              galleryRef.current?.scrollBy({ left: -700, behavior: "smooth" })
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 shadow-md p-3 backdrop-blur transition hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() =>
              galleryRef.current?.scrollBy({ left: 700, behavior: "smooth" })
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 shadow-md p-3 backdrop-blur transition hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>

          <div ref={galleryRef} className="flex overflow-hidden">
            {[...GALLERY, ...GALLERY].map((img, i) => (
              <div key={i} className="relative min-w-screen h-[78vh]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-14 bg-[#faf8f4] border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6">


          <div className="overflow-hidden rounded-[32px] shadow-2xl border border-black/5 bg-black">
            <video
              className="w-full h-[70vh] object-cover"
              controls
              preload="metadata"
              src="/videos/intro.mp4"
            />
          </div>
        </div>
      </section>
    </main>
  );
}