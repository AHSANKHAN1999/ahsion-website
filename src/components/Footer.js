import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const contact = siteData.pages.contact.sections.find(
    (s) => s.type === "contact_info"
  );
  
  const currentYear = new Date().getFullYear();
  // Filter: 'Online Apply' ko nikal rahe hain
  const navItems = siteData.navigation.filter(item => item.label !== "Online Apply");

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 border-t-4 border-yellow-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white rounded-full p-1 overflow-hidden shrink-0">
                <Image src="/images/logo.jpg" alt="AHSION Logo" fill className="object-contain"/>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">{siteData.site.name}</span>
                <span className="text-xs text-blue-200 mt-1">{siteData.site.short_name}</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed border-l-2 border-yellow-400 pl-3">
              {siteData.site.tagline || "Committed to excellence in nursing education and clinical practice."}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href={contact?.facebook || "#"} target="_blank" className="bg-blue-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition duration-300"><Facebook size={18} /></a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition duration-300"><Instagram size={18} /></a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* 2. Quick Links (Filtered) */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.link} className="text-blue-100 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm">
                    › {item.label}
                  </Link>
                </li>
              ))}
              <li>
                 <Link href="/admissions" className="text-white font-semibold hover:text-yellow-400 transition-colors text-sm flex items-center gap-1">
                   › Apply Online <span className="text-yellow-400 text-xs animate-pulse">New</span>
                 </Link>
              </li>
            </ul>
          </div>

          {/* 3. Our Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-yellow-400">Our Programs</h4>
            <ul className="space-y-3 text-sm text-blue-100">
                <li className="hover:text-white transition cursor-pointer">› Generic BSN (4 Years)</li>
                <li className="hover:text-white transition cursor-pointer">› Post RN (2 Years)</li>
                <li className="hover:text-white transition cursor-pointer">› CNA (2 Years)</li>
                <li className="hover:text-white transition cursor-pointer">› CMW (18 Months)</li>
                <li className="hover:text-white transition cursor-pointer">› D.I.C.U (1 Year)</li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-yellow-400">Contact Us</h4>
            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 group-hover:scale-110 transition" />
                <span className="leading-relaxed">{contact?.address || "Sector 5-B, Plot # 106-108, Main Hub River Road, Karachi."}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition" />
                <a href={`tel:${contact?.phone}`} className="hover:text-white transition">{contact?.phone || "+92 21 32814455"}</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition" />
                <a href={`mailto:${contact?.email}`} className="hover:text-white transition">{contact?.email || "ahsion.edu.pk@gmail.com"}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8 flex justify-center items-center text-xs md:text-sm text-blue-300">
          <p className="text-center">© {currentYear} {siteData.site.name}. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}