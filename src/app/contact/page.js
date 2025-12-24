"use client";

import { useState } from "react";
import { siteData } from "@/data/page";
import Section from "@/components/Section";
import { MapPin, Phone, Mail, Facebook, Send, Clock, Globe } from "lucide-react";

export default function Contact() {
  const { sections } = siteData.pages.contact;
  const info = sections.find((s) => s.type === "contact_info");
  const formConfig = sections.find((s) => s.type === "contact_form");

  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation
    setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({});
        e.target.reset();
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We are here to answer any questions you may have about our programs, admissions, or campus life.
          </p>
        </div>
      </div>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- LEFT SIDE: CONTACT INFO CARDS --- */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">
              Contact Information
            </h2>

            {/* Address Card */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-900 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Visit Campus</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{info.address}</p>
                </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-900 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Call Us</h3>
                    <a href={`tel:${info.phone}`} className="text-gray-600 hover:text-blue-900 font-medium transition-colors">
                        {info.phone}
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Mon - Sat (9:00 AM - 5:00 PM)</p>
                </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-900 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Email Us</h3>
                    <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-blue-900 font-medium transition-colors">
                        {info.email}
                    </a>
                </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex gap-4">
                {info.facebook && (
                    <a href={info.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-md">
                        <Facebook size={20} /> Facebook Page
                    </a>
                )}
            </div>

            {/* Embedded Map */}
            {info.map_embed ? (
              <div className="mt-8 h-64 w-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
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
            ) : null}

          </div>

          {/* --- RIGHT SIDE: CONTACT FORM --- */}
          <div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-yellow-400 relative">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and we will respond as soon as possible.</p>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200 animate-fadeIn">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                    <p>Thank you for contacting us. We will get back to you shortly.</p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-bold text-green-700 underline hover:text-green-900"
                    >
                        Send another message
                    </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formConfig.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          rows={4}
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder={`Enter your ${field.label.toLowerCase()}...`}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder={`Enter your ${field.label.toLowerCase()}...`}
                        />
                      )}
                    </div>
                  ))}
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-lg mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                         <>
                           <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                           Sending...
                         </>
                      ) : (
                         <>
                           Send Message <Send size={20} />
                         </>
                      )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}