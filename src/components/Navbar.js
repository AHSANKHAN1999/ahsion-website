"use client";
import { useState } from "react";
import Link from "next/link";
import { siteData } from "@/data/page";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Filter: 'Online Apply' ko list se nikal rahe hain taake double na ho
  const navItems = siteData.navigation.filter(item => item.label !== "Online Apply");

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image src="/images/logo.jpg" alt="AHSION Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="hidden lg:block font-bold text-lg text-blue-900 leading-tight uppercase tracking-tight group-hover:text-blue-700 transition">
                  Advanced Health Sciences <br /> 
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-yellow-600 transition">Institute of Nursing</span>
                </span>
                <span className="block lg:hidden font-bold text-sm text-blue-900 leading-tight max-w-[200px]">
                  AHS Institute of Nursing
                </span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center h-full gap-6">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative h-full flex items-center" 
                onMouseEnter={() => item.sub_navigation && setIsAboutHovered(true)} 
                onMouseLeave={() => item.sub_navigation && setIsAboutHovered(false)} 
              >
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-blue-900 font-bold text-sm uppercase tracking-wide transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {item.sub_navigation && isAboutHovered && (
                  <div className="absolute top-full left-0 mt-0 w-56 rounded-b-lg shadow-xl bg-white border-t-2 border-yellow-400 animate-fadeIn">
                    <div className="py-2">
                      {item.sub_navigation.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.link}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-b border-gray-50 last:border-0"
                          onClick={() => setIsAboutHovered(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* BUTTON: Ye ab akela nazar ayega (Duplicate nahi hoga) */}
            <Link
                href="/admissions"
                className="bg-blue-900 text-white px-6 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
                Apply Now
            </Link>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 hover:text-yellow-600 focus:outline-none p-2 transition">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-2xl border-t border-gray-100 absolute top-20 left-0 w-full z-40 h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0 pb-1"> 
                {item.sub_navigation ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full text-left text-gray-800 hover:text-blue-900 px-2 py-4 rounded-md text-base font-bold flex justify-between items-center"
                  >
                    {item.label}
                    <span className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}>▼</span> 
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-800 hover:text-blue-900 hover:bg-blue-50 px-2 py-4 rounded-md text-base font-bold"
                  >
                    {item.label}
                  </Link>
                )}

                {item.sub_navigation && openDropdown === item.label && (
                  <div className="pl-4 pt-1 pb-2 bg-gray-50 rounded-lg mb-2">
                    {item.sub_navigation.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.link}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-2 text-sm text-gray-600 hover:text-blue-900 font-medium"
                      >
                        › {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 pb-4">
                <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-blue-900 text-white text-center px-4 py-4 rounded-lg text-lg font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md"
                >
                Apply Online
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}