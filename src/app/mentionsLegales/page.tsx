export default function MentionsLegalesPage() {
  return (
    <section className="relative pb-20">
      {/* Background accents identiques aux autres pages */}
      <div className="pointer-events-none fixed inset-0 top-0 h-screen">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#087389]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.18),transparent_50%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#033844]" />
            <span className="text-[11px] tracking-wide text-gray-700">
              Mentions légales • Too Pilates®
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]">
            Mentions légales
          </h1>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Toute utilisation non autorisée du contenu Too Pilates® est interdite.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="w-16 h-1 bg-[#087389] rounded-full mb-6" />

          <p className="text-gray-600 leading-relaxed mb-4">
            La méthode <span className="font-semibold text-gray-800">Too Pilates®</span>,
            son contenu pédagogique, ses formations, sa terminologie et ses supports
            sont protégés par le droit d’auteur et le droit des marques.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Editeur du site : Too Pilates SAS
            <br />
            Siège social : Adresse ici
            <br />
            Contact : contact@toopilates.fr
          </p>

          <h2 className="text-xl font-semibold text-[#13192e] mt-6 mb-2">
            Protection des données
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Vos données sont traitées conformément à la politique de confidentialité
            de Too Pilates®.
          </p>
        </div>
      </div>
    </section>
  );
}
