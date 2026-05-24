"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sponsorsData from "@/data/sponsors.json";

import gallery1 from "../photo/home/iamge1.png";
import gallery2 from "../photo/home/iamge2.png";
import gallery3 from "../photo/home/iamge3.png";
import gallery4 from "../photo/home/iamge4.png";
import gallery5 from "../photo/home/iamge5.png";
import gallery6 from "../photo/home/iamge6.png";
import gallery7 from "../photo/home/image7.png";
/* Navigation images */
import navAvis from "../photo/home/navigation/image1.png";
import navBranches from "../photo/home/navigation/image2.png";
import navLivret from "../photo/home/navigation/iamge3.png";
import navCoachs from "../photo/home/navigation/image4.png";
import navCertified from "../photo/home/navigation/iamge5.png";
import navPedagogical from "../photo/home/navigation/image6.png";
import navPlanning from "../photo/home/image7.png";
import heroImage from "../photo/home/home_image.png";

const GALLERY = [
  { src: gallery1, alt: "Too Pilates® galerie 1" },
  { src: gallery2, alt: "Too Pilates® galerie 2" },
  { src: gallery3, alt: "Too Pilates® galerie 3" },
  { src: gallery4, alt: "Too Pilates® galerie 4" },
  { src: gallery5, alt: "Too Pilates® galerie 5" },
  { src: gallery6, alt: "Too Pilates® galerie 6" },
  { src: gallery7, alt: "Too Pilates® galerie 7" },
];

const FEATURED_LOGO = {
  src: "/home/liste/Logo-TOO-Pilates noir.png",
  alt: "Too Pilates®",
};

const MENU_ITEMS = [
  {
    label: "Avis",
    href: "/accueil",
    image: navAvis,
    alt: "Avis Too Pilates®",
  },
  {
    label: "Branches",
    href: "/branches",
    image: navBranches,
    alt: "Branches Too Pilates®",
  },
  {
    label: "Coachs",
    href: "/coachs",
    image: navCoachs,
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
    image: navCertified,
    alt: "Too Pilates® Certified Instructor",
  },
  {
    label: "Livret Too Pilates®",
    href: "/livret",
    image: navLivret,
    alt: "Livret Too Pilates®",
  },
  {
    label: "Pedagogical Framework",
    href: "/pedagogicalFramework",
    image: navPedagogical,
    alt: "Pedagogical Framework Too Pilates®",
  },
  {
    label: "Où se trouve Too Pilates®",
    href: "/planning",
    image: navPlanning,
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
  <section className="relative w-full overflow-hidden bg-[#f4efe6]">
    <div className="relative w-full">
      <Image
        src={heroImage}
        alt="Image principale Too Pilates®"
        priority
        quality={100}
        sizes="100vw"
        className="h-auto w-full object-contain"
        style={{
          filter: "brightness(1.05) contrast(1.12) saturate(1.1)",
        }}
      />

      {/* Overlay plus léger pour ne pas assombrir l'image */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/toopilates"
              className="rounded-full bg-[#E6D3A3] px-6 py-3 text-sm font-semibold text-[#13192e] transition hover:opacity-90"
            >
              Découvrir Too Pilates®
            </Link>

            <Link
              href="/planning"
              className="rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Voir où se trouve Too Pilates®
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

 {/* NAV CAROUSEL */}
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
            priority={index < 3}
            quality={100}
            sizes="(max-width: 768px) 500px, 700px"
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
        <div className="mx-auto max-w-[1600px] overflow-hidden">
          <div className="flex w-max" style={styles.gallery}>
            {[...GALLERY, ...GALLERY, ...GALLERY].map((img, i) => (
              <div key={i} className="relative h-[78vh] w-screen shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  quality={95}
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
              {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, index) => (
                <div
                  key={`${sponsor.alt}-${index}`}
                  className="group relative flex flex-col items-center"
                >
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="h-10 cursor-help object-contain transition-transform duration-300 hover:scale-105 md:h-14"
                  />

                  <div className="pointer-events-none absolute top-full z-50 mt-2 hidden w-44 whitespace-normal rounded bg-gray-800 px-2 py-1 text-center text-[10px] text-white shadow-xl group-hover:block">
                    {sponsor.description}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-800" />
                  </div>
                </div>
              ))}
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
          <source src="/home/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    </main>
  );
}