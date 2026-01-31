"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

export default function Home() {
  const [openStep, setOpenStep] = useState<Step | null>(null);

  const toggle = (step: Step) => {
    setOpenStep((prev) => (prev === step ? null : step));
  };

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Too Pilates
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-16">
          Une méthode qui allie <strong>performance</strong>, <strong>esprit</strong> et{" "}
          <strong>style</strong>.  
          Un mouvement conscient, précis et fluide, pensé pour durer.
        </p>

        {/* QUESTION 1 */}
        <div className="mb-12">
          <button
            onClick={() => toggle(1)}
            className="text-xl font-medium hover:opacity-60 transition"
          >
            Et si le mouvement était bien plus qu'un simple exercice ?
          </button>

          {openStep === 1 && (
            <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
              Too Pilates est une méthode qui ne cherche pas à faire répéter des gestes,
              mais à <strong>comprendre</strong>, <strong>ressentir</strong> et{" "}
              <strong>habiter</strong> le mouvement.
            </p>
          )}
        </div>

        {/* QUESTION 2 */}
        {(openStep === 1 || openStep === 2) && (
          <div className="mb-12">
            <button
              onClick={() => toggle(2)}
              className="text-xl font-medium hover:opacity-60 transition"
            >
              Qu'est-ce qui rend Too Pilates différent ?
            </button>

            {openStep === 2 && (
              <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
                Too Pilates repose sur la <strong>Logique Physionomie</strong> :
                une approche globale qui relie biomécanique, respiration et chaînes
                musculaires pour créer un mouvement <strong>intelligent et durable</strong>.
              </p>
            )}
          </div>
        )}

        {/* QUESTION 3 */}
        {(openStep === 2 || openStep === 3) && (
          <div className="mb-12">
            <button
              onClick={() => toggle(3)}
              className="text-xl font-medium hover:opacity-60 transition"
            >
              Pourquoi cette méthode transforme le corps et l'esprit ?
            </button>

            {openStep === 3 && (
              <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
                Parce qu'ici, la respiration guide la force, la stabilité crée
                la liberté, et chaque séance devient une{" "}
                <strong>expérience corporelle et émotionnelle</strong>.
              </p>
            )}
          </div>
        )}

        {/* QUESTION FINALE + CTA */}
        {openStep === 3 && (
          <div className="mt-20">
            <p className="text-2xl font-medium mb-6">
              Et si tu pouvais accéder à toute la méthode, pas à pas ?
            </p>

            <Link
              href="/livret"
              className="inline-block text-lg font-semibold border-b-2 border-black pb-1 hover:opacity-60 transition"
            >
              Découvrir le livret Too Pilates
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}