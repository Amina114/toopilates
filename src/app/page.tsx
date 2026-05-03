"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sponsorsData from "@/data/sponsors.json";

const GALLERY = [
  { src: "/home/gallery1.jpeg", alt: "Too Pilates® 1" },
  { src: "/home/gallery2.jpg", alt: "Too Pilates® 2" },
  { src: "/home/gallery3.jpeg", alt: "Too Pilates® 3" },
  { src: "/home/gallery4.JPG", alt: "Too Pilates® 4" },
];

const MENU_ITEMS = [
  { label: "Avis", href: "/accueil" },
  { label: "Branches", href: "/branches" },
  { label: "Coachs", href: "/coachs" },
  { label: "Too Pilates®", href: "/toopilates", featured: true },
  { label: "Too Pilates® Certified Instructor", href: "/certifiedInstructor" },
  { label: "Livret Too Pilates®", href: "/livret" },
  { label: "Pedagogical Framework", href: "/pedagogicalFramework" },
  { label: "Où se trouve Too Pilates®", href: "/planning" },
];

const FEATURED_LOGO = {
  src: "/home/liste/logo-white.svg",
  alt: "Too Pilates®",
};

type Sponsor = {
  src: string;
  alt: string;
  description: string;
};

const NAV_IMAGES = [
  { src: "/home/liste/DSC07330.JPG", alt: "Pilates 2" },
  { src: "/home/liste/DSC07329.JPG", alt: "Pilates 3" },
  { src: "/home/liste/DSC07319.JPG", alt: "Pilates 4" },
  { src: "/home/liste/DSC07316.JPG", alt: "Pilates 5" },
];
const SPONSORS: Sponsor[] = (sponsorsData as { sponsors: Sponsor[] }).sponsors;
const styles = {
  partners: {
    animation: "partners 25s linear infinite",
  },
  gallery: {
    animation: "galleryScroll 35s linear infinite",
  },
};
const useAutoScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval>;

    const start = () => {
      interval = setInterval(() => {
        el.scrollLeft += 0.5;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollLeft = 0;
        }
      }, 20);
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

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);


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
                Voir où se trouve Too Pilates®
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
            {MENU_ITEMS.map((item) => {
              const isFeatured = item.label === "Too Pilates®";

              const nonFeaturedIndex = MENU_ITEMS
                .filter((menuItem) => menuItem.label !== "Too Pilates®")
                .findIndex((menuItem) => menuItem.label === item.label);

              const img = isFeatured
                ? FEATURED_LOGO
                : NAV_IMAGES[nonFeaturedIndex % NAV_IMAGES.length];

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
                      isFeatured
                        ? "object-contain bg-transparent p-6"
                        : "object-cover",
                      "transition-transform duration-700 group-hover:scale-105",
                    ].join(" ")}
                  />

                  {!isFeatured && (
                    <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/55" />
                  )}

                  {!isFeatured && (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <span className="inline-block rounded-full bg-black/45 px-4 py-2 text-white text-sm md:text-base font-semibold tracking-[0.18em] shadow-lg backdrop-blur-sm">
                        {item.label}
                      </span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="bg-white relative overflow-hidden py-6">
        <div className="mx-auto max-w-[1600px] overflow-hidden">
          <div
            className="flex w-max"
            style={styles.gallery}
          >
            {[...GALLERY, ...GALLERY, ...GALLERY].map((img, i) => (
              <div key={i} className="relative w-screen h-[78vh] shrink-0">
              <Image
                src="/home/imageprincipal.jpg"
                alt="Image principale Too Pilates®"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SPONSORS */}
      <section className="bg-white border-t border-b border-black/5 py-10 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex overflow-hidden">
            <div
              className="flex min-w-max items-center gap-16 md:gap-32"
              style={styles.partners}
            >
              {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, index) => (
                <div
                  key={`${sponsor.alt}-${index}`}
                  className="relative group flex flex-col items-center"
                >
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="h-10 md:h-14 object-contain transition-transform duration-300 hover:scale-105 cursor-help"
                  />

                  <div className="absolute top-full mt-2 hidden group-hover:block w-44 bg-gray-800 text-white text-[10px] py-1 px-2 rounded shadow-xl text-center z-50 pointer-events-none whitespace-normal">
                    {sponsor.description}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
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