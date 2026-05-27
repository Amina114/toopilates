"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const tpImage1Webp = "/photo/toopilates/image1.webp";
const tpImage1 = "/photo/toopilates/image1.png";
const tpImage3Webp = "/photo/toopilates/image3.webp";
const tpImage3 = "/photo/toopilates/image3.png";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export default function Home() {
  const [openSteps, setOpenSteps] = useState<Step[]>([1]);

  const toggle = (step: Step) => {
    setOpenSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  const faqJsonLd = useMemo(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu’est-ce que Too Pilates® ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Too Pilates® est une méthode de Pilates moderne fondée sur la Logique Physionomie : biomécanique, respiration, chaînes musculaires et pédagogie précise pour un mouvement juste, puissant et élégant.",
          },
        },
        {
          "@type": "Question",
          name: "À qui s’adresse la méthode Too Pilates® ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "À toutes les personnes qui veulent améliorer posture, mobilité, force profonde (core), respiration et stabilité, quel que soit le niveau, avec une pratique structurée et adaptée à la morphologie.",
          },
        },
        {
          "@type": "Question",
          name: "Quels résultats attendre avec Too Pilates® ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un corps plus fort et plus mobile, une posture affinée, une meilleure conscience corporelle, moins de tensions, une progression durable, et une pratique plus sûre grâce à la précision technique.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi la Logique Physionomie est différente ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parce qu’elle relie structure (biomécanique), réactions du corps (physiologie), mental (psychologie) et coordination (chaînes musculaires) pour optimiser performance, prévenir les blessures et harmoniser le mouvement.",
          },
        },
      ],
    };

    return JSON.stringify(data);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/15 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.12),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
        {/* HERO */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]">
              Pédagogie moderne
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#075f7f] max-w-2xl">
              La méthode Pilates authentique a été fondée par{" "}
              <strong>Joseph Pilates</strong> et repose sur des fondamentaux précis.
              Mais pour transmettre avec sens aux nouvelles générations, il faut
              avant tout une <strong>logique pédagogique</strong>.
              <br />
              <br />
              C’est cette logique que <strong>Too Pilates®</strong> traduit.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#033844]/10 bg-white/80 px-5 py-3 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="text-base md:text-lg font-semibold text-[#13192e]">
                  Pilates
                </span>
                <span className="text-base md:text-lg text-gray-500">+</span>
                <span className="text-base md:text-lg font-semibold text-[#13192e]">
                  Pédagogie
                </span>
                <span className="text-base md:text-lg text-gray-400">=</span>
                <span className="text-base md:text-lg font-extrabold text-[#033844]">
                  Too Pilates®
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[32px] shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <picture>
                <source srcSet={tpImage1Webp} type="image/webp" />
                <Image
                  src={tpImage1}
                  alt="Too Pilates® pédagogie"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-6 rounded-3xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                Transmission
              </p>
              <p className="mt-1 text-lg font-semibold text-[#13192e]">
                Une méthode claire, précise et vivante
              </p>
            </div>
          </motion.div>
        </div>

        {/* IMAGE + INTRO VISUELLE */}
        <div className="mt-20 grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="group relative overflow-hidden rounded-[28px] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <picture>
                <source srcSet={tpImage3Webp} type="image/webp" />
                <Image
                  src={tpImage3}
                  alt="Méthode Too Pilates®"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
            </div>

          <div className="rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#087389]">
              Vision
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#13192e]">
              Une autre façon de transmettre le Pilates
            </h2>
            <p className="mt-4 leading-relaxed text-[#075f7f]">
              Ici, la pédagogie ne surcharge pas la méthode : elle la rend plus
              lisible, plus cohérente, et plus accessible. La structure reste
              exigeante, mais la lecture devient plus fluide.
            </p>
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="mt-24">
          <div className="mb-10 max-w-2xl">
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#13192e]">
              Comprendre Too Pilates®
            </h2>
          </div>

          <div className="space-y-5">
            {/* QUESTION 1 */}
            <div className="overflow-hidden rounded-[24px] border border-[#033844]/10 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <button
                onClick={() => toggle(1)}
                aria-expanded={openSteps.includes(1)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-xl font-medium text-[#13192e]">
                  1) Qu’est-ce que Too Pilates®, exactement ?
                </span>
                <span className="text-[#087389]">
                  {openSteps.includes(1) ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openSteps.includes(1) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6 text-[#075f7f] leading-relaxed"
                  >
                    <p>
                      Il y a des méthodes que l’on suit… et d’autres que l’on{" "}
                      <strong>ressent</strong>. Too Pilates® est né d’une quête du
                      geste juste : une pratique à la fois <strong>puissante</strong>{" "}
                      et <strong>douce</strong>, <strong>technique</strong> mais{" "}
                      <strong>accessible</strong>, élégante sans être
                      superficielle.
                    </p>
                    <p className="mt-3">
                      Ici, on ne “reproduit” pas un mouvement : on apprend à{" "}
                      <strong>comprendre le corps</strong>, à organiser la posture,
                      et à construire une progression claire.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* QUESTION 2 */}
            <div className="overflow-hidden rounded-[24px] border border-[#033844]/10 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <button
                onClick={() => toggle(2)}
                aria-expanded={openSteps.includes(2)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-xl font-medium text-[#13192e]">
                  2) Pourquoi la Logique Physionomie change la façon de pratiquer ?
                </span>
                <span className="text-[#087389]">
                  {openSteps.includes(2) ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openSteps.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6 text-[#075f7f] leading-relaxed"
                  >
                    <p>
                      La <strong>Logique Physionomie</strong> relie plusieurs
                      dimensions pour optimiser le mouvement :
                      <strong> biomécanique</strong>, <strong>physiologie</strong>,{" "}
                      <strong>psychologie</strong> et{" "}
                      <strong>chaînes musculaires</strong>.
                    </p>
                    <p className="mt-3">
                      Concrètement : on respecte la morphologie, on renforce en{" "}
                      <strong>amplitude maîtrisée</strong>, et on cherche
                      l’équilibre entre <strong>stabilité</strong>,{" "}
                      <strong>fluidité</strong> et <strong>puissance</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* QUESTION 3 */}
            <div className="overflow-hidden rounded-[24px] border border-[#033844]/10 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <button
                onClick={() => toggle(3)}
                aria-expanded={openSteps.includes(3)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-xl font-medium text-[#13192e]">
                  3) Quels bénéfices concrets pour le corps et l’esprit ?
                </span>
                <span className="text-[#087389]">
                  {openSteps.includes(3) ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openSteps.includes(3) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6 text-[#075f7f] leading-relaxed"
                  >
                    <p>
                      Parce que la méthode suit une{" "}
                      <strong>progression précise</strong> : la conscience précède
                      l’effort, la respiration guide la force, et la stabilité
                      soutient l’amplitude.
                    </p>
                    <p className="mt-3">
                      Résultat : un corps plus <strong>aligné</strong>, plus{" "}
                      <strong>fort</strong> et plus <strong>mobile</strong>, une
                      meilleure confiance dans ses appuis, et moins de tensions
                      inutiles.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* QUESTION 4 */}
            <div className="overflow-hidden rounded-[24px] border border-[#033844]/10 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <button
                onClick={() => toggle(4)}
                aria-expanded={openSteps.includes(4)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-xl font-medium text-[#13192e]">
                  4) À qui s’adresse Too Pilates® (débutant, sport, reprise) ?
                </span>
                <span className="text-[#087389]">
                  {openSteps.includes(4) ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openSteps.includes(4) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6 text-[#075f7f] leading-relaxed"
                  >
                    <p>
                      À toutes les personnes qui veulent progresser avec une méthode{" "}
                      <strong>structurée</strong> et <strong>adaptée</strong> :
                      débutants, sportifs, reprise après pause, recherche de
                      posture, mobilité, gainage, respiration.
                    </p>
                    <p className="mt-3">
                      L’objectif : construire un mouvement{" "}
                      <strong>intelligent</strong> — pas seulement “faire”, mais{" "}
                      <strong>comprendre</strong> et <strong>ressentir</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <AnimatePresence>
          {openSteps.includes(4) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-20"
            >
              <div className="rounded-[32px] bg-[#033844] px-8 py-10 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <p className="text-2xl font-medium mb-4">
                  Livret pédagogie complet
                </p>

                <Link
                  href="/livret"
                  className="inline-block rounded-full bg-[#E6D3A3] px-6 py-3 text-sm font-bold text-[#13192e] transition hover:opacity-90"
                >
                  Too Pilates®
                </Link>

                <p className="mt-5 max-w-2xl leading-relaxed text-white/80">
                  Un livret complet : principes, logique physionomie, repères
                  d’enseignement, intention du geste, respiration, organisation du
                  corps et progression.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}