"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const ALL_BRANCHES: Array<{
  slug: string;
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  icon: StaticImageData | string;
  imageFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  imagePosition?: string;
  definition: string;
}> = [
  {
    slug: "suspension",
    title: "Pilates en Suspension",
    subtitle: "La légèreté au service du contrôle",
    image: "/photo/branches/suspension.webp",
    icon: "/photo/branches/icons/suspension.svg",
    definition:
      "Un travail en décharge partielle pour renforcer la stabilité et le gainage.",
  },
  {
    slug: "bands",
    title: "Bands Pilates",
    subtitle: "Résistance ciblée et mobilité renforcée",
    image: "/photo/branches/bands.webp",
    icon: "/photo/branches/icons/bands.svg",
    definition:
      "Une résistance progressive pour intensifier le travail sans brutalité.",
  },
  {
    slug: "stick",
    title: "Stick Pilates",
    subtitle: "L'alignement et la structure révélés",
    image: "/photo/branches/stick.webp",
    icon: "/photo/branches/icons/stick.svg",
    definition:
      "Le bâton guide les alignements et sécurise les appuis.",
  },
  {
    slug: "masterclass",
    title: "Masterclass Too Pilates®",
    subtitle: "L'exigence dans l'immersion",
    image: "/photo/branches/masterclass3.webp",
    icon: "/photo/branches/icons/masterclass.svg",
    definition:
      "Des sessions immersives pour approfondir la méthode avec précision.",
  },
  {
    slug: "reformer",
    title: "Reformer Too Pilates®",
    subtitle: "L'appareil emblématique revisité",
    image: "/photo/branches/reformer2.webp",
    icon: "/photo/branches/icons/reformer.svg",
    imageFit: "cover",
    imagePosition: "center 45%",
    definition:
      "Un travail global en résistance, mobilité et contrôle sur appareil.",
  },
];

export default function BranchesPage() {
  const [displayedBranches, setDisplayedBranches] = useState(
    ALL_BRANCHES.slice(0, 2)
  );
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  const loadMoreBranches = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setDisplayedBranches((prev) => {
        const nextIndex = prev.length;
        if (nextIndex < ALL_BRANCHES.length) {
          return [...prev, ALL_BRANCHES[nextIndex]];
        }
        return prev;
      });
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          displayedBranches.length < ALL_BRANCHES.length
        ) {
          loadMoreBranches();
        }
      },
      { threshold: 0.15 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [displayedBranches.length, loadMoreBranches]);

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[var(--background)] py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 mt-10 md:mt-16 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Les Branches Officielles
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Too Pilates® réunit plusieurs branches complémentaires, chacune
            pensée pour explorer le mouvement sous un angle spécifique.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {displayedBranches.map((branch) => (
            <BranchCard
              key={branch.slug}
              slug={branch.slug}
              title={branch.title}
              subtitle={branch.subtitle}
              image={branch.image}
              icon={branch.icon}
              {...(branch.imageFit && { imageFit: branch.imageFit })}
              {...(branch.imagePosition && { imagePosition: branch.imagePosition })}
              definition={branch.definition}
            />
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#087389]/20 border-t-[#033844]" />
          </div>
        )}

        {displayedBranches.length < ALL_BRANCHES.length && (
          <div
            ref={observerTarget}
            className="py-10 text-center text-sm uppercase tracking-[0.2em] text-gray-500"
          >
            Scroll pour voir plus
          </div>
        )}
      </div>
    </section>
  );
}

function BranchCard({
  slug,
  title,
  subtitle,
  image,
  icon,
  imageFit,
  imagePosition,
  definition,
}: {
  slug: string;
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  icon: StaticImageData | string;
  imageFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  imagePosition?: string;
  definition: string;
}) {
  return (
    <Link href={`/branches/${slug}`} className="block group">
      <article className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-xl backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="transition-transform duration-700 group-hover:scale-105"
            style={{
              objectFit: imageFit ?? "cover",
              objectPosition: imagePosition ?? "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

          <div className="absolute left-6 top-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2 shadow-sm backdrop-blur">
              <Image
                src={icon}
                alt={`${title} icône`}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

          </div>
        </div>

        <div className="p-7 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[#087389]">
            {subtitle}
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#13192e]">
            {title}
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            {definition}
          </p>

          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-[#033844] px-5 py-3 text-sm font-semibold text-white transition group-hover:opacity-90">
              Découvrir la branche
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}