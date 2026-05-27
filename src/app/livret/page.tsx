"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
const image1 = "/photo/livret/image1.webp";
const image2 = "/photo/livret/image2.webp";

import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import emailjs from "@emailjs/browser";

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
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_LIVRE_COACH;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type FormData = {
  sexe: string;
  age: number | "";
  gouvernorat: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type EmailJSError = {
  status?: number;
  text?: string;
};

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

export default function LivrePage() {
  const [showForm, setShowForm] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    sexe: "",
    age: "",
    gouvernorat: "",
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.sexe) newErrors.sexe = "Champ obligatoire";

    const ageNumber =
      typeof form.age === "string" ? parseInt(form.age) : form.age;
    if (!ageNumber || ageNumber < 10 || ageNumber > 100) {
      newErrors.age = "Âge invalide";
    }

    if (!form.gouvernorat) newErrors.gouvernorat = "Champ obligatoire";
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
          sexe: form.sexe,
          age: form.age,
          gouvernorat: form.gouvernorat,
          nom: form.nom,
          prenom: form.prenom,
          telephone: form.telephone,
          email: form.email,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setForm({
        sexe: "",
        age: "",
        gouvernorat: "",
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
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
      "@type": "Product",
      name: "Livret pédagogique Too Pilates®",
      description:
        "Livret complet Too Pilates® : Logique Physionomie, biomécanique, respiration, chaînes musculaires, progression et pédagogie du mouvement.",
      brand: { "@type": "Brand", name: "Too Pilates®" },
      category: "Pilates",
    };
    return JSON.stringify(data);
  }, []);

  return (
    <section className="relative pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contentJsonLd }}
      />

      <div className="pointer-events-none fixed inset-0 top-0 h-screen">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 mb-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-left"
          >
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]"
            >
              Livret pédagogique Too Pilates®
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-gray-700 max-w-2xl text-lg leading-relaxed"
            >
              Le livret <strong>Too Pilates®</strong>, conçu par le coach{" "}
              <strong>Hedy Ammar</strong>, fondateur du concept{" "}
              <strong>Too Pilates®</strong>, transmet bien plus qu'une pratique :
              il partage <strong>une méthode</strong>, <strong>une logique</strong>{" "}
              du mouvement et une <strong>philosophie corporelle</strong>.
              <br />
              <span className="text-gray-600">
                Comprendre <strong>comment</strong> et <strong>pourquoi</strong>{" "}
                le corps bouge — pour construire un corps{" "}
                <strong>stable</strong>, <strong>mobile</strong> et{" "}
                <strong>conscient</strong>.
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                "Posture & alignement",
                "Force profonde (core)",
                "Mobilité & amplitude maîtrisée",
                "Respiration & présence",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/70 px-3 py-1.5 text-sm text-gray-700 border border-black/10 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="relative"
          >
            <div className="relative h-[320px] md:h-[460px] overflow-hidden rounded-[32px] shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={image1}
                alt="Livret pédagogique Too Pilates"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={5}
          className="mb-12"
        >
          <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-white/30 pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#13192e]">
                  Formulaire de commande
                </h2>
                <p className="mt-1 text-gray-600">
                  Remplis tes informations — réponse rapide pour validation.
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
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md bg-[#033844] hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-[#087389]/50"
              >
                {showForm ? "Fermer le formulaire" : "Commander le livret"}
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
                    <Field label="Sexe" error={errors.sexe}>
                      <select
                        value={form.sexe}
                        onChange={(e) =>
                          setForm({ ...form, sexe: e.target.value })
                        }
                        className={inputClass(!!errors.sexe)}
                      >
                        <option value="">Sélectionner</option>
                        <option value="Femme">Femme</option>
                        <option value="Homme">Homme</option>
                      </select>
                    </Field>

                    <Field label="Âge" error={errors.age}>
                      <input
                        type="number"
                        placeholder="Ex: 28"
                        value={form.age}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            age: e.target.value ? parseInt(e.target.value) : "",
                          })
                        }
                        className={inputClass(!!errors.age)}
                      />
                    </Field>

                    <Field label="Gouvernorat" error={errors.gouvernorat}>
                      <select
                        value={form.gouvernorat}
                        onChange={(e) =>
                          setForm({ ...form, gouvernorat: e.target.value })
                        }
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

                    <Field label="Nom" error={errors.nom}>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        value={form.nom}
                        onChange={(e) =>
                          setForm({ ...form, nom: e.target.value })
                        }
                        className={inputClass(!!errors.nom)}
                      />
                    </Field>

                    <Field label="Prénom" error={errors.prenom}>
                      <input
                        type="text"
                        placeholder="Votre prénom"
                        value={form.prenom}
                        onChange={(e) =>
                          setForm({ ...form, prenom: e.target.value })
                        }
                        className={inputClass(!!errors.prenom)}
                      />
                    </Field>

                    <Field label="Téléphone" error={errors.telephone}>
                      <input
                        type="tel"
                        placeholder="Ex: +216 12 345 678"
                        value={form.telephone}
                        onChange={(e) =>
                          setForm({ ...form, telephone: e.target.value })
                        }
                        className={inputClass(!!errors.telephone)}
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        placeholder="ex: nom@gmail.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md bg-[#033844] hover:opacity-95 transition w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#087389]/50 disabled:opacity-60"
                    >
                      {loading ? "Envoi..." : "Envoyer la demande"}
                      <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/80" />
                    </motion.button>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      En envoyant, tu acceptes d'être contacté(e) pour la validation.
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
                        <p className="font-semibold">✅ Demande envoyée !</p>
                        <p className="text-sm text-gray-700">
                          Nous allons vous contacter rapidement.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={6}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[260px] md:h-[340px] overflow-hidden rounded-[28px] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={image2}
                alt="Livret pédagogique Too Pilates"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-[#1F2933]">
                Une méthode à lire, comprendre et transmettre
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Ce livret donne une vision claire de l’approche Too Pilates®,
                avec une logique structurée qui relie pédagogie, sensation,
                respiration et organisation du mouvement.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <QuestionCard
            id="pourquoi"
            question="Pourquoi ce livret ?"
            subtitle="Une approche structurée, consciente, moderne."
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          >
            Parce que Too Pilates® n'est pas une méthode standardisée. Ce livret te permet de découvrir une approche qui relie <strong>biomécanique</strong>, <strong>respiration</strong>, <strong>chaînes musculaires</strong> et <strong>conscience corporelle</strong>. Il t'aide à renforcer en <strong>amplitude maîtrisée</strong>, sans rigidité ni contrainte, pour une pratique orientée <strong>durabilité</strong>, <strong>performance</strong> et <strong>équilibre</strong>.
          </QuestionCard>

          <QuestionCard
            id="pourqui"
            question="Pour qui ?"
            subtitle="Débutants, pratiquants, sportifs, coachs."
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          >
            Ce livret s’adresse à toutes les personnes qui souhaitent découvrir ou approfondir la <strong>méthode Too Pilates®</strong>,
            une œuvre pédagogique déposée, structurée pour l’<strong>enseignement</strong>, la <strong>formation</strong> et la <strong>transmission</strong>.


            <p className="mt-3">
              Aucun prérequis : la progression est pensée pour s’adapter à chaque physionomie, avec une logique pédagogique qui guide la pratique.
            </p>
          </QuestionCard>
        </div>

        <QuestionCard
          id="contenu"
          question="Contenu du livret"
          subtitle="Les piliers de la méthode Too Pilates®."
          openQuestion={openQuestion}
          setOpenQuestion={setOpenQuestion}
        >
          <ul className="list-disc list-inside space-y-2">
            <li>Les fondations de la <strong>Logique Physionomie</strong></li>
            <li>Les <strong>trois chaînes musculaires</strong> fondamentales</li>
            <li>Renforcement en <strong>amplitude maximale contrôlée</strong></li>
            <li>Principes de <strong>respiration</strong> Too Pilates®</li>
            <li>Structure et <strong>progression</strong> d'une séance</li>
            <li>Système Too Pilates® et ses <strong>niveaux d'évolution</strong></li>
            <li>Dimension <strong>pédagogique</strong>, <strong>sensorielle</strong> et <strong>émotionnelle</strong> du mouvement</li>
            <li>Philosophie : <strong>équilibre</strong>, <strong>longévité</strong> et <strong>conscience corporelle</strong></li>
          </ul>
        </QuestionCard>
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

function QuestionCard({
  id,
  question,
  subtitle,
  children,
  openQuestion,
  setOpenQuestion,
}: {
  id: string;
  question: string;
  subtitle?: string;
  children: React.ReactNode;
  openQuestion: string | null;
  setOpenQuestion: (id: string | null) => void;
}) {
  const isOpen = openQuestion === id;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={() => setOpenQuestion(id)}
        className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 cursor-pointer hover:bg-white/85 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-white/30 pointer-events-none" />
        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-[#1F2933]">
                {question}
              </h2>
              {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
            </div>
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm text-lg font-semibold text-[#3F4F3C]">
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenQuestion(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2933]">
                  {question}
                </h2>
                <button
                  onClick={() => setOpenQuestion(null)}
                  className="text-2xl text-gray-500 hover:text-gray-700 transition"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}