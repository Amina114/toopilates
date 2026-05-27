"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import emailjs from "@emailjs/browser";

interface Form {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  message?: string;
}

type EmailJSError = {
  status?: number;
  text?: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AVIS;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function AvisPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Form>({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.nom.trim()) newErrors.nom = "Nom obligatoire";
    if (!form.prenom.trim()) newErrors.prenom = "Prénom obligatoire";

    if (!form.email.trim()) {
      newErrors.email = "Email obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email invalide";
    }

    if (!form.message.trim()) newErrors.message = "Avis obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Configuration EmailJS manquante.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          source: "Page avis",
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setForm({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });

      setErrors({});
      setSuccess(true);
      setShowForm(false);
    } catch (err: unknown) {
      const error = err as EmailJSError;
      console.error("EmailJS FAILED:", {
        status: error?.status,
        text: error?.text,
        raw: err,
      });

      alert(error?.text || "Erreur lors de l’envoi ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="relative pb-20">
      <div className="pointer-events-none fixed inset-0 top-0 h-screen">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 z-10">
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
            Avis adhérents – Too Pilates®
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-gray-700 max-w-2xl mx-auto"
          >
            Merci à nos adhérents pour leurs retours. Partage ton expérience
            avec Too Pilates®.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="mb-8"
        >
          <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#13192e]">
                  Laisser un avis
                </h2>
                <p className="mt-1 text-gray-600">
                  Ton retour nous aide à améliorer l'expérience Too Pilates®.
                </p>
              </div>

              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowForm(!showForm);
                  setSuccess(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md bg-[#033844] hover:opacity-95 transition"
              >
                {showForm ? "Fermer le formulaire" : "Donner un avis"}
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/80" />
              </motion.button>
            </div>

            <AnimatePresence>
              {showForm && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative mt-6 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        className="w-full rounded-2xl border bg-white/80 px-4 py-3 text-sm text-gray-900 shadow-sm"
                        value={form.nom}
                        onChange={handleChange}
                      />
                      {errors.nom && (
                        <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        className="w-full rounded-2xl border bg-white/80 px-4 py-3 text-sm text-gray-900 shadow-sm"
                        value={form.prenom}
                        onChange={handleChange}
                      />
                      {errors.prenom && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.prenom}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-2xl border bg-white/80 px-4 py-3 text-sm text-gray-900 shadow-sm"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <textarea
                      name="message"
                      placeholder="Votre avis..."
                      rows={4}
                      className="w-full rounded-2xl border bg-white/80 px-4 py-3 text-sm text-gray-900 shadow-sm"
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md bg-[#3F4F3C] disabled:opacity-60"
                    >
                      {loading ? "Envoi..." : "Envoyer"}
                    </button>
                    <p className="text-xs text-gray-600">
                      En envoyant, tu acceptes d’être contacté(e) pour la
                      validation.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {success && (
              <div className="mt-4 rounded-2xl border border-[#9CAF88]/40 bg-[#9CAF88]/15 px-4 py-3 text-[#1F2933]">
                <p className="font-semibold">✅ Avis envoyé !</p>
                <p className="text-sm text-gray-700">
                  Merci pour ton retour.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}