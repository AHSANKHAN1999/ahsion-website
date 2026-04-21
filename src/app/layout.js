import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Carevia Home Nursing & Medical Health Services",
    template: "%s | Carevia"
  },
  description: "Bringing Hospital-Level Care & Supplies to Your Home with Excellence & Compassion. Expert ICU-level care safely at home managed by certified BSN Staff and Registered Nurses (RNs).",
  keywords: [
    "Home Nursing",
    "Medical Health Services",
    "ICU Care at Home",
    "Pediatric ICU",
    "Ventilator Support",
    "Elder Care",
    "Karachi Nursing Services",
    "Home Care Dubai",
    "Registered Nurses"
  ],
  openGraph: {
    title: "Carevia Home Nursing & Medical Health Services",
    description: "Bringing Hospital-Level Care & Supplies to Your Home with Excellence & Compassion.",
    type: "website",
    locale: "en_PK",
    url: "https://www.careviahomenursing.com",
    siteName: "Carevia",
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