import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-black">
        <Header />

        {/* ✅ full width, pas de max-width global */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}