import { Inter, Playfair_Display, Great_Vibes } from "next/font/google"; // 1. Yahan naye fonts mangwaye
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

// 2. "Wedding" jaisa Font
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair' 
});

// 3. "Stylish" Cursive Font
const greatVibes = Great_Vibes({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-great-vibes' 
});

export const metadata = {
  title: siteData.site.name,
  description: siteData.site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 4. Yahan body mein fonts inject kiye */}
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}