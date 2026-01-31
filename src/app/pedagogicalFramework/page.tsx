"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type AccordionId = "intent" | "logic" | "session" | "teaching";

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.22em] text-gray-500">{kicker}</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

/** ---------- Diagrams (SVG) ---------- **/

function ProgressPyramid() {
  // Pyramide de progression (N1..N4) — résumé visuel
  return (
    <div className="rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 md:p-8 border border-gray-100">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
            Diagramme
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Pyramide de progression</h3>
          <p className="mt-2 text-gray-600 max-w-md">
            Chaque niveau consolide le suivant : ancrage → amplitude → puissance → maîtrise.
          </p>
        </div>
        <span className="hidden md:inline text-xs text-gray-500">
          (N1 → N4)
        </span>
      </div>

      <div className="mt-6">
        <svg
          viewBox="0 0 720 320"
          className="w-full h-auto"
          role="img"
          aria-label="Pyramide de progression Too Pilates"
        >
          {/* Base */}
          <polygon points="60,280 660,280 610,230 110,230" fill="rgba(0,0,0,0.06)" />
          <polygon points="110,230 610,230 565,185 155,185" fill="rgba(0,0,0,0.08)" />
          <polygon points="155,185 565,185 530,145 190,145" fill="rgba(0,0,0,0.10)" />
          <polygon points="190,145 530,145 500,110 220,110" fill="rgba(0,0,0,0.12)" />

          {/* Labels */}
          <text x="120" y="265" fontSize="14" fill="rgba(0,0,0,0.75)">
            Niveau 1 — Ancrage (centrage & alignement)
          </text>
          <text x="165" y="215" fontSize="14" fill="rgba(0,0,0,0.78)">
            Niveau 2 — Amplitude (élasticité contrôlée)
          </text>
          <text x="205" y="172" fontSize="14" fill="rgba(0,0,0,0.82)">
            Niveau 3 — Puissance (force en mouvement)
          </text>
          <text x="235" y="135" fontSize="14" fill="rgba(0,0,0,0.86)">
            Niveau 4 — Maîtrise (intelligence du geste)
          </text>

          {/* Top marker */}
          <circle cx="360" cy="95" r="6" fill="rgba(0,0,0,0.55)" />
          <text x="372" y="100" fontSize="12" fill="rgba(0,0,0,0.55)">
            Le mouvement devient langage
          </text>
        </svg>
      </div>
    </div>
  );
}

function PedagogyTriangle() {
  // Triangle : Biomécanique / Sensation / Émotion
  return (
    <div className="rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 md:p-8 border border-gray-100">
      <h3 className="mt-2 text-2xl font-semibold">Les 3 axes pédagogiques</h3>
      <p className="mt-2 text-gray-600 max-w-md">
        Une pédagogie tridimensionnelle : précision + ressenti + présence.
      </p>

      <div className="mt-6">
        <svg
          viewBox="0 0 720 360"
          className="w-full h-auto"
          role="img"
          aria-label="Triangle des axes pédagogiques Too Pilates"
        >
          {/* Triangle */}
          <polygon
            points="360,60 120,310 600,310"
            fill="rgba(0,0,0,0.06)"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="2"
          />
          {/* Center */}
          <circle cx="360" cy="225" r="10" fill="rgba(0,0,0,0.45)" />
          <text x="378" y="230" fontSize="13" fill="rgba(0,0,0,0.60)">
            TOO Pilates
          </text>

          {/* Corners */}
          <circle cx="360" cy="60" r="7" fill="rgba(0,0,0,0.55)" />
          <circle cx="120" cy="310" r="7" fill="rgba(0,0,0,0.55)" />
          <circle cx="600" cy="310" r="7" fill="rgba(0,0,0,0.55)" />

          <text x="300" y="40" fontSize="14" fill="rgba(0,0,0,0.78)">
            Biomécanique
          </text>
          <text x="62" y="338" fontSize="14" fill="rgba(0,0,0,0.78)">
            Sensation
          </text>
          <text x="548" y="338" fontSize="14" fill="rgba(0,0,0,0.78)">
            Émotion
          </text>

          {/* Micro-descriptions */}
          <text x="255" y="92" fontSize="12" fill="rgba(0,0,0,0.55)">
            Alignement • leviers • sécurité
          </text>
          <text x="35" y="292" fontSize="12" fill="rgba(0,0,0,0.55)">
            Ressenti profond • souffle • centre
          </text>
          <text x="475" y="292" fontSize="12" fill="rgba(0,0,0,0.55)">
            Présence • rythme • énergie collective
          </text>
        </svg>
      </div>
    </div>
  );
}

function SessionFlow() {
  // Flow 5 phases — structure d’une séance
  const steps = [
    { n: "01", label: "Activation consciente" },
    { n: "02", label: "Mouvement structuré" },
    { n: "03", label: "Renforcement intelligent" },
    { n: "04", label: "Amplitude & mobilité" },
    { n: "05", label: "Intégration finale" },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 md:p-8 border border-gray-100">
      <h3 className="mt-2 text-2xl font-semibold">Architecture d’une séance</h3>
      <p className="mt-2 text-gray-600 max-w-md">
        Une progression orchestrée : conscience → contrôle → expansion → ancrage.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {steps.map((s, idx) => (
          <div key={s.n} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
              {s.n}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <p className="font-medium text-gray-900">{s.label}</p>
                {idx < steps.length - 1 && (
                  <span className="text-xs text-gray-400">→</span>
                )}
              </div>
              <div className="h-px bg-gray-100 mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** ---------- Accordion ---------- **/

function Accordion({
  id,
  openId,
  setOpenId,
  title,
  summary,
  children,
}: {
  id: AccordionId;
  openId: AccordionId | null;
  setOpenId: (v: AccordionId | null) => void;
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  const isOpen = openId === id;

  return (
    <div className="py-6 border-t border-gray-100">
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full text-left flex items-start justify-between gap-6"
        aria-expanded={isOpen}
      >
        <div>
          <p className="text-xl font-semibold tracking-tight">{title}</p>
          <p className="mt-2 text-gray-600 max-w-2xl leading-relaxed">{summary}</p>
        </div>
        <div className="pt-1 text-gray-500 text-xl">{isOpen ? "−" : "+"}</div>
      </button>

      {isOpen && (
        <div className="mt-5 text-gray-700 leading-relaxed max-w-3xl">
          {children}
        </div>
      )}
    </div>
  );
}

/** ---------- Page ---------- **/

export default function PedagogicalFramework() {
  const [openId, setOpenId] = useState<AccordionId | null>(null);

  const highlights = useMemo(
    () => [
      { label: "Logique Physionomie", desc: "Biomécanique + physiologie + conscience." },
      { label: "Amplitude maîtrisée", desc: "Force fluide, sans rigidité." },
      { label: "Transmission par le ressenti", desc: "On sent avant d’exécuter." },
    ],
    []
  );

  return (
    <section className="min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          kicker="Cadre pédagogique"
          title="Pedagogical Framework"
          subtitle="Comprendre la méthode, voir la progression, et transmettre le mouvement avec précision."
        />

        {/* Highlights (sans rectangles lourds : juste une ligne + micro-typo) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((h) => (
            <div key={h.label} className="py-4">
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                {h.label}
              </p>
              <p className="mt-2 text-gray-800 font-medium">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProgressPyramid />
          </div>
          <div className="lg:col-span-1">
            <SessionFlow />
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PedagogyTriangle />
          </div>
          <div className="lg:col-span-1 rounded-3xl border border-gray-100 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
              À retenir
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Une méthode vivante
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Too Pilates vise un corps <strong>stable</strong>, <strong>mobile</strong> et{" "}
              <strong>intelligent</strong> — en respectant la structure et l’énergie du corps.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>• Observer → Adapter → Harmoniser</p>
              <p>• Stabilité dans l’amplitude</p>
              <p>• Le souffle comme guide biomécanique</p>
            </div>

            <div className="mt-8">
              <Link
                href="/livret"
                className="inline-flex items-center gap-2 text-base font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition"
              >
                Découvrir le livret <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Accordion: texte caché, donc page plus lisible */}
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
            Détails pédagogiques
          </p>

          <div className="mt-3">
            <Accordion
              id="intent"
              openId={openId}
              setOpenId={setOpenId}
              title=" L’intention pédagogique"
              summary="Transmettre par le ressenti : sentir avant d’exécuter."
            >
              <ul className="space-y-2">
                <li>• Le coach guide la sensation, pas l’imitation.</li>
                <li>• La progression est lisible : on comprend ce qu’on construit.</li>
                <li>• Le mouvement devient un dialogue entre stabilité et expansion.</li>
              </ul>
            </Accordion>

            <Accordion
              id="logic"
              openId={openId}
              setOpenId={setOpenId}
              title=" La Logique Physionomie"
              summary="Relier science du mouvement, structure corporelle et conscience."
            >
              <ul className="space-y-2">
                <li>• Biomécanique : axes, articulations, organisation du geste.</li>
                <li>• Physiologie : renforcer sans surcharger, respecter tissus & amplitudes.</li>
                <li>• Conscience corporelle : perception interne + qualité du geste.</li>
              </ul>
            </Accordion>

            <Accordion
              id="session"
              openId={openId}
              setOpenId={setOpenId}
              title=" La structure d’une séance"
              summary="5 phases : conscience → mouvement → renforcement → amplitude → intégration."
            >
              <ul className="space-y-2">
                <li>• Activation : posture, souffle, centre, appuis.</li>
                <li>• Mouvement : chaînes musculaires, transitions, contrôle.</li>
                <li>• Renforcement : précision, coordination, force fluide.</li>
                <li>• Amplitude : mobilité active guidée par la respiration.</li>
                <li>• Intégration : retour au calme, stabilité, ancrage.</li>
              </ul>
            </Accordion>

            <Accordion
              id="teaching"
              openId={openId}
              setOpenId={setOpenId}
              title=" Transmission & formation"
              summary="Former des éducateurs du mouvement : lire, ajuster, faire ressentir."
            >
              <ul className="space-y-2">
                <li>• Lecture du corps : tensions, compensations, appuis.</li>
                <li>• Exigence + douceur : corriger sans surcorriger.</li>
                <li>• Voix & rythme : créer l’expérience (présence, tempo, intention).</li>
              </ul>
            </Accordion>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Synthèse inspirée du livret Too Pilates (progression, axes pédagogiques, structure de séance, transmission).
          </p>
        </div>
      </div>
    </section>
  );
}
