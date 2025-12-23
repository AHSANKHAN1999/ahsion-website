import { Inter, Playfair_Display, Great_Vibes } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

// --- FONTS CONFIGURATION ---
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair' 
});

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
      {/* Yahan fonts variables add kiye hain taake puri website par chal sakein */}
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} flex flex-col min-h-screen overflow-x-hidden font-sans`}>
        
        {/* Agar aap chahte hain ke Homepage par double Navbar na aye, 
            to aap is <Navbar /> ko hata sakte hain, lekin baqi pages ke liye ye zaroori hai. 
            Filhal isay aise hi rehne dein. */}
        <Navbar />
        
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}