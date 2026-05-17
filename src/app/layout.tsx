import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} site-bg`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
<style>{`
  @keyframes partners {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  @keyframes galleryScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
`}</style>