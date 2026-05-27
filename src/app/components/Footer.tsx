"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const LEGAL = [
  { label: "Mentions légales", href: "/mentionsLegales" },
  { label: "Politique de confidentialité", href: "/politiqueDeConfidentialite" },
];

const SOCIAL = [
  {
    label: "Too Pilates®",
    href: "https://www.instagram.com/toopilates?igsh=ajJnODl0OWI3ZXk4",
  },
  {
    label: "Hedy Ammar",
    href: "https://www.instagram.com/hedy_ammar?igsh=a3dyMm84aWw4Y3J6",
  },
];

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AVIS;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type EmailJSError = {
  status?: number;
  text?: string;
};

export default function Footer() {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    setFeedback("");

    if (!email || !message) {
      setFeedback("Veuillez saisir votre e-mail et votre message.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Env manquant:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      setFeedback("Configuration EmailJS manquante dans .env.local.");
      return;
    }

    try {
      setLoading(true);

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: email,
          message: message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS SUCCESS:", response.status, response.text);

      setFeedback("Message envoyé avec succès ✅");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const error = err as EmailJSError;

      console.error("EmailJS FAILED:", {
        status: error?.status,
        text: error?.text,
        raw: err,
      });

      setFeedback(
        error?.text
          ? `Erreur EmailJS: ${error.text}`
          : "Erreur lors de l’envoi ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#075f7f]/30 bg-gradient-to-b from-white to-gray-50 text-[#13192e]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#087389]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#43bac0]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-light text-[#13192e] leading-tight">
              Rejoignez la communauté
              <span className="block font-semibold">Too Pilates®</span>
            </h2>

            <div className="mt-8 max-w-md space-y-4">
              <input
                type="email"
                placeholder="Saisissez votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-[#075f7f]/40 bg-transparent py-3 outline-none text-sm text-[#075f7f]"
              />

              <textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-md border border-[#075f7f]/20 bg-white/70 px-4 py-3 outline-none text-sm text-[#075f7f]"
              />

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-[#43bac0]/10 px-6 py-3 text-sm text-[#033844] rounded-md disabled:opacity-60"
                >
                  {loading ? "Envoi..." : "Envoyer"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setMessage("");
                    setFeedback("");
                  }}
                  className="text-sm underline text-gray-600 hover:text-black"
                >
                  Effacer
                </button>
              </div>

              {feedback && <p className="text-sm text-[#033844]">{feedback}</p>}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#075f7f]/20 bg-white/80 px-3 py-2 text-xs font-medium shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:border-[#087389] hover:shadow-md"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white">
                    <Instagram size={14} />
                  </span>
                  <span className="text-[#13192e]">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-[#13192e]">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:hedyammar111@gmail.com" className="hover:underline">
                  hedyammar111@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium">Téléphone:</span>{" "}
                <a href="tel:+21656134950" className="hover:underline">
                  +216 56134950
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-3 mt-7 min-w-[220px] md:mt-0">
            <h4 className="text-sm font-semibold text-[#13192e]">
              Légal
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap text-[#075f7f] underline-offset-4 transition hover:text-[#087389] hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#075f7f]/30 pt-6 text-xs text-[#075f7f] md:flex-row md:items-center md:justify-between">
          <p>© {year} Too Pilates®. Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span>Fait avec ♥ — Tunis</span>
            <span className="hidden md:inline">•</span>
            <Link
              href="/contact"
              className="underline-offset-4 transition hover:text-[#087389] hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}