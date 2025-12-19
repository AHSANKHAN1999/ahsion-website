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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LEFT SIDE: LOGO --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="AHSION Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Text sirf Laptop (lg) par dikhega, Tablet/Mobile par hidden hai */}
              <span className="hidden lg:block font-semibold text-lg text-black leading-tight">
                Advanced Health Sciences <br /> 
                Institute of Nursing
              </span>
            </Link>
          </div>

          {/* --- MIDDLE: DESKTOP MENU (Links) --- */}
          {/* CHANGE: 'md:flex' ko 'lg:flex' kar diya taake Tablet par bhi hidden rahe */}
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
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
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

          {/* --- RIGHT SIDE: MOBILE/TABLET MENU BUTTON --- */}
          {/* CHANGE: 'md:hidden' ko 'lg:hidden' kar diya taake Tablet par bhi Button aye */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU LIST (Opens when button clicked) --- */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {siteData.navigation.map((item) => (
              <div key={item.label}> 
                {item.sub_navigation ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium flex justify-between items-center"
                  >
                    {item.label}
                    <span>{openDropdown === item.label ? '▲' : '▼'}</span> 
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Dropdown Items */}
                {item.sub_navigation && openDropdown === item.label && (
                  <div className="pl-6 pt-1 pb-1 border-l-2 border-gray-100 ml-3">
                    {item.sub_navigation.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.link}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4">
                <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-white text-center px-3 py-3 rounded-md text-base font-medium hover:bg-blue-800 shadow-sm"
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