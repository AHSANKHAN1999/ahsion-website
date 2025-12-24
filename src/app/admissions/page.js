"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Section from "@/components/Section";
import { FileText, Upload, UserCheck, CheckCircle, Send, PhoneCall } from "lucide-react";

export default function Admissions() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // --- ADMISSION STEPS DATA (Visual Only) ---
  const steps = [
    { 
      id: 1, 
      title: "Fill Application", 
      desc: "Complete the online application form with accurate details.", 
      icon: <FileText size={24} /> 
    },
    { 
      id: 2, 
      title: "Submit Documents", 
      desc: "Visit campus to submit your academic copies and CNIC/B-Form.", 
      icon: <Upload size={24} /> 
    },
    { 
      id: 3, 
      title: "Interview / Test", 
      desc: "Appear for a short interview or entry test if required.", 
      icon: <UserCheck size={24} /> 
    },
    { 
      id: 4, 
      title: "Confirmation", 
      desc: "Receive your admission confirmation letter and pay fees.", 
      icon: <CheckCircle size={24} /> 
    },
  ];

  // --- EMAIL JS HANDLER ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Aapki IDs
    const SERVICE_ID = "service_bms581r";
    const TEMPLATE_ID = "template_citu9zc";
    const PUBLIC_KEY = "c827R_Jt2qpI19ymD";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitted(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
            Your Future Starts Here
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Admissions Open 2025
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join AHSION and start your journey towards a noble career in Nursing and Healthcare.
          </p>
        </div>
      </div>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- LEFT SIDE: PROCESS TIMELINE --- */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">
              Admission Process
            </h2>
            
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-blue-100 hidden sm:block"></div>

              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6 group">
                  {/* Step Bubble */}
                  <div className="relative z-10 w-12 h-12 bg-white border-2 border-blue-900 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-blue-900 transition-all duration-300 flex-shrink-0">
                    {step.icon}
                  </div>
                  
                  {/* Text Card */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                       <span className="text-blue-900">0{step.id}.</span> {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Box */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">
                    <PhoneCall size={24} />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-blue-900">Need Help?</h4>
                    <p className="text-gray-600 text-sm mb-2">
                        Contact our admission office for guidance.
                    </p>
                    <p className="font-bold text-blue-900">+92 314 2278735</p>
                </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM (With EmailJS Logic) --- */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-yellow-400">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Online Application</h3>
                <p className="text-gray-500 text-sm mb-8">Please fill in the details below carefully.</p>

                {submitted ? (
                  // --- SUCCESS MESSAGE ---
                  <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200 animate-fadeIn">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl mb-2">Application Received!</h3>
                    <p className="mb-6">Thank you for applying. Our admission team will contact you soon.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-bold underline text-green-700 hover:text-green-900"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  // --- FORM ---
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        name="user_name" // EmailJS Variable Name
                        placeholder="e.g. Ahsan Khan"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        name="user_email" // EmailJS Variable Name
                        placeholder="email@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="contact_number" // EmailJS Variable Name
                        placeholder="0300-1234567"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>

                    {/* Program Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Interested Program</label>
                      <select 
                        name="program" // EmailJS Variable Name
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white cursor-pointer"
                      >
                        <option value="">Select a Program</option>
                        <option value="BS Nursing">BS Nursing (Generic) - 4 Years</option>
                        <option value="Post RN">Post RN BSN - 2 Years</option>
                        <option value="CNA">Certified Nursing Assistant (CNA)</option>
                        <option value="CMW">Community Midwifery (CMW)</option>
                        <option value="ICU Tech">ICU / Anesthesia Technician</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
                      <textarea 
                        name="message" // EmailJS Variable Name
                        rows="3"
                        placeholder="Any specific questions?"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-gray-50 focus:bg-white"
                      ></textarea>
                    </div>

                    {/* Submit Button with Loading State */}
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
                           Submit Application <Send size={20} />
                         </>
                      )}
                    </button>

                  </form>
                )}
              </div>
              
              {/* Form Footer */}
              <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
                <p className="text-xs text-gray-500">
                    By submitting, you agree to be contacted by AHSION admissions office.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}