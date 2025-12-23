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
        { label: "Our Vision & Mission", link: "/about" }, 
        { label: "Messages of Director", link: "/about/messages" }, 
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
          title: "Introduction",
          text: `Advanced Health Sciences Institute of Nursing Karachi was established in 2015 in order to start General Nursing Diploma Program (03 years) and Diploma in Intensive Care Unit Nursing (Post Basic Specialization) (01 Year) to cover a huge area of Saeedabad Baldia Town, Karachi rendering our services for the betterment of nurses as there is a shortage of highly advance and profession nurses in Sindh province as well as in Pakistan. We as Advanced Health Sciences Institute of Nursing Karachi ION, started B.Sc. Nursing (Post-RN) (02 Years) and Post Basic Specialization Emergency & Disaster Management (01 Year) in 2018.

    We have been providing services to our locality in term of rendering the Diploma in Nursing, B.Sc. Nursing (Post-RN) Post Basic Specialization ICU Nursing and Emergency & Disaster Management. Furthermore, as we followed the policies of PNC and never compromised on quality; hence, we have established a good name in the locality as well in the city. As the Government of Pakistan has declared the year of 2019 is the year of nursing profession, so we have started Generic BSN Degree program, CNA, CMW programs in this years. The said programs have been introduced at AHS-ION to fulfill the requirement and the need of area.

    We are affiliated for clinical duties / services with Dr. Ruth K.M Pfau, Civil Hospital Karachi. AHS Institute of Nursing endeavors are:
    • To provide advanced nursing education, introducing the latest technology of nursing profession.
    • To make the education easy for the interested students without compromising the quality of care.
    • To facilitate and provide students with all kind of facilities.`,          
          image: "/images/about-main.jpg",
        },
        {
          type: "mission_vision",
          mission:
`The institute of Nursing is committed to perfection in nursing education, clinical practice, nursing care, and community service. The institute prepares nursing students to be effective clinicians & leaders who will work to improve the health and health care of Pakistan people community and beyond, and contribute to the nursing profession through professional, scholarly & legal activities. 
    
    Our mission is to provide our trainee with the highest possible standard of nursing education using all available resources. The focus of our program is to provide a supportive learning environment for the students. We aim to train skilled & qualified professional nurses who deliver care that is tailored to each person's unique needs. Institution of dedicated to promoting patients well-being through skilled and educated nurses. We collaborate with stakeholder of health care of maximize the nursing care. We promote a supportive and learning environment for our staff, respecting each others needs, abilities and potential.`,
          vision:
`As a institute, our vision is to produce competent nurses and health care providers whose care, discoveries, authentic and qualified voices may proved them the vital organ of a living society. Our society will start acknowledging their services. We also wish to create nursing in medical awareness into every home in Pakistan. Finally, we will be able to eradicate the minor diseases by improving health & quality care through excellence in nursing education, research & discoveries.`,        },
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

   leadership: [

  {
    id: 2,
    title: "Message from Managing Director",
    name: "Muneem Khan Marwat",
    designation: "MBA (HHCM), B.Sc.N, Dip. Card, RN",
    image: "/images/managing-director.jpg", 
    message: `As the Managing Director of Advanced Health Sciences Institute of Nursing, Karachi, I am pleased to write this message for the upcoming students who are keenly interested in the field of nursing. I really appreciate and honor the choice you have made in taking admission at AHS-ION. Our institute plays a vital role in producing competent & trained nurses. We never compromise on quality. Our motto is to equip students with advanced nursing training.
    
    To prove the motto true, we have qualified faculty members, spacious air-conditioned classrooms equipped with the latest teaching aids, a skill lab, science lab, computer lab, and library. We expect a learning attitude and deep interest in study from your end. We leave no stone unturned in fulfilling the requirements of nurses in Pakistan. Our efforts will never cease for the betterment of the nursing profession.
    
    This is our commitment that no student is going to be deprived of quality education just because of financial crises. Financial assistance is awaiting deserving & outstanding students. Finally, I wish all prospective students a very bright future ahead and welcome them to AHS-ION for their educational journey.`
  },
   {
    id: 1,
    title: "Message from Nursing Director",
    name: "Ms. Almas Chapsi",
    designation: "PhD Scholar, MSN, BSN, RM, RN",
    image: "/images/nursing-director.jpg", 
    message: `I warmly welcome all the students to the most leading school of nursing, Advanced Health Sciences Institute of Nursing, Karachi.
    
    Advanced Health Sciences Institute of Nursing Karachi was established in 2015-16. Throughout the period, it proved its standard services in the field of nursing with many achievements, such as topping in Diploma and Sterilization programs. It has launched Generic BSN & Post RN BSN programs for future nurses affiliated with International University (Dow University of Health Sciences).
    
    The Institute offers students the opportunity to study and learn in a supportive environment that recognizes the special needs and commitments of the adult learner. In keeping pace with rapid advancements in nursing education, to ensure integration of technology-enhanced learning in its pedagogy and to improve acquisition of present and critical clinical skills, the Institute is constructing a state-of-the-art Centre for Innovation in Nursing Education.
    
    We strongly believe that nursing students are responsible and accountable for quality nursing practice; thus, they need to be appropriately trained, oriented, and directly supervised. Our highly qualified and motivated professionals provide the skills and knowledge needed to meet the challenges of today.`
  },
],
    

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