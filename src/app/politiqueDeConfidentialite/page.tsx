export default function PrivacyPolicyPage() {
  return (
    <section className="relative pb-20">
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
              Politique de confidentialité • Too Pilates®
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#13192e]">
            Politique de confidentialité
          </h1>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Ce document explique la manière dont Too Pilates® traite et protège
            vos informations personnelles.
          </p>
        </div>

        <article className="rounded-3xl border border-black/10 bg-white/75 shadow-xl backdrop-blur p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="w-16 h-1 bg-[#087389] rounded-full mb-6" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#13192e] mb-2">Données collectées</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous collectons les données que vous fournissez volontairement :
              nom, prénom, email, téléphone, et toute information liée à vos demandes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#13192e] mb-2">Utilisation des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Vos données servent à répondre à vos demandes, à améliorer nos services
              et à fournir un support personnalisé.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#13192e] mb-2">Vos droits</h2>
            <p className="text-gray-600 leading-relaxed">
              Vous avez un droit d’accès, de rectification et de suppression de vos données.
              Pour exercer ces droits, contactez-nous à
              <strong> hedyammar111@gmail.com </strong>.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            Dernière mise à jour : XX/XX/2026
          </p>
        </article>
      </div>
    </section>
  );
}
