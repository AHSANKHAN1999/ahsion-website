import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteData.site.name,
  description: siteData.site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ye wapis agaya, ab har page par Navbar khud ayega */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}