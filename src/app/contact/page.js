"use client";
import { useState } from "react";
import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Contact() {
  const { sections } = siteData.pages.contact;
  const info = sections.find((s) => s.type === "contact_info");
  const formConfig = sections.find((s) => s.type === "contact_form");

  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 leading-relaxed">{info.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href={`tel:${info.phone}`} className="text-gray-600 hover:text-primary transition-colors">{info.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-primary transition-colors">{info.email}</a>
                </div>
              </div>
            </div>
                {info.facebook && (
                <div className="flex items-start gap-4 mt-6">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                      <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                      <a 
                        href={info.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        Facebook Page
                      </a>
                  </div>
                </div>
              )}
            {/* Google Map Placeholder */}
            {/* Google Map Integration */}
            {info.map_embed ? (
              <div className="mt-12 h-80 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src={info.map_embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ) : (
              <div className="mt-12 h-64 bg-gray-200 rounded-xl w-full flex items-center justify-center text-gray-500">
                Map location not available
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 text-center">
                Message sent successfully! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formConfig.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        rows={4}
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                >
                  {formConfig.submit_text}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
