"use client";

import { useState } from "react";
const PLACES = [
  {
    name: "Gym Way Aouina",
    schedules: [
      { day: "Lundi", time: "18:00 - 19:00" },
      { day: "Mercredi", time: "07:30 - 08:30" },
      { day: "Samedi", time: "10:00 - 11:00" },
    ],
  },
  {
    name: "Studio Curves",
    schedules: [
      { day: "Mardi", time: "19:00 - 20:00" },
      { day: "Jeudi", time: "12:30 - 13:30" },
      { day: "Dimanche", time: "09:00 - 10:00" },
    ],
  },
  {
    name: "Studio Amina",
    schedules: [
      { day: "Lundi", time: "08:00 - 09:00" },
      { day: "Vendredi", time: "18:30 - 19:30" },
      { day: "Samedi", time: "11:30 - 12:30" },
    ],
  },
];

export default function PlanningPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{
    place: string;
    day: string;
    time: string;
  } | null>(null);

  const openModal = (place: string, day: string, time: string) => {
    setSelected({ place, day, time });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="min-h-[80vh] bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Planning des cours Too Pilates®
          </h1>
          <div className="w-8 h-1 bg-primary rounded-full mt-6" />
        </div>

        <div className="grid gap-6">
          {PLACES.map((place) => (
            <div key={place.name} className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-900">
                {place.name}
              </h2>

              <div className="mt-4 space-y-3">
                {place.schedules.map((s, idx) => (
                  <button
                    key={`${s.day}-${idx}`}
                    onClick={() => openModal(place.name, s.day, s.time)}
                    className="w-full flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <span className="font-medium text-gray-900">{s.day}</span>
                    <span className="text-gray-600">{s.time}</span>
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Les horaires peuvent être modifiés.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Réservation
            </h3>

            {selected && (
              <p className="text-gray-600 mt-2 leading-relaxed">
                <span className="font-medium text-gray-900">
                  {selected.place}
                </span>{" "}
                — {selected.day} ({selected.time})
              </p>
            )}

            <p className="text-gray-700 mt-4">
              Pour réserver, contactez :{" "}
              <span className="font-semibold">28582502</span>
            </p>

            <div className="mt-6 flex gap-3 justify-end">
              <button
                onClick={closeModal}
                className="rounded-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
              >
                Fermer
              </button>

              {/* Optionnel : bouton appel direct sur mobile */}
              <a
                href="tel:28582502"
                className="rounded-xl px-4 py-2 bg-primary text-white hover:opacity-90 transition"
              >
                Appeler
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
