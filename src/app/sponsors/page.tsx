"use client";

import Image from "next/image";
import Link from "next/link";

const SPONSORS = [
  {
    name: "Sponsor principal",
    role: "Partenaire officiel • Too Pilates®",
    image: "/home/gallery3.jpeg",
    description:
      "Ce partenaire accompagne Too Pilates® dans le développement de sa vision et soutient la transmission d’une méthode fondée sur la précision, la pédagogie et la conscience du mouvement.",
    href: "/toopilates",
  },
  {
    name: "Sponsor partenaire",
    role: "Soutien • Too Pilates®",
    image: "/home/gallery4.JPG",
    description:
      "À travers son engagement, ce sponsor contribue à faire rayonner l’univers Too Pilates® et participe à l’évolution d’un projet centré sur la qualité, la structure et l’excellence du mouvement.",
    href: "/planning",
  },
];

export default function SponsorsPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#F7F6F3] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">


          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Les sponsors
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
            Les sponsors Too Pilates® accompagnent le développement du projet et
            participent à la diffusion d’une approche du mouvement fondée sur la
            qualité, l’exigence et la transmission.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SPONSORS.map((sponsor) => (
            <article
              key={sponsor.name}
              className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                  {sponsor.role}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#13192e]">
                  {sponsor.name}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {sponsor.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={sponsor.href}
                    className="inline-flex items-center rounded-full bg-[#033844] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}