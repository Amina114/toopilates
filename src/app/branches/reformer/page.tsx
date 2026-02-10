import Link from "next/link";

export default function ReformerPage() {
  return (
    <section className="min-h-[80vh] bg-[#F7F6F3]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Reformer TOO Pilates</h1>
        <p className="text-gray-600 mb-6">L’appareil emblématique revisité.</p>
        <img src="/branches/reformer.jpg" alt="Reformer TOO Pilates" className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 leading-relaxed">
          Le Reformer permet un travail global en résistance, en mobilité et en contrôle grâce à des ressorts réglables.
        </p>

        <div className="mt-8">
          <Link href="/branches" className="text-blue-600 underline">Retour aux branches</Link>
        </div>
      </div>
    </section>
  );
}