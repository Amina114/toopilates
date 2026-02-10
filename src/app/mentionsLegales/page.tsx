export default function CoachesPage() {
  return (
    <section className="min-h-[80vh] bg-[#F7F6F3] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Mentions légales
          </h1>

          <div className="w-16 h-1 bg-primary rounded-full mb-6" />

          <p className="text-gray-600 leading-relaxed">
            La méthode <span className="font-semibold text-gray-800">Too Pilates®</span>,
            son contenu pédagogique, ses formations, sa terminologie et ses supports
            sont protégés par le droit d’auteur et le droit des marques.
          </p>
        </div>
      </div>
    </section>
  );
}
