"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Step = 1 | 2 | 3 | 4;

export default function Home() {
  const [openSteps, setOpenSteps] = useState<Step[]>([]);

  const toggle = (step: Step) => {
    setOpenSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  // FAQ Schema (SEO) — rendu côté client (OK), idéalement aussi côté serveur si possible
  const faqJsonLd = useMemo(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu’est-ce que Too Pilates ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Too Pilates est une méthode de Pilates moderne fondée sur la Logique Physionomie : biomécanique, respiration, chaînes musculaires et pédagogie précise pour un mouvement juste, puissant et élégant.",
          },
        },
        {
          "@type": "Question",
          name: "À qui s’adresse la méthode Too Pilates ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "À toutes les personnes qui veulent améliorer posture, mobilité, force profonde (core), respiration et stabilité, quel que soit le niveau, avec une pratique structurée et adaptée à la morphologie.",
          },
        },
        {
          "@type": "Question",
          name: "Quels résultats attendre avec Too Pilates ?",
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
    <section className="relative pb-20">
      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
            {/* Background "Pilates luxe" */}
      <div className="pointer-events-none fixed inset-0 top-0 h-screen">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#9CAF88]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#3F4F3C]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(156,175,136,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(63,79,60,0.10),transparent_55%)]" />
      </div>

        <div className="relative mx-auto max-w-3xl px-6 py-24 z-10">
          {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1F2933]">
            Pédagogie moderne
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563] max-w-2xl">
            La méthode Pilates authentique a été fondée par <strong>Joseph Pilates</strong> et repose sur des fondamentaux précis.  
            Mais pour transmettre avec sens aux nouvelles générations, il faut avant tout une <strong>logique pédagogique</strong>.
            <br /><br />
            C’est cette logique que <strong>Too Pilates</strong> traduit.
                  </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            className="relative inline-flex items-center gap-3 px-2 py-2"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            {/* Pilates */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base md:text-lg font-semibold text-[#1F2933]"
            >
              Pilates
            </motion.span>

            {/* + */}
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [1, 1.12, 1], opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7, times: [0, 0.6, 1] }}
              className="text-base md:text-lg text-gray-500"
            >
              +
            </motion.span>

            {/* Pédagogie */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-base md:text-lg font-semibold text-[#1F2933]"
            >
              Pédagogie
            </motion.span>

            {/* = */}
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [1, 1.12, 1], opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7, times: [0, 0.6, 1] }}
              className="text-base md:text-lg text-gray-400"
            >
              =
            </motion.span>

            {/* Too Pilates + underline animée */}
            <span className="relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-base md:text-lg font-extrabold text-[#3F4F3C]"
              >
                 Too Pilates®
              </motion.span>

              <motion.span
                aria-hidden="true"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#9CAF88]"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  delay: 0.7,
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeInOut",
                }}
              />
            </span>

            {/* glow doux derrière Too Pilates */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-[#9CAF88]/20 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
        </motion.div>

        {/* QUESTIONS (format “FAQ progressive”) */}
        <div className="mt-20 space-y-12">
          {/* QUESTION 1 */}
          <div>
            <button
              onClick={() => toggle(1)}
              aria-expanded={openSteps.includes(1)}
              className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition text-left"
            >
              1) Qu’est-ce que Too Pilates, exactement ?
            </button>

            <AnimatePresence>
              {openSteps.includes(1) && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                >
                  <p>
                    Il y a des méthodes que l’on suit… et d’autres que l’on{" "}
                    <strong>ressent</strong>.
                    Too Pilates est né d’une quête du geste juste : une pratique
                    à la fois <strong>puissante</strong> et{" "}
                    <strong>douce</strong>, <strong>technique</strong> mais{" "}
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
          {openSteps.includes(1) && (
            <div>
              <button
                onClick={() => toggle(2)}
                aria-expanded={openSteps.includes(2)}
                className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition text-left"
              >
                2) Pourquoi la Logique Physionomie change la façon de pratiquer ?
              </button>

              <AnimatePresence>
                {openSteps.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                  >
                    <p>
                      La <strong>Logique Physionomie</strong> relie plusieurs
                      dimensions pour optimiser le mouvement :
                      <strong> biomécanique</strong>,{" "}
                      <strong>physiologie</strong>, <strong>psychologie</strong>{" "}
                      et <strong>chaînes musculaires</strong>.
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
          )}

          {/* QUESTION 3 */}
          {openSteps.includes(2) && (
            <div>
              <button
                onClick={() => toggle(3)}
                aria-expanded={openSteps.includes(3)}
                className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition text-left"
              >
                3) Quels bénéfices concrets pour le corps et l’esprit ?
              </button>

              <AnimatePresence>
                {openSteps.includes(3) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                  >
                    <p>
                      Parce que la méthode suit une{" "}
                      <strong>progression précise</strong> :
                      la conscience précède l’effort, la respiration guide la
                      force, et la stabilité soutient l’amplitude.
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
          )}

          {/* QUESTION 4 */}
          {openSteps.includes(3) && (
            <div>
              <button
                onClick={() => toggle(4)}
                aria-expanded={openSteps.includes(4)}
                className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition text-left"
              >
                4) À qui s’adresse Too Pilates (débutant, sport, reprise) ?
              </button>

              <AnimatePresence>
                {openSteps.includes(4) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                  >
                    <p>
                      À toutes les personnes qui veulent progresser avec une
                      méthode <strong>structurée</strong> et{" "}
                      <strong>adaptée</strong> : débutants, sportifs, reprise
                      après pause, recherche de posture, mobilité, gainage,
                      respiration.
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
          )}
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
              <p className="text-2xl font-medium text-[#1F2933] mb-6">
                Livret pédagogie complet 
              </p>

              <Link
                href="/livret"
                className="inline-block text-lg font-semibold text-[#3F4F3C] border-b-2 border-[#9CAF88] pb-1 hover:opacity-70 transition"
              >
                Too Pilates
              </Link>

              <p className="mt-5 text-[#4B5563] leading-relaxed max-w-xl">
                Un livret complet : principes, logique physionomie, repères
                d’enseignement, intention du geste, respiration, organisation du
                corps et progression.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
