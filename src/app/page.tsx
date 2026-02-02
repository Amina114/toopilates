"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Step = 1 | 2 | 3 | 4;

export default function Home() {
  // On stocke toutes les étapes ouvertes
  const [openSteps, setOpenSteps] = useState<Step[]>([]);

  // Ouvre une étape sans fermer les précédentes
  const toggle = (step: Step) => {
    setOpenSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  return (
    <section className="min-h-[90vh] bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1F2933]">
            Too Pilates
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            Une méthode qui allie <strong>performance</strong>,{" "}
            <strong>conscience</strong> et{" "}
            <strong>élégance du mouvement</strong>.
            Too Pilates propose une lecture intelligente du corps,
            où chaque geste a un sens, une intention et une structure
            pensée pour durer.
          </p>
        </motion.div>

        {/* QUESTIONS */}
        <div className="mt-20 space-y-12">
          {/* QUESTION 1 */}
          <div>
            <button
              onClick={() => toggle(1)}
              className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition"
            >
              Et si le mouvement était bien plus qu&apos;un simple exercice ?
            </button>

            <AnimatePresence>
              {openSteps.includes(1) && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                >
                  Too Pilates ne cherche pas à faire reproduire des formes,
                  mais à apprendre à <strong>lire le corps</strong>.
                  Chaque mouvement est guidé par la conscience, le ressenti
                  et la compréhension, afin de construire un geste{" "}
                  <strong>juste</strong>, <strong>efficace</strong> et{" "}
                  <strong>habité</strong>.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* QUESTION 2 */}
          {openSteps.includes(1) && (
            <div>
              <button
                onClick={() => toggle(2)}
                className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition"
              >
                Qu&apos;est-ce qui rend Too Pilates différent ?
              </button>

              <AnimatePresence>
                {openSteps.includes(2) && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                  >
                    Too Pilates repose sur la{" "}
                    <strong>Logique Physionomie</strong>,
                    une approche pédagogique qui relie{" "}
                    <strong>biomécanique</strong>,{" "}
                    <strong>respiration</strong> et{" "}
                    <strong>chaînes musculaires</strong>.
                    Cette logique permet d’organiser le corps dans le mouvement,
                    de renforcer en <strong>amplitude maîtrisée</strong>
                    et de respecter la physionomie de chacun.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* QUESTION 3 */}
          {openSteps.includes(2) && (
            <div>
              <button
                onClick={() => toggle(3)}
                className="text-xl font-medium text-[#1F2933] hover:text-[#3F4F3C] transition"
              >
                Pourquoi cette méthode transforme le corps et l&apos;esprit ?
              </button>

              <AnimatePresence>
                {openSteps.includes(3) && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 text-[#4B5563] leading-relaxed max-w-xl"
                  >
                    Parce que chaque séance suit une{" "}
                    <strong>progression précise</strong> :
                    la conscience précède l’effort, la stabilité soutient
                    l’amplitude et le souffle guide la force.
                    Le corps se transforme durablement,
                    et le mouvement devient une{" "}
                    <strong>expérience corporelle, sensorielle et émotionnelle</strong>.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* CTA FINAL */}
        <AnimatePresence>
          {openSteps.includes(3) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-20"
            >
              <p className="text-2xl font-medium text-[#1F2933] mb-6">
                Et si tu pouvais comprendre la méthode dans sa globalité,
                pas seulement la pratiquer ?
              </p>

              <Link
                href="/livret"
                className="inline-block text-lg font-semibold text-[#3F4F3C] border-b-2 border-[#9CAF88] pb-1 hover:opacity-70 transition"
              >
                Découvrir le livret pédagogique Too Pilates
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
