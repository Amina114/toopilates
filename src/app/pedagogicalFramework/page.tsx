"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type AccordionId = "intent" | "logic" | "session" | "teaching";
type VisualTab = "pyramid" | "flow" | "triangle";

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
    <header className="mb-10 md:mb-14">
      <p className="text-xs uppercase tracking-[0.22em] text-[#6B7280]">{kicker}</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-[#1F2933]">
        {title}
      </h1>
      <p className="mt-4 text-lg text-[#4B5563] max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}

/** ---------- Diagrams (SVG) ---------- **/

function Card({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white border border-black/5 shadow-sm">
      {(title || subtitle) && (
        <div className="px-6 pt-6 md:px-8 md:pt-8">
          {title && <h3 className="text-2xl font-semibold text-[#1F2933]">{title}</h3>}
          {subtitle && (
            <p className="mt-2 text-[#4B5563] leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </div>
      )}
      <div className="px-6 pb-6 md:px-8 md:pb-8">{children}</div>
    </div>
  );
}

function ProgressPyramid() {
  return (
    <div className="mt-6">
      <svg
        viewBox="0 0 720 320"
        className="w-full h-auto"
        role="img"
        aria-label="Pyramide de progression Too Pilates"
      >
        <polygon points="60,280 660,280 610,230 110,230" fill="rgba(63,79,60,0.08)" />
        <polygon points="110,230 610,230 565,185 155,185" fill="rgba(63,79,60,0.10)" />
        <polygon points="155,185 565,185 530,145 190,145" fill="rgba(63,79,60,0.12)" />
        <polygon points="190,145 530,145 500,110 220,110" fill="rgba(63,79,60,0.14)" />

        <text x="120" y="265" fontSize="14" fill="rgba(31,41,51,0.85)">
          Niveau 1 — Ancrage (centrage & alignement)
        </text>
        <text x="165" y="215" fontSize="14" fill="rgba(31,41,51,0.85)">
          Niveau 2 — Amplitude (élasticité contrôlée)
        </text>
        <text x="205" y="172" fontSize="14" fill="rgba(31,41,51,0.85)">
          Niveau 3 — Puissance (force en mouvement)
        </text>
        <text x="235" y="135" fontSize="14" fill="rgba(31,41,51,0.85)">
          Niveau 4 — Maîtrise (intelligence du geste)
        </text>

        <circle cx="360" cy="95" r="6" fill="rgba(63,79,60,0.55)" />
        <text x="372" y="100" fontSize="12" fill="rgba(31,41,51,0.55)">
          Le mouvement devient langage
        </text>
      </svg>
    </div>
  );
}

function PedagogyTriangle() {
  return (
    <div className="mt-6">
      <svg
        viewBox="0 0 720 360"
        className="w-full h-auto"
        role="img"
        aria-label="Triangle des axes pédagogiques Too Pilates"
      >
        <polygon
          points="360,60 120,310 600,310"
          fill="rgba(63,79,60,0.08)"
          stroke="rgba(63,79,60,0.25)"
          strokeWidth="2"
        />

        <circle cx="360" cy="225" r="10" fill="rgba(63,79,60,0.45)" />
        <text x="378" y="230" fontSize="13" fill="rgba(31,41,51,0.60)">
          TOO Pilates
        </text>

        <circle cx="360" cy="60" r="7" fill="rgba(63,79,60,0.55)" />
        <circle cx="120" cy="310" r="7" fill="rgba(63,79,60,0.55)" />
        <circle cx="600" cy="310" r="7" fill="rgba(63,79,60,0.55)" />

        <text x="300" y="40" fontSize="14" fill="rgba(31,41,51,0.80)">
          Biomécanique
        </text>
        <text x="62" y="338" fontSize="14" fill="rgba(31,41,51,0.80)">
          Sensation
        </text>
        <text x="548" y="338" fontSize="14" fill="rgba(31,41,51,0.80)">
          Émotion
        </text>

        <text x="255" y="92" fontSize="12" fill="rgba(31,41,51,0.55)">
          Alignement • leviers • sécurité
        </text>
        <text x="35" y="292" fontSize="12" fill="rgba(31,41,51,0.55)">
          Ressenti profond • souffle • centre
        </text>
        <text x="475" y="292" fontSize="12" fill="rgba(31,41,51,0.55)">
          Présence • rythme • énergie collective
        </text>
      </svg>
    </div>
  );
}

function SessionFlow() {
  const steps = [
    { n: "01", label: "Activation consciente" },
    { n: "02", label: "Mouvement structuré" },
    { n: "03", label: "Renforcement intelligent" },
    { n: "04", label: "Amplitude & mobilité" },
    { n: "05", label: "Intégration finale" },
  ];

  return (
    <div className="mt-6 space-y-4">
      {steps.map((s, idx) => (
        <div key={s.n} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-black/10 bg-[#F7F6F3] flex items-center justify-center text-sm font-semibold text-[#1F2933]">
            {s.n}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <p className="font-medium text-[#1F2933]">{s.label}</p>
              {idx < steps.length - 1 && (
                <span className="text-xs text-[#9CA3AF]">→</span>
              )}
            </div>
            <div className="h-px bg-black/5 mt-3" />
          </div>
        </div>
      ))}
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
    <div className="rounded-2xl border border-black/5 bg-white">
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-6"
        aria-expanded={isOpen}
      >
        <div>
          <p className="text-lg md:text-xl font-semibold tracking-tight text-[#1F2933]">
            {title}
          </p>
          <p className="mt-2 text-[#4B5563] max-w-2xl leading-relaxed">{summary}</p>
        </div>
        <div className="pt-1 text-[#6B7280] text-xl">{isOpen ? "−" : "+"}</div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-[#374151] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

/** ---------- Tabs ---------- **/

function Tabs({
  value,
  onChange,
}: {
  value: VisualTab;
  onChange: (v: VisualTab) => void;
}) {
  const base =
    "rounded-full px-4 py-2 text-sm font-semibold transition border";
  const active =
    "bg-[#3F4F3C] text-white border-[#3F4F3C]";
  const idle =
    "bg-white text-[#1F2933] border-black/10 hover:border-black/20";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("pyramid")}
        className={`${base} ${value === "pyramid" ? active : idle}`}
      >
        Pyramide
      </button>
      <button
        onClick={() => onChange("flow")}
        className={`${base} ${value === "flow" ? active : idle}`}
      >
        Séance
      </button>
      <button
        onClick={() => onChange("triangle")}
        className={`${base} ${value === "triangle" ? active : idle}`}
      >
        Axes
      </button>
    </div>
  );
}

/** ---------- Page ---------- **/

export default function PedagogicalFramework() {
  const [openId, setOpenId] = useState<AccordionId | null>(null);
  const [tab, setTab] = useState<VisualTab>("pyramid");

  const highlights = useMemo(
    () => [
      { label: "Logique Physionomie", desc: "Biomécanique + physiologie + conscience." },
      { label: "Amplitude maîtrisée", desc: "Force fluide, sans rigidité." },
      { label: "Transmission par le ressenti", desc: "On sent avant d’exécuter." },
    ],
    []
  );

  return (
    <section className="min-h-[90vh] bg-[#F7F6F3]">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <SectionTitle
          kicker="Cadre pédagogique"
          title="Pedagogical Framework"
          subtitle="Comprendre la méthode, voir la progression, et transmettre le mouvement avec précision."
        />

        {/* Highlights : plus respirants, et plus lisibles */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-black/5 bg-white px-5 py-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#6B7280]">
                {h.label}
              </p>
              <p className="mt-2 text-[#1F2933] font-medium leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section VISUEL : un seul à la fois (tabs) */}
        <Card
          title="Voir la méthode"
          subtitle="Un seul visuel à la fois pour garder une lecture claire."
        >
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <Tabs value={tab} onChange={setTab} />
            <p className="text-sm text-[#6B7280]">
              Choisis un angle : progression, séance, ou axes.
            </p>
          </div>

          {tab === "pyramid" && (
            <>
              <ProgressPyramid />
              <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                Chaque niveau consolide le suivant : ancrage → amplitude → puissance → maîtrise.
              </p>
            </>
          )}

          {tab === "flow" && (
            <>
              <SessionFlow />
              <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                Une progression orchestrée : conscience → contrôle → expansion → ancrage.
              </p>
            </>
          )}

          {tab === "triangle" && (
            <>
              <PedagogyTriangle />
              <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                Une pédagogie tridimensionnelle : précision + ressenti + présence.
              </p>
            </>
          )}
        </Card>

        {/* À retenir : isolé, aéré */}
        <div className="mt-8 md:mt-10">
          <Card
            title="Une méthode vivante"
            subtitle="Too Pilates vise un corps stable, mobile et intelligent — en respectant la structure et l’énergie du corps."
          >
            <div className="mt-6 space-y-3 text-[#374151]">
              <p>• Observer → Adapter → Harmoniser</p>
              <p>• Stabilité dans l’amplitude</p>
              <p>• Le souffle comme guide biomécanique</p>
            </div>

            <div className="mt-8">
              <Link
                href="/livret"
                className="inline-flex items-center gap-2 rounded-full bg-[#3F4F3C] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Découvrir le livret <span aria-hidden>→</span>
              </Link>
            </div>
          </Card>
        </div>

        {/* Détails pédagogiques : accordéon plus respirant */}
        <div className="mt-12 md:mt-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6B7280]">
            Détails pédagogiques
          </p>

          <div className="mt-4 space-y-4">
            <Accordion
              id="intent"
              openId={openId}
              setOpenId={setOpenId}
              title="L’intention pédagogique"
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
              title="La Logique Physionomie"
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
              title="La structure d’une séance"
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
              title="Transmission & formation"
              summary="Former des éducateurs du mouvement : lire, ajuster, faire ressentir."
            >
              <ul className="space-y-2">
                <li>• Lecture du corps : tensions, compensations, appuis.</li>
                <li>• Exigence + douceur : corriger sans surcorriger.</li>
                <li>• Voix & rythme : créer l’expérience (présence, tempo, intention).</li>
              </ul>
            </Accordion>
          </div>

          <p className="mt-6 text-sm text-[#6B7280]">
            Synthèse inspirée du livret Too Pilates (progression, axes pédagogiques, structure de séance, transmission).
          </p>
        </div>
      </div>
    </section>
  );
}
