"use client";

import Image from "next/image";
import Link from "next/link";

const COACHES = [
  {
    name: "Coach Hedy",
    role: "Fondateur • Too Pilates®",
    image: "/home/gallery1.jpeg",
    description:
      "Coach Hedy est à l’origine du concept Too Pilates®. Son approche repose sur une vision précise du mouvement, où la pédagogie, la respiration et la conscience corporelle occupent une place centrale. Il transmet une méthode structurée, pensée pour développer un corps stable, mobile et équilibré.",
    href: "/toopilates",
  },
  {
    name: "Coach Amina",
    role: "Coach • Too Pilates®",
    image: "/home/gallery2.jpg",
    description:
      "Coach Amina accompagne les pratiquants avec une approche attentive et progressive. Son enseignement met l’accent sur la fluidité, la précision du geste et l’écoute du corps. Elle guide chaque élève dans une pratique claire, élégante et adaptée à son rythme d’évolution.",
    href: "/planning",
  },
];

export default function CoachesPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#F7F6F3] py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER CENTRÉ */}
        <div className="mb-14 mt-10 md:mt-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Les coachs
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Les coachs Too Pilates® incarnent l’esprit de la méthode : une
            pratique précise, consciente et structurée du mouvement. Leur rôle
            est d’accompagner chaque personne dans la compréhension de son
            corps, la qualité du geste et la progression durable.
          </p>
        </div>

        {/* LIST */}
        <div className="grid gap-8 md:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              {/* CONTENU CENTRÉ */}
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                  {coach.role}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#13192e]">
                  {coach.name}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {coach.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}