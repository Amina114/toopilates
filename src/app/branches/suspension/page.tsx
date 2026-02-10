import Link from "next/link";

export default function SuspensionPage() {
  return (
    <section className="min-h-[80vh] bg-[#F7F6F3]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Pilates en Suspension</h1>
        <p className="text-gray-600 mb-6">
          La légèreté au service du contrôle.
        </p>
        <img src="/branches/suspension.jpg" alt="Pilates en Suspension" className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 leading-relaxed">
          L’utilisation de sangles de suspension permet de travailler en décharge partielle du poids du corps, tout en sollicitant fortement la stabilité et le gainage.
        </p>

        <div className="mt-8">
          <Link href="/branches" className="text-blue-600 underline">Retour aux branches</Link>
        </div>
      </div>
    </section>
  );
}