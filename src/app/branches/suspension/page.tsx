"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const suspensionImage = "/photo/branches/under/Suspension.webp";

const BENEFICES = [
  "Renforcement profond du centre",
  "Amélioration de l’équilibre et des appuis",
  "Mobilisation douce des articulations",
  "Sensibilisation à la proprioception (perception du corps dans l’espace)",
];

const AUDIENCE = [
  "Pratiquants recherchant un travail profond sans surcharge",
  "Personnes en reprise progressive",
  "Sportifs souhaitant améliorer stabilité et coordination",
];

export default function SuspensionPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[var(--background)] py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HERO */}
        <div className="mt-10 grid items-center gap-10 md:mt-16 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
              Pilates en Suspension
            </h1>

            <p className="mt-5 text-xl leading-relaxed text-[#075f7f]">
              La légèreté au service du contrôle
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
              Ce n’est pas "juste du Pilates sur tapis", mais une fusion de
              disciplines complémentaires intégrées de façon stratégique pour
              maximiser les résultats.
            </p>

            <div className="mt-8">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#033844]/10 bg-white/80 px-5 py-3 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="text-base font-semibold text-[#13192e]">
                  Légèreté
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-base font-semibold text-[#13192e]">
                  Stabilité
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-base font-extrabold text-[#033844]">
                  Contrôle
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="group relative h-[360px] overflow-hidden rounded-[32px] shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:h-[520px]">
              <Image
                src={suspensionImage}
                alt="Pilates en Suspension"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-6 rounded-3xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                Définition
              </p>
              <p className="mt-1 text-lg font-semibold text-[#13192e]">
                Travail en décharge partielle du poids du corps
              </p>
            </div>
          </motion.div>
        </div>

        {/* DEFINITION */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-24"
        >
          <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#087389]">
              Définition
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#13192e] md:text-3xl">
              Une pratique qui allège sans diminuer l’intensité
            </h2>

            <p className="mt-5 max-w-4xl leading-relaxed text-gray-700">
              L’utilisation de sangles de suspension permet de travailler en
              décharge partielle du poids du corps, tout en sollicitant fortement
              la stabilité et le gainage.
            </p>
          </div>
        </motion.div>

        {/* BENEFICES + AUDIENCE */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[32px] border border-black/10 bg-white/80 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
              Bénéfices spécifiques
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#13192e]">
              Ce que cette branche développe
            </h3>

            <ul className="mt-6 space-y-4">
              {BENEFICES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#087389]" />
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[32px] border border-black/10 bg-white/80 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
              À qui s’adresse cette branche ?
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#13192e]">
              Un travail précis, progressif et structuré
            </h3>

            <ul className="mt-6 space-y-4">
              {AUDIENCE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#033844]" />
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="rounded-[32px] bg-[#033844] px-8 py-10 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Branche Too Pilates®
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Pilates en Suspension
            </h2>

            <p className="mt-5 max-w-2xl leading-relaxed text-white/80">
              Une approche fondée sur la stabilité, le gainage, l’équilibre et la
              conscience du corps dans l’espace.
            </p>

            <div className="mt-7">
              <Link
                href="/branches"
                className="inline-flex items-center rounded-full bg-[#E6D3A3] px-6 py-3 text-sm font-bold text-[#13192e] transition hover:opacity-90"
              >
                Retour aux branches
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}