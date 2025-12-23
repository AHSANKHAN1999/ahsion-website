"use client";
import { useState } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- 1. LEFT SIDE: LOGO & NAME --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="AHSION Logo"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* --- NAME LOGIC CHANGED HERE --- */}
              <div className="flex flex-col">
                {/* Desktop Name (Full) - Sirf Laptop par dikhega */}
                <span className="hidden lg:block font-bold text-lg text-blue-900 leading-tight">
                  Advanced Health Sciences <br /> 
                  Institute of Nursing
                </span>

                {/* Mobile Name (Short) - Sirf Mobile par dikhega */}
                <span className="block lg:hidden font-bold text-sm text-blue-900 leading-tight max-w-[200px]">
                  AHS Institute of Nursing
                </span>
              </div>

            </Link>
          </div>

          {/* --- 2. MIDDLE: DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center h-full gap-4">
            {siteData.navigation.map((item) => (
              <div 
                key={item.label} 
                className="relative h-full flex items-center" 
                onMouseEnter={() => item.sub_navigation && setIsAboutHovered(true)} 
                onMouseLeave={() => item.sub_navigation && setIsAboutHovered(false)} 
              >
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>

                {/* Desktop Dropdown */}
                {item.sub_navigation && isAboutHovered && (
                  <div className="absolute top-full left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {item.sub_navigation.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
          </div>

          {/* --- 3. RIGHT SIDE: MOBILE MENU BUTTON --- */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-blue-700 focus:outline-none p-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- 4. MOBILE MENU LIST --- */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t absolute top-20 left-0 w-full z-40">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
            {siteData.navigation.map((item) => (
              <div key={item.label}> 
                {item.sub_navigation ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full text-left text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium flex justify-between items-center"
                  >
                    {item.label}
                    <span>{openDropdown === item.label ? '▲' : '▼'}</span> 
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Dropdown Items */}
                {item.sub_navigation && openDropdown === item.label && (
                  <div className="pl-6 pt-1 pb-1 border-l-2 border-gray-100 ml-3 bg-gray-50">
                    {item.sub_navigation.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.link}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-900"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 pb-2">
                <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block bg-blue-900 text-white text-center px-3 py-3 rounded-md text-base font-bold hover:bg-blue-800 shadow-sm"
                >
                Apply Now
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}