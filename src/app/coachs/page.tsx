import Image from "next/image";
import coachesData from "@/data/coaches.json";

type Coach = {
  id: string;
  name: string;
  lastname: string;
  phone: string;
};

const coaches: Coach[] = (coachesData as { coaches: Coach[] }).coaches;

export default function CoachesPage() {

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#F7F6F3] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#087389]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#033844]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(8,115,137,0.10),transparent_48%),radial-gradient(circle_at_70%_85%,rgba(3,56,68,0.08),transparent_54%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 mt-10 md:mt-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#13192e] md:text-5xl">
            Les coachs
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Découvrez notre équipe et leurs contacts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {coaches.map((coach, index) => (
            <article
              key={coach.id}
              className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src={index % 2 === 0 ? "/home/gallery1.jpeg" : "/home/gallery2.jpg"}
                  alt={`${coach.name} ${coach.lastname}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[#087389]">
                  Coach • Too Pilates®
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#13192e]">
                  {coach.name} {coach.lastname}
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>Téléphone : {coach.phone}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}