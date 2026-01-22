import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold">toopilates</p>
            <p className="mt-2 text-sm text-gray-600">
              Bougez mieux. Progressez à votre rythme.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
            <Link className="text-gray-700 hover:text-black" href="/about">
              À propos
            </Link>
            <Link className="text-gray-700 hover:text-black" href="/branches">
              Les branches
            </Link>
            <Link className="text-gray-700 hover:text-black" href="/coachs">
              Coachs officiels
            </Link>
            <Link className="text-gray-700 hover:text-black" href="/sponsors">
              Sponsors
            </Link>
            <Link className="text-gray-700 hover:text-black" href="/avis">
              Avis
            </Link>
            <Link className="text-gray-700 hover:text-black" href="/livre">
              Livre
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>© {year} toopilates. Tous droits réservés.</p>
          <p>
            <Link className="hover:text-black" href="/mentions-legales">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
