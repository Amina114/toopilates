"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

interface Avis {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    message: string;
    date: string;
}

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

export default function AvisPage() {
    const [avisList, setAvisList] = useState<Avis[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<Form>({
        nom: "",
        prenom: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const fadeUp = {
        hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.65, ease: cubicBezier(0.25, 0.46, 0.45, 0.94), delay: i * 0.06 },
        }),
    };

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("avisToo Pilates®") || "[]") as Avis[];
        setAvisList(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("avisToo Pilates®", JSON.stringify(avisList));
    }, [avisList]);

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        const newAvis: Avis = {
            ...form,
            id: Date.now(),
            date: new Date().toLocaleDateString(),
        };

        setAvisList([newAvis, ...avisList]);
        setForm({ nom: "", prenom: "", email: "", message: "" });
        setShowForm(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-8">
                <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]">
                    Avis adhérents – Too Pilates®
                </motion.h1>

                <motion.p variants={fadeUp} custom={2} className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Merci à nos adhérents pour leurs retours. Partage ton expérience avec Too Pilates®.
                </motion.p>
            </motion.div>

                <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3} className="mb-8">
                    <div className="relative rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-6 md:p-8">
                        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold text-[#13192e]">Laisser un avis</h2>
                                <p className="mt-1 text-gray-600">Ton retour nous aide à améliorer l'expérience Too Pilates®.</p>
                            </div>

                            <motion.button
                                type="button"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowForm(!showForm)}
                                className={[
                                    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3",
                                    "text-sm font-semibold text-white shadow-md",
                                    "bg-[#033844] hover:opacity-95 transition",
                                ].join(" ")}
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
                                            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
                                            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
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
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <div className="mt-4 flex items-center gap-3">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md bg-[#3F4F3C]"
                                        >
                                            Envoyer
                                        </button>
                                        <p className="text-xs text-gray-600">En envoyant, tu acceptes d’être contacté(e) pour la validation.</p>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <div className="grid gap-6">
                    {avisList.length === 0 && (
                        <div className="rounded-3xl border border-black/10 bg-white/75 p-6 text-gray-600">Aucun avis pour le moment.</div>
                    )}

                    {avisList.map((avis, idx) => (
                        <motion.div key={avis.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="relative rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="font-semibold text-[#13192e]">{avis.prenom} {avis.nom}</p>
                                    <p className="text-sm text-gray-600">{avis.email} • <span className="text-sm text-gray-500">{avis.date}</span></p>
                                </div>
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm">
                                    <span className="h-2 w-2 rounded-full bg-[#033844]" />
                                </span>
                            </div>
                            <p className="mt-3 text-gray-700 leading-relaxed">{avis.message}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
