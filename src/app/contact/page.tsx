export const metadata = {
  title: "Contact Too Pilates® | WhatsApp, Instagram et email",
  description:
    "Contact officiel Too Pilates® : contactez l’équipe Too Pilates pour les formations, coachs, événements, planning et informations sur la méthode.",
  alternates: {
    canonical: "https://toopilates.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[#13192e] py-16 px-6">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-black/10 bg-white/80 p-10 shadow-xl">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">
          Contact Too Pilates®
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Pour toute question sur les formations, les coachs ou le planning,
          contacte-nous via WhatsApp, Instagram ou email.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-[#f4efe6] p-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#087389]">
              Email
            </h2>
            <p className="text-sm text-gray-800">contact@toopilates.fr</p>
            <p className="text-sm text-gray-800">hedyammar111@gmail.com</p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f4efe6] p-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#087389]">
              WhatsApp
            </h2>
            <p className="text-sm text-gray-800">+216 56 134 950</p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f4efe6] p-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#087389]">
              Instagram
            </h2>
            <p className="text-sm text-gray-800">@toopilates</p>
          </div>
        </div>
      </section>
    </main>
  );
}