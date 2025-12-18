import Link from "next/link";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  const contact = siteData.pages.contact.sections.find(
    (s) => s.type === "contact_info"
  );

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {siteData.site.short_name}
            </h3>
            <p className="text-gray-300 mb-4">{siteData.site.tagline}</p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {siteData.site.name}. All rights
              reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{contact?.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`tel:${contact?.phone}`}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {contact?.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${contact?.email}`}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {contact?.email}
                </a>
              </div>
              {contact?.facebook && (
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 flex-shrink-0" />
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Facebook Page
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
