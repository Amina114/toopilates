"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sponsorsData from "@/data/sponsors.json";

const GALLERY = [
  { src: "/photo/home/image1.webp", alt: "Too Pilates® galerie 1" },
  { src: "/photo/home/image3.webp", alt: "Too Pilates® galerie 3" },
  { src: "/photo/home/image4.webp", alt: "Too Pilates® galerie 4" },
  { src: "/photo/home/image5.webp", alt: "Too Pilates® galerie 5" },

];

const heroImageWebp = "/photo/home/home_page_final.webp";
const heroImage = "/photo/home/home_page_final.webp";

const FEATURED_LOGO = {
  src: "/Logo-TOO-Pilates-noir.webp",
  alt: "Too Pilates®",
};

const MENU_ITEMS = [
  {
    label: "Avis",
    href: "/accueil",
    image: "/photo/home/navigation/image1.webp",
    alt: "Avis Too Pilates®",
  },
  {
    label: "Branches",
    href: "/branches",
    image: "/photo/home/navigation/image2.webp",
    alt: "Branches Too Pilates®",
  },
  {
    label: "Coachs",
    href: "/coachs",
    image: "/photo/home/navigation/image4.webp",
    alt: "Coachs Too Pilates®",
  },
  {
    label: "Too Pilates®",
    href: "/toopilates",
    image: FEATURED_LOGO.src,
    alt: FEATURED_LOGO.alt,
    featured: true,
  },
  {
    label: "Too Pilates® Certified Instructor",
    href: "/certifiedInstructor",
    image: "/photo/home/navigation/image5.webp",
    alt: "Too Pilates® Certified Instructor",
  },
  {
    label: "Livret Too Pilates®",
    href: "/livret",
    image: "/photo/home/navigation/image3.webp",
    alt: "Livret Too Pilates®",
  },
  {
    label: "Pedagogical Framework",
    href: "/pedagogicalFramework",
    image: "/photo/home/navigation/image6.webp",
    alt: "Pedagogical Framework Too Pilates®",
  },
  {
    label: "Où se trouve Too Pilates®",
    href: "/planning",
    image: "/photo/home/navigation/image7.webp",
    alt: "Où se trouve Too Pilates®",
  },
];

type Sponsor = {
  src: string;
  alt: string;
  description: string;
};

const SPONSORS: Sponsor[] = (sponsorsData as { sponsors: Sponsor[] }).sponsors;

const styles = {
  partners: {
    animation: "partners 25s linear infinite",
  },
  gallery: {
    animation: "galleryScroll 35s linear infinite",
  },
};

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[var(--background)] text-[#13192e]">
{/* HERO */}
  <section className="relative w-full overflow-hidden bg-[#061b55]">
    <div className="relative w-full overflow-hidden h-[58vh] min-h-[360px] sm:h-auto sm:aspect-[16/9]">
      <Image
        src={heroImageWebp}
        alt="Image principale Too Pilates® Pedagogical Framework"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="object-contain object-top sm:object-center"
      />

      {/* Dégradé léger en bas pour que les boutons soient lisibles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/45 to-transparent sm:h-32" />

      {/* Buttons en bas de l'image */}
      <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center px-3 sm:bottom-6 md:bottom-8">
        <div className="flex max-w-[95vw] flex-row flex-wrap items-center justify-center gap-2 sm:max-w-4xl sm:gap-3">
          <Link
            href="/toopilates"
            className="rounded-full bg-[#E6D3A3] px-3 py-2 text-center text-[11px] font-semibold leading-tight text-[#13192e] transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          >
            Découvrir Too Pilates®
          </Link>

          <Link
            href="/planning"
            className="rounded-full bg-white/90 px-3 py-2 text-center text-[11px] font-semibold leading-tight text-[#13192e] transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          >
            Voir où se trouve Too Pilates®
          </Link>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-white">
      <p>
        Too Pilates® — méthode moderne de Pilates, coaching personnalisé et
        formation professionnelle à Tunis.
      </p>
    </div>
  </section>

      {/* NAV CAROUSEL */}
      <section className="relative border-b border-black/5 bg-[var(--background)] py-14">
        <div className="relative mx-auto max-w-[1600px] px-6">
          <div className="mb-8 flex items-center gap-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[#087389]">
              Navigation
            </p>
            <div className="h-px flex-1 bg-[#087389]/60" />
          </div>

          <button
            type="button"
            aria-label="Navigation précédente"
            onClick={() =>
              navRef.current?.scrollBy({ left: -520, behavior: "smooth" })
            }
            className="absolute left-2 top-[55%] z-20 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-md backdrop-blur transition hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Navigation suivante"
            onClick={() =>
              navRef.current?.scrollBy({ left: 520, behavior: "smooth" })
            }
            className="absolute right-2 top-[55%] z-20 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-md backdrop-blur transition hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={navRef}
            className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-4"
          >
            {MENU_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group shrink-0 overflow-hidden rounded-[24px] bg-white transition-all duration-500",
                  "w-[220px] md:w-[250px]",
                  "shadow-lg hover:-translate-y-1 hover:shadow-2xl",
                  item.featured ? "ring-1 ring-[#E6D3A3]/70" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "relative w-full overflow-hidden bg-white",
                    item.featured
                      ? "h-[230px] md:h-[250px]"
                      : "h-[300px] md:h-[320px]",
                  ].join(" ")}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    quality={75}
                    sizes="(max-width: 768px) 220px, 250px"
                    className={[
                      item.featured
                        ? "object-contain p-12"
                        : "object-cover object-center",
                      "transition-transform duration-500",
                    ].join(" ")}
                    style={{
                      filter: item.featured
                        ? "none"
                        : "brightness(1.04) contrast(1.08) saturate(1.05)",
                    }}
                  />
                </div>

                <div className="flex min-h-[86px] flex-col items-center justify-center px-4 py-4 text-center">
                  <h3 className="text-sm font-semibold leading-snug text-[#13192e] md:text-[15px]">
                    {item.label}
                  </h3>

                  <span className="mt-2 text-xl text-[#087389] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="relative overflow-hidden bg-white py-6">
        <div className="w-full overflow-hidden">
          <div className="flex w-max" style={styles.gallery}>
            {[...GALLERY, ...GALLERY, ...GALLERY].map((img, i) => (
              <div key={i} className="relative h-[78vh] w-screen shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={65}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="relative overflow-hidden border-y border-black/5 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex overflow-hidden">
            <div
              className="flex min-w-max items-center gap-16 md:gap-32"
              style={styles.partners}
            >
            {[...SPONSORS, ...SPONSORS, ...SPONSORS].map(
              (sponsor, index) => (
                <div
                  key={`${sponsor.alt}-${index}`}
                  className="group relative flex flex-col items-center"
                >
                  <div className="flex h-20 w-36 items-center justify-center md:h-24 md:w-44">
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      loading="lazy"
                      className="max-h-full max-w-full cursor-help object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute top-full z-50 mt-2 hidden w-44 whitespace-normal rounded bg-gray-800 px-2 py-1 text-center text-[10px] text-white shadow-xl group-hover:block">
                    {sponsor.description}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-800" />
                  </div>
                </div>
              )
            )}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-t border-black/5 bg-[var(--background)]">
        <div className="w-full overflow-hidden bg-black shadow-2xl">
          <video
            className="h-screen w-full object-cover"
            controls
            preload="metadata"
            autoPlay
            muted
            playsInline
          >
            <source src="photo/home/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}