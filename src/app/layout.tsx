import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-black">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
