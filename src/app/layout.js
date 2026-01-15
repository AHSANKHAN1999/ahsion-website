import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

// Sirf simple Inter font (Academic Look)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 1. Page Title
  title: {
    default: "Advanced Health Sciences Institute of Nursing | Karachi",
    template: "%s | AHSION"
  },

  // 2. Description (Google Search ke neeche ye nazar ayega)
  description: "Admissions Open at AHSION Karachi. Programs: Generic BS Nursing, Post RN, CNA, CMW, ICU & EDM. Affiliated with Dow University (DUHS) & PNMC.",

  // 3. Super Keywords List
  keywords: [
    // --- Institute Names ---
    "Advanced Health Sciences Institute of Nursing",
    "AHSION",
    "AHS Institute",
    "Nursing Institute in Karachi",
    "Nursing College Baldia Town",

    // --- Degree Programs ---
    "BS Nursing Generic",
    "Post RN BSN",
    "Certified Nursing Assistant",
    "Community Midwifery",
    
    // --- Short Forms (Jo log jaldi mein likhte hain) ---
    "BSN Admission 2026",
    "CNA Course",
    "CMW Diploma",
    "Post RN",
    
    // --- Specialization (Diplomas) ---
    "ICU Nursing Diploma",
    "Emergency Disaster Management",
    "EDM Course",
    "ICU Technician",

    // --- Authority & Location ---
    "Dow University Affiliated College",
    "PNMC Recognized Nursing Institute",
    "Saeedabad Nursing College",
    "Best Nursing College in Karachi"
  ],

  // 4. Social Media Sharing
  openGraph: {
    title: "Advanced Health Sciences Institute of Nursing",
    description: "Join AHSION for BS Nursing, CNA, CMW & Specialization Programs.",
    type: "website",
    locale: "en_PK",
    url: "https://ahsion.edu.pk",
    siteName: "AHSION",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}