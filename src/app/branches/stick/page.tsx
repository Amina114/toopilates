import Link from "next/link";

export default function StickPage() {
  return (
    <section className="min-h-[80vh] bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Stick Pilates</h1>
        <p className="text-gray-600 mb-6">L’alignement et la structure révélés.</p>
        <img src="/branches/stick.jpg" alt="Stick Pilates" className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 leading-relaxed">
          Le bâton permet de guider les alignements, de sécuriser les appuis et d’offrir des variantes éducatives aux exercices classiques.
        </p>

        <div className="mt-8">
          <Link href="/branches" className="text-blue-600 underline">Retour aux branches</Link>
        </div>
      </div>
    </section>
  );
}