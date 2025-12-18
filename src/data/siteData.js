export const siteData = {
  site: {
    name: "Advanced Health Sciences Institute of Nursing",
    short_name: "Advanced Health Sciences Institute of Nursing",
    tagline: "Committed to Excellence in Nursing & Healthcare Education",
    theme_color: "#1A2A6C",
  },

  navigation: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about", sub_navigation: [
        { label: "Our Vision & Mission", link: "/about" }, // Agar koi aur page hai
        { label: "Leadership Messages", link: "/about/messages" }, // Aapka Messages Page
        { label: "Affiliations", link: "/affiliations" },
        { label: "Contact", link: "/contact" } 
      ]},
    { label: "Programs", link: "/programs" },
    { label: "Labs", link: "/labs" },
    { label: "Online Apply", link: "/admissions" },
  ],

  pages: {
    home: {
      sections: [
        {
          type: "hero",
          title: "Advanced Health Sciences Institute of Nursing",
          subtitle: "Shaping the Future of Healthcare Professionals",
          button: {
            text: "Apply Now",
            link: "/admissions",
          },
          background_style: "premium-luxury",
        },
        {
          type: "about_short",
          title: "Welcome to AHSION",
          text: "AHSION is dedicated to providing quality nursing education with modern facilities, experienced faculty, and a strong commitment to professional excellence.",
          button: {
            text: "Learn More",
            link: "/about",
          },
        },
        {
          type: "program_highlights",
          title: "Our Programs",
          items: [
            { name: "BS Nursing (Generic)", link: "/programs#bsn" },
            { name: "Post RN BSN", link: "/programs#postrn" },
            { name: "Community Midwifery (CMW)", link: "/programs#cmw" },
            { name: "Certified Nursing Assistant (CNA)", link: "/programs#cna" },
            { name: "ICU (Intensive Care Unit)", link: "/programs#icu" },
            { name: "EDM (Emergency & Disaster Management)", link: "/programs#edm" },
          ],
        },
      ],
    },

    about: {
      sections: [
        {
          type: "banner",
          title: "About AHSION",
          subtitle: "A Premier Institution for Nursing Education",
        },
        {
          type: "content",
          title: "Who We Are",
          text: "Advanced Health Sciences Institute of Nursing (AHSION) is committed to preparing professional and competent nurses who can meet national and international healthcare standards. With state-of-the-art labs, qualified faculty, and a supportive learning environment, we aim to produce compassionate and skilled healthcare providers.",
          image: "/images/about-main.jpg",
        },
        {
          type: "mission_vision",
          mission:
            "To provide high-quality nursing education and foster a learning environment that promotes critical thinking, professionalism, and compassion.",
          vision:
            "To become a leading nursing institution recognized for excellence in healthcare education, clinical training, and community service.",
        },
      ],
    },

    programs: {
      sections: [
        {
          type: "banner",
          title: "Our Academic Programs",
        },
        {
          type: "program_list",
          programs: [
            {
              id: "bsn",
              name: "BS Nursing (Generic)",
              duration: "4 Years",
              eligibility: "Intermediate (Pre-Medical) with 50% marks (Age Limit) 14-35 years",
              description:
                "A comprehensive degree designed to prepare students for modern nursing roles.",
            },
            {
              id: "postrn",
              name: "Post RN BSN",
              duration: "2 Years",
              eligibility: "Diploma in Nursing + RN ",
              description: "Enhance your qualifications and advance your nursing career.",
            },
            {
                  id: "cmw", // ID CMW rakhiye
                  name: "Community Midwifery (CMW)",
                  duration: "2 Years",
                  eligibility: "Matric (either Art or Science) with 40% marks  (Age Limit) 14-40 years (only Females)",
                  description: "A two-year diploma focused on maternal and child healthcare in community settings.",
                },
            {
              id: "cna",
              name: "Certified Nursing Assistant (CNA)",
              duration: "2 Year",
              eligibility: "Matric (either Art or Science) with 45% marks  (Age Limit) 14-35 years",
              description: "Entry-level course to begin your journey in healthcare.",
            },{
              id: "icu",
              name: "ICU (Intensive Care Unit)",
              duration: "1 Year",
              eligibility: "3-Year Diploma in General Nursing & Valid PNMC Registration",
              description: "Specialized training for critical care settings.",
            },
            {
              id: "edm",
              name: "EDM (Emergency & Disaster Management)",
              duration: "1 Year",
              eligibility: "3-Year Diploma in General Nursing & Valid PNMC Registration",
              description: "Focuses on emergency situations and trauma care.",
            },
        ],
        },
      ],
    },

    admissions: {
      sections: [
        {
          type: "banner",
          title: "Admissions Open",
          subtitle: "Join AHSION and Start Your Nursing Career",
        },
        {
          type: "admission_details",
          steps: [
            "Fill out the online application form",
            "Submit academic documents",
            "Appear for interview",
            "Receive confirmation",
          ],
        },
        {
          type: "apply_button",
          text: "Apply Now",
          link: "/apply",
        },
        {
          type: "form",
          form_id: "admission_form",
          fields: [
            { type: "text", label: "Full Name", name: "name" },
            { type: "email", label: "Email", name: "email" },
            { type: "phone", label: "Phone", name: "phone" },
            {
              type: "select",
              label: "Program",
              name: "program",
              options: ["Generic BS Nursing", "Post RN BSN", "Certified Nursing Assistant (CNA)","Community Midwifery (CMW)","ICU (1 Year Specialty)", 
  "EDM (1 Year Specialty)"],
            },
            { type: "textarea", label: "Message", name: "message" },
          ],
          submit_text: "Submit Application",
        },
      ],
    },

    affiliations: {
      sections: [
        {
          type: "banner",
          title: "Our Affiliations",
        },
        {
          type: "affiliation_list",
          groups: [
            {
              title: "Academic Affiliations",
              items: [
                {
                  name: "Dow University of Health Sciences (DUHS)",
                  logo: "/images/duhs.jpg",
                },
              ],
            },
            {
              title: "Registration Bodies",
              items: [
                {
                  name: "Pakistan Nursing & Midwifery Council (PNMC)",
                  logo: "/images/pnmc.jpg",
                },
              ],
            },
            {
              title: "Clinical Affiliations",
              items: [
                {
                  name: "Dr. Ruth K. M. Pfau, Civil Hospital Karachi",
                  logo: "/images/civil logo.PNG",
                },
                
              ],
            },
         
          ],
        },
      ],
    },

    messages: {
      sections: [
        {
          type: "message",
          title: "Message from Nursing Director",
          name: "Almas Chapsi",
          designation: "Nursing Director, AHSION",
          qualification: "MSN/PhD Scholar",
          image: "/images/director/almas.jpeg",
          text: "I welcome you to AHSION. Education is the foundation for progress, and at our institute, we aim to provide exceptional training and character-building opportunities. We are committed to producing skilled, ethical, and compassionate nursing professionals.",
        },
        {
          type: "message",
          title: "Message from Managing Director",
          name: "Muneem Marwat",
          designation: "Managing Director, AHSION",
          qualification: "Post RN/MBA HHCM",
          image: "/images/director/muneem.jpg",
          text: "AHSION continues to strive for excellence in nursing education, blending theory with clinical experience. Our goal is to develop competent nurses who can contribute meaningfully to society and the healthcare sector.",
        },
        {
          type: "message",
          title: "Message from QEC Director",
          name: "Uroosa Naseem",
          designation: "QEC Director, AHSION",
          qualification: "MBA HRM",
          image: "/images/director/uroosa.jpeg",
          text: "Our Quality Enhancement Cell ensures continuous improvement in academic and clinical systems. We emphasize accountability, excellence, and student-centered learning at all levels.",
        },
      ],
    },

    labs: {
      title: "Labs",
      hero: {
        title: "Modern Learning Labs",
        subtitle: "Experience hands-on learning in our technologically advanced labs designed to meet international academic and clinical standards.",
        image: "/images/labs/hero-premium.jpg",
        badge: "Advanced Facilities"
      },
      intro: {
        title: "Where Knowledge Meets Practical Excellence",
        description: "Our labs provide students with immersive and practical exposure that strengthens theoretical learning. Equipped with advanced tools, premium resources, and highly maintained environments, these labs ensure that students develop confidence, clinical precision, and the competencies required for real-world scenarios."
      },
      labs: [
        {
          title: "Science Lab",
          description: "The Science Lab is equipped with high-precision tools and modern instruments that support experimentation in biology, chemistry, genetics, and microbiology. Students engage in practical demonstrations, guided analysis, and supervised scientific investigations that build foundational clinical understanding.",
          features: [
            "High-precision microscopes",
            "Chemical & biological experiment setups",
            "Sterile working environment",
            "Modern safety equipment"
          ],
          image: "/images/labs/science-premium.jpg"
        },
        {
          title: "Skills Lab",
          description: "Our Skills Lab recreates a realistic clinical setup where learners practice essential nursing skills under supervision. This safe, simulation-based environment enhances student confidence and ensures they master procedures before entering clinical rotations.",
          features: [
            "High-fidelity mannequins",
            "Procedure practice stations",
            "Emergency care simulation tools",
            "Scenario-based skill assessments"
          ],
          image: "/images/labs/skills-premium.jpg"
        },
        {
          title: "Anatomy Lab",
          description: "The Anatomy Lab offers a detailed exploration of the human body using lifelike anatomical models and advanced visual aids. Students gain deep anatomical knowledge through structured study sessions and interactive demonstrations.",
          features: [
            "3D anatomical models",
            "Organ system breakdown modules",
            "Guided dissection simulations",
            "Digital anatomy screens"
          ],
          image: "/images/labs/anatomy-premium.jpg"
        },
        {
          title: "Computer Lab",
          description: "Our fully equipped Computer Lab provides students with modern workstations, academic software, and online research access. It serves as a digital hub for preparing assignments, conducting healthcare research, and developing presentation skills.",
          features: [
            "High-speed systems",
            "Educational software",
            "Digital research databases",
            "Quiet study environment"
          ],
          image: "/images/labs/computer-premium.jpg"
        },
        {
          title: "Library",
          description: "A peaceful academic sanctuary featuring a curated collection of medical textbooks, journals, nursing references, and digital archives. The Library supports rigorous learning, research, and exam preparation with a premium study environment.",
          features: [
            "Updated medical textbooks",
            "Research journals",
            "Digital archive access",
            "Quiet reading hall"
          ],
          image: "/images/labs/library-premium.jpg"
        }
      ],
      gallery_section: {
        title: "Facilities Gallery",
        subtitle: "A glimpse into our well-maintained, modern, and fully equipped academic labs.",
        images: [
          "/images/labs/gallery1.jpg",
          "/images/labs/gallery2.jpg",
          "/images/labs/gallery3.jpg",
          "/images/labs/gallery4.jpg"
        ]
      },
      cta: {
        title: "Experience Our Facilities",
        description: "Visit our campus to explore our labs, meet our faculty, and discover how we prepare students for excellence.",
        button_text: "Book a Campus Tour",
        button_link: "/contact"
      }
    },

    contact: {
      sections: [
        {
          type: "contact_info",
          phone: "+92 314 2278735",
          email: "ahsion.edu.pk@gmail.com",
          facebook: "https://www.facebook.com/ahs.instituteofnursing",
          address:
            "Sector 5-B, Plot #106–108, Main Hub River Road, Near Baldia Town Office, Saeed, Sector 5 Baldia, Karachi",
          map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.13344775637!2d66.93741738796233!3d24.913893955757143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b55d5f94db9%3A0xfd364d622ee23de0!2sAdvanced%20Health%20Sciences%20Institute%20of%20Nursing!5e0!3m2!1sen!2s!4v1765981911639!5m2!1sen!2s\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
          },
        {
          type: "contact_form",
          form_id: "contact_form",
          fields: [
            { type: "text", label: "Your Name", name: "name" },
            { type: "email", label: "Email", name: "email" },
            { type: "phone", label: "Phone", name: "phone" },
            { type: "textarea", label: "Message", name: "message" },
          ],
          submit_text: "Send Message",
        },
      ],
    },
  },
};
