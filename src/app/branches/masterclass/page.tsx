import Link from "next/link";

export default function MasterclassPage() {
  return (
    <section className="min-h-[80vh] bg-[#F7F6F3]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Masterclass Too Pilates®</h1>
        <p className="text-gray-600 mb-6">L’exigence dans l’immersion.</p>
        <img src="/branches/masterclass.jpg" alt="Masterclass Too Pilates®" className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 leading-relaxed">
          Les Masterclass sont des sessions longues et immersives, conçues pour explorer la méthode Too Pilates® en profondeur.
        </p>

        <div className="mt-8">
          <Link href="/branches" className="text-blue-600 underline">Retour aux branches</Link>
        </div>
      </div>
    </section>
  );
}