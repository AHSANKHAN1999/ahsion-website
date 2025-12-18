"use client";
import { useState, useRef } from "react"; // useRef add kiya hai
import emailjs from "@emailjs/browser";   // EmailJS import kiya
import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function Admissions() {
  const { sections } = siteData.pages.admissions;
  const banner = sections.find((s) => s.type === "banner");
  const details = sections.find((s) => s.type === "admission_details");
  const formConfig = sections.find((s) => s.type === "form");

  const formRef = useRef(); // Form ka reference
  const [loading, setLoading] = useState(false); // Loading state add ki
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 👇 YAHAN APNI KEYS REPLACE KAREIN
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
          e.target.reset(); // Form clear karega
          setFormData({});  // State clear karega
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <PageHeader title={banner.title} subtitle={banner.subtitle} />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Admission Process</h2>
            <div className="space-y-8">
              {details.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-gray-700 font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Need Help?</h3>
                <p className="text-gray-600">Contact our admission office for guidance on the application process.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" id="apply">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Application</h2>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-6 text-center border border-green-200">
                <h3 className="font-bold text-xl mb-2">Application Received!</h3>
                <p>Thank you for applying. Our admission team will review your details and contact you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm underline text-green-700 hover:text-green-900"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              // 🚨 formRef yahan lagaya hai
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {formConfig.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select an option</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        rows={4}
                        required={field.name !== 'message'}
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
                  disabled={loading} // Loading ke waqt button disable
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    formConfig.submit_text
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}