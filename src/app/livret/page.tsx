"use client";

import { useState } from "react";

const gouvernorats = [
    "Ariana","Béja","Ben Arous","Bizerte","Gabès","Gafsa","Jendouba",
    "Kairouan","Kasserine","Kébili","Le Kef","Mahdia","Manouba","Médenine",
    "Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine",
    "Tozeur","Tunis","Zaghouan",
];

type FormData = {
    sexe: string;
    age: number | ""; // "" for empty input
    gouvernorat: string;
    nom: string;
    prenom: string;
    email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function LivrePage() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<FormData>({
        sexe: "",
        age: "",
        gouvernorat: "",
        nom: "",
        prenom: "",
        email: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!form.sexe) newErrors.sexe = "Champ obligatoire";

        const ageNumber = typeof form.age === "string" ? parseInt(form.age) : form.age;
        if (!ageNumber || ageNumber < 10 || ageNumber > 100) newErrors.age = "Âge invalide";

        if (!form.gouvernorat) newErrors.gouvernorat = "Champ obligatoire";
        if (!form.nom.trim()) newErrors.nom = "Nom obligatoire";
        if (!form.prenom.trim()) newErrors.prenom = "Prénom obligatoire";
        if (!form.email.trim()) newErrors.email = "Email obligatoire";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Email invalide";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const commandes = JSON.parse(localStorage.getItem("commandesLivret") || "[]");
        commandes.push({ ...form, id: Date.now(), date: new Date().toLocaleDateString() });
        localStorage.setItem("commandesLivret", JSON.stringify(commandes));

        setForm({ sexe:"", age:"", gouvernorat:"", nom:"", prenom:"", email:"" });
        setSuccess(true);
    };

    return (
        <section className="py-16 min-h-[80vh] max-w-5xl mx-auto px-6">

            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Commander le Livret TooPilates</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Le livret <strong>TooPilates</strong>, conçu par le coach <strong>Hedy Ammar</strong>, fondateur du concept <strong>TooPilates</strong>,
                transmet bien plus qu’une pratique : il partage <strong>une méthode</strong>, <strong>une logique du mouvement</strong> et{" "}
                <strong>une philosophie corporelle</strong>.
                Il ne s’agit pas de reproduire des exercices, mais de comprendre <strong>comment</strong> et <strong>pourquoi</strong> le corps bouge —
                pour construire un corps <strong>stable</strong>, <strong>mobile</strong> et <strong>conscient</strong>.
                </p>
            </div>

            {/* Form Card */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 border border-gray-100">
                <button
                    onClick={() => { setShowForm(!showForm); setSuccess(false); }}
                    className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition mb-6 w-full md:w-auto"
                >
                    {showForm ? "Fermer le formulaire" : "Commander le livret"}
                </button>

                {showForm && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <select
                                    value={form.sexe}
                                    onChange={(e) => setForm({ ...form, sexe: e.target.value })}
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="">Sexe</option>
                                    <option value="Femme">Femme</option>
                                    <option value="Homme">Homme</option>
                                </select>
                                {errors.sexe && <p className="text-red-500 text-sm">{errors.sexe}</p>}
                            </div>

                            <div>
                                <input
                                    type="number"
                                    placeholder="Âge"
                                    value={form.age}
                                    onChange={(e) => setForm({ ...form, age: e.target.value ? parseInt(e.target.value) : "" })}
                                    className="w-full border rounded-lg p-2"
                                />
                                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                            </div>

                            <div>
                                <select
                                    value={form.gouvernorat}
                                    onChange={(e) => setForm({ ...form, gouvernorat: e.target.value })}
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="">Gouvernorat</option>
                                    {gouvernorats.map((g) => (
                                        <option key={g} value={g}>{g}</option>
                                    ))}
                                </select>
                                {errors.gouvernorat && <p className="text-red-500 text-sm">{errors.gouvernorat}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    value={form.nom}
                                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                                    className="w-full border rounded-lg p-2"
                                />
                                {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Prénom"
                                    value={form.prenom}
                                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                                    className="w-full border rounded-lg p-2"
                                />
                                {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full border rounded-lg p-2"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition mt-2 w-full md:w-auto"
                        >
                            Envoyer
                        </button>

                        {success && (
                            <p className="text-pink-600 font-semibold mt-3">
                                ✅ Commande envoyée ! Nous allons vous contacter pour validation.
                            </p>
                        )}
                    </form>
                )}
            </div>

            {/* Info Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-3">Pourquoi ce livret ?</h2>
                    <p className="text-gray-600 leading-relaxed">
                    Parce que TooPilates n’est pas une méthode standardisée. Ce livret te permet de découvrir une approche structurée qui relie{" "}
                    <strong>biomécanique</strong>, <strong>respiration</strong>, <strong>chaînes musculaires</strong> et{" "}
                    <strong>conscience corporelle</strong>.
                    <br /><br />
                    Il t’aide à renforcer en <strong>amplitude maîtrisée</strong>, sans rigidité ni contrainte, et à construire une pratique orientée{" "}
                    <strong>durabilité</strong>, <strong>performance</strong> et <strong>équilibre</strong>.
                    </p>

                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-3">Pour qui ?</h2>
                    <p className="text-gray-600 leading-relaxed">
                    Ce livret s’adresse à celles et ceux qui veulent <strong>comprendre leur corps</strong> et mieux bouger :{" "}
                    pratiquants (débutants à avancés), sportifs, et coachs souhaitant approfondir une méthode <strong>moderne</strong> et{" "}
                    <strong>structurée</strong>.
                    <br /><br />
                    Aucun niveau prérequis : la progression est pensée pour s’adapter à chaque physionomie.
                    </p>

                </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-3">Contenu du livret</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Les fondations de la <strong>Logique Physionomie</strong></li>
                <li>Les <strong>trois chaînes musculaires</strong> fondamentales</li>
                <li>Renforcement en <strong>amplitude maximale contrôlée</strong></li>
                <li>Principes de <strong>respiration</strong> TooPilates</li>
                <li>Structure et <strong>progression</strong> d’une séance</li>
                <li>Système TooPilates et ses <strong>niveaux d’évolution</strong></li>
                <li>Dimension <strong>pédagogique</strong>, <strong>sensorielle</strong> et <strong>émotionnelle</strong> du mouvement</li>
                <li>Philosophie : <strong>équilibre</strong>, <strong>longévité</strong> et <strong>conscience corporelle</strong></li>
                </ul>
            </div>

        </section>
    );
}
