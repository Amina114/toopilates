"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import planningData from "@/data/planning.json";

type Schedule = {
  day: string;
  time: string;
};

type Place = {
  name: string;
  contact: string;
  mapsLink?: string;
  schedules: Schedule[];
};

type PlanningData = {
  places: Place[];
};

const PLACES = (planningData as PlanningData).places;

type Selected = {
  place: string;
  day: string;
  time: string;
  contact: string;
  mapsLink: string;
} | null;

export default function PlanningPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Selected>(null);

  const fadeUp = useMemo(
    () => ({
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
    }),
    []
  );

  const openModal = (place: string, day: string, time: string) => {
    const selectedPlace = PLACES.find((item) => item.name === place);
    setSelected({
      place,
      day,
      time,
      contact: selectedPlace?.contact ?? "28582502",
      mapsLink: selectedPlace?.mapsLink ?? "#",
    });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[var(--background)] py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.10),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 mt-10 md:mt-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Où se trouve Too Pilates®
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Retrouvez les lieux et créneaux des cours Too Pilates®
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6">
          {PLACES.map((place, placeIdx) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: placeIdx * 0.05 }}
              className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#13192e]">
                    {place.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Clique sur un créneau pour voir la réservation.
                  </p>
                </div>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#033844]" />
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {place.schedules.map((s, idx) => (
                  <motion.button
                    key={`${s.day}-${idx}`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(place.name, s.day, s.time)}
                    className="w-full rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-4 py-4 shadow-sm hover:bg-white/85 transition flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#033844]/10 border border-black/10">
                        <span className="h-2 w-2 rounded-full bg-[#033844]" />
                      </span>
                      <div className="text-left">
                        <p className="font-semibold text-[#13192e]">{s.day}</p>
                        <p className="text-sm text-gray-600">{s.time}</p>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-white bg-[#033844] px-3 py-2 rounded-full shadow-sm">
                      Réserver
                    </span>
                  </motion.button>
                ))}
              </div>

              <p className="text-xs text-gray-600 mt-5">
                * Les horaires peuvent être modifiés.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-6 shadow-2xl transition duration-300 hover:-translate-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#1F2933]">
                Réservation
              </h3>

              {selected && (
                <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-sm text-gray-700">
                    {selected.place} — {selected.day} ({selected.time})
                  </p>
                  <p className="mt-3 text-sm text-gray-700">
                    Contact salle : <strong>{selected.contact}</strong>
                  </p>
                  <p className="mt-3 text-sm text-gray-700">
                    Lieu : <a href={selected.mapsLink} className="text-[#087389] underline" target="_blank" rel="noopener noreferrer">Google Maps</a>
                  </p>
                </div>
              )}

              <div className="mt-6 flex gap-3 justify-end">
                <button
                  onClick={closeModal}
                  className="rounded-full px-5 py-3 bg-white/70 border border-black/10 shadow-sm hover:bg-white/85 transition"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}