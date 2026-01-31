import Link from "next/link";

export default function BranchesPage() {
  return (
    <section className="min-h-[80vh] bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Les Branches Officielles TOO Pilates®
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            TOO Pilates se décline en plusieurs branches complémentaires,
            chacune pensée pour explorer le mouvement sous un angle spécifique,
            dans le respect de la logique physionomie.
          </p>
        </div>

        <div className="grid gap-8">
          <BranchCard
            slug="suspension"
            title="Pilates en Suspension"
            subtitle="La légèreté au service du contrôle"
            image="/branches/suspension.jpg"
            definition="L’utilisation de sangles de suspension permet de travailler en décharge partielle du poids du corps, tout en sollicitant fortement la stabilité et le gainage."
          />

          <BranchCard
            slug="bands"
            title="Bands Pilates"
            subtitle="Résistance ciblée et mobilité renforcée"
            image="/branches/bands.jpg"
            definition="Les bandes élastiques introduisent une résistance progressive permettant d’intensifier le travail musculaire tout en respectant les articulations."
          />

          <BranchCard
            slug="stick"
            title="Stick Pilates"
            subtitle="L’alignement et la structure révélés"
            image="/branches/stick.jpg"
            definition="Le bâton permet de guider les alignements, de sécuriser les appuis et d’offrir des variantes éducatives aux exercices classiques."
          />

          <BranchCard
            slug="masterclass"
            title="Masterclass TOO Pilates"
            subtitle="L’exigence dans l’immersion"
            image="/branches/masterclass.jpg"
            definition="Les Masterclass sont des sessions longues et immersives, conçues pour explorer la méthode TOO Pilates en profondeur."
          />

          <BranchCard
            slug="reformer"
            title="Reformer TOO Pilates"
            subtitle="L’appareil emblématique revisité"
            image="/branches/reformer.jpg"
            definition="Le Reformer permet un travail global en résistance, en mobilité et en contrôle grâce à des ressorts réglables."
          />
        </div>
      </div>
    </section>
  );
}

/* COMPONENT */
function BranchCard({
  slug,
  title,
  subtitle,
  image,
  definition,
}: {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  definition: string;
}) {
  return (
    <Link href={`/branches/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
        <img src={image} alt={title} className="h-56 w-full object-cover" />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-500 italic">{subtitle}</p>
          <p className="text-gray-700 leading-relaxed">{definition}</p>
        </div>
      </div>
    </Link>
  );
}