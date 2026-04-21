export const siteData = {
  site: {
    name: "Carevia Home Nursing & Medical Health Services",
    short_name: "Carevia",
    tagline: "Bringing Hospital-Level Care & Supplies to Your Home with Excellence & Compassion.",
    theme_color: "#1E3A8A", // Deep navy blue
    accent_color: "#D4AF37", // Premium gold
  },

  contact: {
    phone: "+92 302 2096374",
    email: "careviahomenursing@gmail.com",
    address: "Karachi, Pakistan (Serving Globally from Dubai)",
    website: "www.careviahomenursing.com",
  },

  navigation: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ],

  quick_help_options: [
    { label: "Pediatric ICU", value: "pediatric-icu" },
    { label: "Ventilator Support", value: "ventilator-support" },
    { label: "Elder Care", value: "elder-care" },
    { label: "Post-Op Recovery", value: "post-op" },
    { label: "General Inquiry", value: "general" },
  ],

  pages: {
    home: {
      hero: {
        title: "Bringing Hospital-Level Care to Your Home",
        subtitle: "Expert ICU-level care and medical health services managed by certified BSN and RN staff.",
        images: [
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Medical professional
          "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Caring at home
        ]
      },
      hero_actions: [
        { label: "Our ICU Services", link: "/services", icon: "activity" },
        { label: "Request Consultation", link: "/contact", icon: "calendar" },
        { label: "Global & Local Care", link: "/about", icon: "globe" },
        { label: "Certified Nursing Staff", link: "/about", icon: "shield" },
      ],
      trust_stats: [
        { stat: "100%", label: "Certified BSN/RN Staff" },
        { stat: "24/7", label: "On-Spot Services" },
        { stat: "ICU", label: "Hospital-Level Care at Home" },
        { stat: "Global", label: "Managed in Dubai, Served in Karachi" },
      ],
      services: [
        {
          title: "Pediatric ICU",
          description: "Specialized intensive care for children in the comfort and safety of their own home.",
          icon: "baby",
        },
        {
          title: "Ventilator & BiPAP Support",
          description: "Expert respiratory care and monitoring by trained professionals.",
          icon: "wind",
        },
        {
          title: "COPD & Infectious Cases",
          description: "Dedicated management of chronic respiratory diseases and infectious cases.",
          icon: "lungs",
        },
        {
          title: "Bedridden & Pressure Care",
          description: "Comprehensive care focusing on comfort, hygiene, and prevention of pressure ulcers.",
          icon: "bed",
        },
        {
          title: "CP (Child Care)",
          description: "Compassionate and professional care for children with Cerebral Palsy.",
          icon: "child",
        },
        {
          title: "On-Spot Services",
          description: "Immediate, on-demand nursing and medical assistance whenever you need it.",
          icon: "zap",
        },
      ]
    },
    about: {
        mission: "Our care is exclusively managed and provided by certified BSN Staff and Registered Nurses (RNs) ensuring hospital-standard safety.",
        leadership: [
            {
                name: "Gulzar Ali",
                role: "Founder & Chief Inspiring Officer"
            },
            {
                name: "Sumair Sohail",
                role: "Operations Manager, specializing in global service solutions"
            }
        ]
    }
  },
};