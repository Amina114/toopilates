"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";

export default function CoachesPage() {
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

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#F7F6F3] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 min-h-[80vh]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center mb-8"
        >
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]"
          >
            Formation Too Pilates®
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-gray-700 max-w-2xl mx-auto"
          >
            Seuls les coachs formés et certifiés <strong>Too Pilates®</strong>{" "}
            sont autorisés à enseigner la méthode.
            <br className="my-2" />
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="mb-8"
        >
          <div className="relative rounded-3xl border border-black/10 bg-white/75 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#13192e]">
                  Informations & contact
                </h2>
                <p className="mt-1 text-gray-600">
                  Pour toute demande d’inscription ou d’information, veuillez
                  contacter :
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="font-medium text-gray-900">hedyammar111@gmail.com</p>
              <p className="font-medium text-gray-900">+216 56 134 950</p>
              <p className="text-sm text-gray-500">
                Un formulaire d’inscription sera bientôt accessible sur le site.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}