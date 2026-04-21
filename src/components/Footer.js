import Link from "next/link";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const { site, contact, navigation } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-8 border-t-4 border-[#D4AF37] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-white leading-tight uppercase tracking-tight">
                Carevia
              </span>
              <span className="font-semibold text-sm text-[#D4AF37] tracking-widest">
                HOME NURSING
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed border-l-2 border-[#D4AF37] pl-3">
              {site.tagline}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition duration-300"><Facebook size={18} /></a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition duration-300"><Instagram size={18} /></a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#1E3A8A] transition duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.link} className="text-blue-100 hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 inline-block text-sm">
                    › {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-[#D4AF37]">Our Services</h4>
            <ul className="space-y-3 text-sm text-blue-100">
                <li className="hover:text-white transition cursor-pointer">› Pediatric ICU</li>
                <li className="hover:text-white transition cursor-pointer">› Ventilator & BiPAP Support</li>
                <li className="hover:text-white transition cursor-pointer">› COPD & Infectious Cases</li>
                <li className="hover:text-white transition cursor-pointer">› Bedridden & Pressure Care</li>
                <li className="hover:text-white transition cursor-pointer">› CP (Child Care)</li>
                <li className="hover:text-white transition cursor-pointer">› On-Spot Services</li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block text-[#D4AF37]">Contact Us</h4>
            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 group-hover:scale-110 transition shrink-0" />
                <span className="leading-relaxed">{contact.address}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition">{contact.phone}</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition break-all">{contact.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8 flex justify-center items-center text-xs md:text-sm text-blue-300">
          <p className="text-center">© {currentYear} {site.name}. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}