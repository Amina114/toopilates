"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const ALL_BRANCHES = [
  {
    slug: "suspension",
    title: "Pilates en Suspension",
    subtitle: "La légèreté au service du contrôle",
    image: "/branches/suspension.jpg",
    definition:
      "L'utilisation de sangles de suspension permet de travailler en décharge partielle du poids du corps, tout en sollicitant fortement la stabilité et le gainage.",
  },
  {
    slug: "bands",
    title: "Bands Pilates",
    subtitle: "Résistance ciblée et mobilité renforcée",
    image: "/branches/bands.jpg",
    definition:
      "Les bandes élastiques introduisent une résistance progressive permettant d'intensifier le travail musculaire tout en respectant les articulations.",
  },
  {
    slug: "stick",
    title: "Stick Pilates",
    subtitle: "L'alignement et la structure révélés",
    image: "/branches/stick.jpg",
    definition:
      "Le bâton permet de guider les alignements, de sécuriser les appuis et d'offrir des variantes éducatives aux exercices classiques.",
  },
  {
    slug: "masterclass",
    title: "Masterclass Too Pilates®",
    subtitle: "L'exigence dans l'immersion",
    image: "/branches/masterclass.jpg",
    definition:
      "Les Masterclass sont des sessions longues et immersives, conçues pour explorer la méthode Too Pilates® en profondeur.",
  },
  {
    slug: "reformer",
    title: "Reformer Too Pilates®",
    subtitle: "L'appareil emblématique revisité",
    image: "/branches/reformer.jpg",
    definition:
      "Le Reformer permet un travail global en résistance, en mobilité et en contrôle grâce à des ressorts réglables.",
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
    <section className="relative min-h-[100vh] overflow-hidden bg-[#F7F6F3] py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="mb-14 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]">
            Les Branches Officielles
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
            Too Pilates® se décline en plusieurs branches complémentaires,
            chacune pensée pour explorer le mouvement sous un angle spécifique,
            dans le respect de la logique physionomie.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {displayedBranches.map((branch) => (
            <BranchCard
              key={branch.slug}
              slug={branch.slug}
              title={branch.title}
              subtitle={branch.subtitle}
              image={branch.image}
              definition={branch.definition}
            />
          ))}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#087389]/20 border-t-[#033844]" />
          </div>
        )}

        {/* Infinite trigger */}
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

/* CARD */
function BranchCard({
  slug,
  title,
  subtitle,
  image,
  definition,
}: {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
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
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white backdrop-blur">
              Branche Too Pilates®
            </span>
          </div>
        </div>

        <div className="p-7">
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