"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { contact, navigation, quick_help_options, site } = siteData;

  return (
    <div className="font-sans">
      {/* --- TOP LEAD-CAPTURE BAR --- */}
      <div className="bg-[#1E3A8A] text-white py-2 px-4 sm:px-6 lg:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          {/* Contact Links */}
          <div className="flex items-center gap-4">
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Phone size={14} /> <span className="font-semibold">{contact.phone}</span>
            </a>
            <span className="text-blue-300 hidden sm:inline">|</span>
            <a href={`mailto:${contact.email}`} className="hidden sm:flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Mail size={14} /> <span>{contact.email}</span>
            </a>
          </div>

          {/* Quick Help Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-blue-200">I need help with...</span>
            <div className="relative group">
               <button className="flex items-center gap-1 bg-[#2a4a9c] hover:bg-[#D4AF37] hover:text-[#1E3A8A] px-3 py-1 rounded transition-colors font-medium">
                  Select <ChevronDown size={14} />
               </button>
               {/* Dropdown Menu */}
               <div className="absolute right-0 top-full mt-1 w-48 bg-white text-gray-800 shadow-xl rounded overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {quick_help_options.map((option) => (
                      <a key={option.value} href="/contact" className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-50 last:border-0">
                          {option.label}
                      </a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-white shadow-md sticky top-0 z-40 border-b-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* --- LOGO SECTION --- */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col group">
                  <span className="font-extrabold text-2xl text-[#1E3A8A] leading-tight uppercase tracking-tight group-hover:text-blue-700 transition">
                    Carevia
                  </span>
                  <span className="font-semibold text-sm text-gray-600 group-hover:text-[#D4AF37] transition tracking-widest">
                    HOME NURSING
                  </span>
              </Link>
            </div>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden lg:flex items-center h-full gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="text-gray-800 hover:text-[#1E3A8A] font-bold text-sm uppercase tracking-wide transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* "Call Now" CTA Button */}
              <a
                href={`tel:${contact.phone}`}
                className="bg-[#D4AF37] text-[#1E3A8A] px-6 py-3 rounded-full text-sm font-extrabold uppercase tracking-wider hover:bg-[#c29e2f] transition-all duration-300 shadow-md flex items-center gap-2 ml-4 animate-pulse"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* --- MOBILE HAMBURGER BUTTON --- */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#1E3A8A] hover:text-[#D4AF37] focus:outline-none p-2 transition">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-2xl border-t border-gray-100 absolute top-24 left-0 w-full z-40 h-auto pb-6">
            <div className="px-4 pt-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0 pb-1">
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-800 hover:text-[#1E3A8A] hover:bg-blue-50 px-2 py-4 rounded-md text-base font-bold"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className="pt-4">
                  <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1E3A8A] px-4 py-4 rounded-lg text-sm font-extrabold uppercase tracking-wider shadow-md"
                  >
                  <Phone size={18}/> Call Now ({contact.phone})
                  </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}