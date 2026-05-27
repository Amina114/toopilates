"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
const coachPhoto = "/photo/coachs/image1.png";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import emailjs from "@emailjs/browser";
import coachesData from "@/data/coaches.json";

type Coach = {
  id: string;
  name: string;
  lastname: string;
  phone: string;
};

type FormData = {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  gouvernorat: string;
  experience: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type EmailJSError = {
  status?: number;
  text?: string;
};

const coaches: Coach[] = (coachesData as { coaches: Coach[] }).coaches;

const gouvernorats = [
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabès",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kébili",
  "Le Kef",
  "Mahdia",
  "Manouba",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_COACH ||
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_LIVRE ||
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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

export default function CoachesPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormData>({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    gouvernorat: "",
    experience: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.nom.trim()) newErrors.nom = "Nom obligatoire";
    if (!form.prenom.trim()) newErrors.prenom = "Prénom obligatoire";

    if (!form.telephone.trim()) {
      newErrors.telephone = "Téléphone obligatoire";
    } else if (!/^[0-9+\s()-]{8,20}$/.test(form.telephone)) {
      newErrors.telephone = "Téléphone invalide";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email invalide";
    }

    if (!form.gouvernorat) newErrors.gouvernorat = "Champ obligatoire";
    if (!form.experience.trim()) newErrors.experience = "Expérience requise";
    if (!form.message.trim()) newErrors.message = "Présentez votre projet";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrors((prev) => ({
        ...prev,
        email: "Configuration EmailJS manquante.",
      }));
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nom: form.nom,
          prenom: form.prenom,
          telephone: form.telephone,
          email: form.email,
          gouvernorat: form.gouvernorat,
          experience: form.experience,
          message: form.message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setForm({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        gouvernorat: "",
        experience: "",
        message: "",
      });
      setErrors({});
      setSuccess(true);
    } catch (err: unknown) {
      const error = err as EmailJSError;
      console.error("EmailJS FAILED:", {
        status: error?.status,
        text: error?.text,
        raw: err,
      });
      alert(error?.text || "Erreur lors de l’envoi.");
    } finally {
      setLoading(false);
    }
  };

  const contentJsonLd = useMemo(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Too Pilates®",
      url: "https://toopilates.com",
      description: "Demande pour devenir coach Too Pilates®",
    };
    return JSON.stringify(data);
  }, []);

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[var(--background)] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 mt-10 md:mt-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Les coachs
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Découvrez notre équipe, leurs contacts et postulez pour devenir coach Too Pilates®.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
          className="mb-12 rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/30 pointer-events-none rounded-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#13192e]">
                  Devenir coach Too Pilates®
                </h2>
                <p className="mt-2 text-gray-700 max-w-2xl">
                  Remplis le formulaire pour rejoindre notre communauté de coachs. Nous te recontacterons rapidement.
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#033844] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#087389]/50"
              >
                {showForm ? "Fermer le formulaire" : "Postuler comme coach"}
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
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Nom" error={errors.nom}>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        className={inputClass(!!errors.nom)}
                      />
                    </Field>

                    <Field label="Prénom" error={errors.prenom}>
                      <input
                        type="text"
                        placeholder="Votre prénom"
                        value={form.prenom}
                        onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                        className={inputClass(!!errors.prenom)}
                      />
                    </Field>

                    <Field label="Téléphone" error={errors.telephone}>
                      <input
                        type="tel"
                        placeholder="Ex: +216 12 345 678"
                        value={form.telephone}
                        onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                        className={inputClass(!!errors.telephone)}
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        placeholder="ex: nom@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass(!!errors.email)}
                      />
                    </Field>

                    <Field label="Gouvernorat" error={errors.gouvernorat}>
                      <select
                        value={form.gouvernorat}
                        onChange={(e) => setForm({ ...form, gouvernorat: e.target.value })}
                        className={inputClass(!!errors.gouvernorat)}
                      >
                        <option value="">Sélectionner</option>
                        {gouvernorats.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Expérience" error={errors.experience}>
                      <input
                        type="text"
                        placeholder="Ex: Pilates, coaching, formation"
                        value={form.experience}
                        onChange={(e) => setForm({ ...form, experience: e.target.value })}
                        className={inputClass(!!errors.experience)}
                      />
                    </Field>

                    <Field label="Présentation" error={errors.message}>
                      <textarea
                        placeholder="Parle-nous de ton parcours et de ta motivation"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={inputClass(!!errors.message)}
                        rows={4}
                      />
                    </Field>
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#033844] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#087389]/50 disabled:opacity-60 w-full md:w-auto"
                    >
                      {loading ? "Envoi..." : "Envoyer la candidature"}
                      <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/80" />
                    </motion.button>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      En envoyant, tu acceptes d'être contacté(e) pour poursuivre ta candidature.
                    </p>
                  </div>

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mt-4 rounded-2xl border border-[#9CAF88]/40 bg-[#9CAF88]/15 px-4 py-3 text-[#1F2933]"
                      >
                        <p className="font-semibold">✅ Candidature envoyée !</p>
                        <p className="text-sm text-gray-700">
                          Nous reviendrons vers toi très bientôt.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {coaches.map((coach, index) => (
            <article
              key={coach.id}
              className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src={coachPhoto}
                  alt={`${coach.name} ${coach.lastname}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                  Coach • Too Pilates®
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#13192e]">
                  {coach.name} {coach.lastname}
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    Téléphone : 
                    <a
                      href={`tel:${coach.phone.replace(/\s+/g, "")}`}
                      className="text-[#087389] hover:underline"
                    >
                      {coach.phone}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function inputClass(isError: boolean) {
  return [
    "w-full rounded-2xl border bg-white/80 px-4 py-3 text-sm text-gray-900",
    "shadow-sm outline-none transition",
    "focus:ring-2 focus:ring-[#9CAF88]/45 focus:border-[#9CAF88]/60",
    "placeholder:text-gray-400",
    isError ? "border-red-300 focus:ring-red-200" : "border-black/10",
  ].join(" ");
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1F2933]">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-1 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
