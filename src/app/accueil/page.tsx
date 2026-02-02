"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";

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

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("avisTooPilates") || "[]") as Avis[];
        setAvisList(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("avisTooPilates", JSON.stringify(avisList));
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
        <section className="py-16 min-h-[80vh] max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Avis clients – TooPilates</h1>

            <div className="mb-8">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                >
                    {showForm ? "Fermer le formulaire" : "Donner un avis"}
                </button>
            </div>

            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded-xl p-6 mb-10 space-y-4"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="nom"
                                placeholder="Nom"
                                className="w-full border rounded-lg p-2"
                                value={form.nom}
                                onChange={handleChange}
                            />
                            {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="prenom"
                                placeholder="Prénom"
                                className="w-full border rounded-lg p-2"
                                value={form.prenom}
                                onChange={handleChange}
                            />
                            {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
                        </div>
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border rounded-lg p-2"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
            <textarea
                name="message"
                placeholder="Votre avis..."
                rows={4}
                className="w-full border rounded-lg p-2"
                value={form.message}
                onChange={handleChange}
            />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                        Envoyer
                    </button>
                </form>
            )}

            <div className="space-y-4">
                {avisList.length === 0 && <p className="text-gray-500">Aucun avis pour le moment.</p>}

                {avisList.map((avis) => (
                    <div key={avis.id} className="border rounded-xl p-4 bg-gray-50 shadow-sm">
                        <p className="font-semibold">
                            {avis.prenom} {avis.nom}
                        </p>
                        <p className="text-sm text-gray-600">{avis.email}</p>
                        <p className="text-sm text-gray-500">{avis.date}</p>
                        <p className="mt-2 text-gray-700">{avis.message}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
