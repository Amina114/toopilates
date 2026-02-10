"use client";

import React, { useMemo, useState, useId } from "react";
import Link from "next/link";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

type AccordionId = "intent" | "logic" | "session" | "teaching";
type VisualTab = "pyramid" | "flow" | "triangle";

/** ---------- Small UI helpers (same site style) ---------- **/

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-[#3F4F3C]" />
      <span className="text-[11px] tracking-wide text-gray-700">{children}</span>
    </span>
  );
}

function SoftDivider() {
  return <div className="h-px bg-black/5" />;
}

function Card({
  title,
  subtitle,
  rightSlot,
  children,
}: {
  title?: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur overflow-hidden">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-white/30 pointer-events-none" />
      {(title || subtitle || rightSlot) && (
        <div className="relative px-6 pt-6 md:px-8 md:pt-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              {title && <h3 className="text-2xl font-semibold text-[#1F2933]">{title}</h3>}
              {subtitle && (
                <p className="mt-2 text-[#4B5563] leading-relaxed max-w-2xl">{subtitle}</p>
              )}
            </div>

            {rightSlot && <div className="shrink-0">{rightSlot}</div>}
          </div>
        </div>
      )}
      <div className="relative px-6 pb-6 md:px-8 md:pb-8">{children}</div>
    </div>
  );
}

function StatChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 overflow-hidden">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-white/30 pointer-events-none" />
      <div className="relative">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm mb-3">
          <span className="h-2 w-2 rounded-full bg-[#3F4F3C]" />
        </span>
        <h3 className="text-lg font-semibold text-[#1F2933]">{title}</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/** ---------- Diagrams ---------- **/

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
    { n: "01", label: "Activation consciente", desc: "Posture, souffle, appuis, centre." },
    { n: "02", label: "Mouvement structuré", desc: "Chaînes, transitions, contrôle." },
    { n: "03", label: "Renforcement intelligent", desc: "Précision, coordination, force fluide." },
    { n: "04", label: "Amplitude & mobilité", desc: "Mobilité active guidée par la respiration." },
    { n: "05", label: "Intégration finale", desc: "Retour au calme, ancrage et stabilité." },
  ];

  return (
    <div className="mt-6 space-y-4">
      {steps.map((s, idx) => (
        <div key={s.n} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-black/10 bg-white/70 backdrop-blur flex items-center justify-center text-sm font-semibold text-[#1F2933] shadow-sm">
            {s.n}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-[#1F2933]">{s.label}</p>
              {idx < steps.length - 1 && <span className="text-xs text-[#9CA3AF]">→</span>}
            </div>
            <p className="mt-1 text-sm text-[#4B5563]">{s.desc}</p>
            <div className="h-px bg-black/5 mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}

/** ---------- Accordion (animated + accessible) ---------- **/

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
  const contentId = useId();

  return (
    <div className="rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur overflow-hidden">
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-6"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div>
          <p className="text-lg md:text-xl font-semibold tracking-tight text-[#1F2933]">
            {title}
          </p>
          <p className="mt-2 text-[#4B5563] max-w-2xl leading-relaxed">{summary}</p>
        </div>

        <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm text-[#1F2933]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#374151] leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** ---------- Tabs (with animated indicator) ---------- **/

function Tabs({ value, onChange }: { value: VisualTab; onChange: (v: VisualTab) => void }) {
  const items: { id: VisualTab; label: string }[] = [
    { id: "pyramid", label: "Pyramide" },
    { id: "flow", label: "Séance" },
    { id: "triangle", label: "Axes" },
  ];

  return (
    <div className="relative inline-flex flex-wrap gap-2 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur">
      {items.map((it) => {
        const active = value === it.id;
        return (
          <button
            key={it.id}
            onClick={() => onChange(it.id)}
            className={[
              "relative rounded-full px-4 py-2 text-sm font-semibold transition",
              active ? "text-white" : "text-[#1F2933] hover:text-[#111827]",
            ].join(" ")}
          >
            {active && (
              <motion.span
                layoutId="tabIndicator"
                className="absolute inset-0 rounded-full bg-[#3F4F3C]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <span className="relative z-10">{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/** ---------- Page ---------- **/

export default function PedagogicalFramework() {
  const [openId, setOpenId] = useState<AccordionId | null>("intent");
  const [tab, setTab] = useState<VisualTab>("pyramid");

  const fadeUp = {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
        delay: i * 0.06,
      },
    }),
  };

  const highlights = useMemo(
    () => [
      { title: "Logique Physionomie", desc: "Biomécanique + physiologie + conscience." },
      { title: "Amplitude maîtrisée", desc: "Force fluide, sans rigidité." },
      { title: "Transmission par le ressenti", desc: "On sent avant d’exécuter." },
    ],
    []
  );

  return (
    <section className="relative pb-20">
      {/* Background (same site) */}
      <div className="pointer-events-none fixed inset-0 top-0 h-screen">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#9CAF88]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#3F4F3C]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(156,175,136,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(63,79,60,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20 z-10">
        {/* Top pill */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-8 flex justify-center">
          <motion.div variants={fadeUp} custom={0}>
            <Pill>Cadre pédagogique • Too Pilates</Pill>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-10 md:mb-14">
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1F2933]">
            Pedagogical Framework
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Comprendre la méthode, voir la progression, et transmettre le mouvement avec précision.
          </motion.p>

          {/* Quick actions */}
          <motion.div variants={fadeUp} custom={3} className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/livret"
              className="inline-flex items-center gap-2 rounded-full bg-[#3F4F3C] px-5 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition"
            >
              Découvrir le livret <span aria-hidden>→</span>
            </Link>
            <a
              href="#details"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#1F2933] shadow-sm backdrop-blur hover:bg-white/85 transition"
            >
              Lire les détails <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Highlights */}
<motion.div
  initial="hidden"
  animate="show"
  variants={fadeUp}
  custom={1}
  className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12"
>
  {highlights.map((h, idx) => (
      <motion.div
        key={h.title}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
        className="
          group relative
          rounded-[28px]
          border border-black/10
          bg-white/70 backdrop-blur
          shadow-lg
          p-6 md:p-7
          hover:shadow-xl
          transition
          overflow-hidden
        "
      >
        {/* glow hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/10 opacity-0 group-hover:opacity-100 transition" />



        {/* texte */}
        <div className="relative mt-5">
          <h3 className="text-lg font-semibold text-[#1F2933] tracking-tight">
            {h.title}
          </h3>

          <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">
            {h.desc}
          </p>
        </div>

        {/* ligne animée bas */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#3F4F3C] group-hover:w-full transition-all duration-500" />
      </motion.div>
    ))}
  </motion.div>


        {/* Visual section (tabs + animated panel) */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={5}>
          <Card
            title="Voir la méthode"
            subtitle="Un seul visuel à la fois pour garder une lecture claire."
            rightSlot={
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#3F4F3C]" />
              </span>
            }
          >
            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <Tabs value={tab} onChange={setTab} />
              <p className="text-sm text-[#6B7280]">Choisis un angle : progression, séance, ou axes.</p>
            </div>

            <SoftDivider />

            <div className="mt-6">
              <AnimatePresence mode="wait">
                {tab === "pyramid" && (
                  <motion.div
                    key="pyramid"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ProgressPyramid />
                    <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                      Chaque niveau consolide le suivant : ancrage → amplitude → puissance → maîtrise.
                    </p>
                  </motion.div>
                )}

                {tab === "flow" && (
                  <motion.div
                    key="flow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <SessionFlow />
                    <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                      Une progression orchestrée : conscience → contrôle → expansion → ancrage.
                    </p>
                  </motion.div>
                )}

                {tab === "triangle" && (
                  <motion.div
                    key="triangle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <PedagogyTriangle />
                    <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
                      Une pédagogie tridimensionnelle : précision + ressenti + présence.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>

        {/* “Key takeaways” improved */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={6} className="mt-8 md:mt-10">
          <Card
            title="Une méthode vivante"
            subtitle="Too Pilates vise un corps stable, mobile et intelligent — en respectant la structure et l’énergie du corps."
          >
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                { t: "Observer", d: "Lire le corps, ses appuis, ses compensations." },
                { t: "Adapter", d: "Ajuster les consignes, la charge, l’amplitude." },
                { t: "Harmoniser", d: "Relier souffle, centre et qualité du geste." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                  <p className="font-semibold text-[#1F2933]">{x.t}</p>
                  <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/livret"
                className="inline-flex items-center gap-2 rounded-full bg-[#3F4F3C] px-5 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition"
              >
                Découvrir le livret <span aria-hidden>→</span>
              </Link>
              <a
                href="#details"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#1F2933] shadow-sm backdrop-blur hover:bg-white/85 transition"
              >
                Détails pédagogiques <span aria-hidden>↓</span>
              </a>
            </div>
          </Card>
        </motion.div>

        {/* Accordions */}
        <motion.div id="details" initial="hidden" animate="show" variants={fadeUp} custom={7} className="mt-12 md:mt-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6B7280]">Détails pédagogiques</p>
          <p className="mt-2 text-sm text-[#6B7280] max-w-2xl">
            Ouvre une section pour lire les principes. (Animation + lecture plus fluide.)
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
        </motion.div>
      </div>
    </section>
  );
}
