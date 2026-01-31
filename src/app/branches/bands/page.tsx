import Link from "next/link";

export default function BandsPage() {
  return (
    <section className="min-h-[80vh] bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Bands Pilates</h1>
        <p className="text-gray-600 mb-6">Résistance ciblée et mobilité renforcée.</p>
        <img src="/branches/bands.jpg" alt="Bands Pilates" className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 leading-relaxed">
          Les bandes élastiques introduisent une résistance progressive permettant d’intensifier le travail musculaire tout en respectant les articulations.
        </p>

        <div className="mt-8">
          <Link href="/branches" className="text-blue-600 underline">Retour aux branches</Link>
        </div>
      </div>
    </section>
  );
}