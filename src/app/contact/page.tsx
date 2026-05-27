import Link from "next/link";

export const metadata = {
  title: "Contact — Amina Chabchoub",
  description: "Contact : Amina Chabchoub — WhatsApp & LinkedIn",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-[#13192e]">
      <h1 className="text-4xl font-semibold">Contact — Amina Chabchoub</h1>

      <div className="mt-8 space-y-6 text-lg">
        <p className="text-xl font-medium">Amina Chabchoub</p>

        <p>
          WhatsApp: <a href="https://wa.me/21628582502" className="underline text-[#087389]">+216 28582502</a>
        </p>

        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/amina-chabchoub/" target="_blank" rel="noreferrer" className="underline text-[#087389]">https://www.linkedin.com/in/amina-chabchoub/</a>
        </p>

        <p className="text-sm text-gray-600">Pour toute demande, veuillez contacter Amina via WhatsApp ou LinkedIn.</p>

        <p>
          <Link href="/" className="text-sm text-[#075f7f] underline">Retour à l’accueil</Link>
        </p>
      </div>
    </main>
  );
}
