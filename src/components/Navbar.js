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
        <div className="flex justify-between h-20">
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
              <span className="font-semibold text-sm text-black md:block">
  Advanced Health Sciences <br /> 
  Institute of Nursing
</span>
            </Link>
          </div>

          {siteData.navigation.map((item) => (
  <div 
    key={item.label} 
    className="relative h-full" 
    onMouseEnter={() => item.sub_navigation && setIsAboutHovered(true)} 
    onMouseLeave={() => item.sub_navigation && setIsAboutHovered(false)} 
  >
    {/* Yeh Main Link Hai (Jaise About Us) */}
    <Link
      href={item.link}
      className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors block h-full flex items-center"
    >
      {item.label}
    </Link>

    {/* Yeh Dropdown Menu Hai Jo Mouse Over Par Dikhega */}
    {item.sub_navigation && isAboutHovered && (
      <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      
      {siteData.navigation.map((item) => (
        <div key={item.label}> 
          {/* A. Agar Sub-Navigation hai, toh Button Banayen */}
          {item.sub_navigation ? (
            <button
              onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} // Click par kholo/band karo
              className="w-full text-left text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
            >
              {item.label}
              {/* Dropdown Icon */}
              <span>{openDropdown === item.label ? '▲' : '▼'}</span> 
            </button>
          ) : (
            /* B. Agar Sub-Navigation nahi hai, toh Seedha Link Banayen */
            <Link
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.label}
            </Link>
          )}

          {/* C. Sub-Links ko Display Karein agar Khula Ho */}
          {item.sub_navigation && openDropdown === item.label && (
            <div className="pl-6 pt-1 pb-1 border-l ml-3 border-gray-200">
              {item.sub_navigation.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.link}
                  onClick={() => setIsOpen(false)} // Link click hone par pura mobile menu band ho
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {/* Apply Now button yahan hoga (mobile menu ke andar) */}
      <Link
        href="/admissions"
        onClick={() => setIsOpen(false)}
        className="block bg-primary text-white text-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
      >
        Apply Now
      </Link>
    </div>
  </div>
)}
    </nav>
  );
}
