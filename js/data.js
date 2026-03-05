/**
 * ============================================================
 *  DATA.JS — Your Personal Content CMS
 *  Edit this file to update publications, talks, projects,
 *  awards etc. across your entire site without touching HTML.
 * ============================================================
 */

const SITE_DATA = {

  /* ── Personal Info ───────────────────────────────────────── */
  name: "Anirudh Arora",
  title: "Climate Researcher",
  typingRoles: [
    "Climate Researcher",
    "Atmospheric Scientist",
    "MS Student @ KAUST",
    "Environmental Scientist"
  ],
  tagline: "Studying how Earth's atmosphere responds to a changing climate — from monsoon dynamics to solar geoengineering.",
  email: "anirudh21@iiserb.ac.in",
  phone: "+91-7987188136",
  location: "KAUST, Saudi Arabia",

  /* ── Social Links ────────────────────────────────────────── */
  social: {
    linkedin:     "https://www.linkedin.com/in/anirudharora",
    googleScholar:"https://scholar.google.com/citations?user=kYFyXtcAAAAJ&hl=en",
    orcid:        "https://orcid.org/",          // ← Add your ORCID URL here
    bluesky:      "",                             // ← Add your BlueSky handle here
    github:       "",                             // ← Add GitHub if desired
  },

  /* ── Education Timeline ──────────────────────────────────── */
  education: [
    {
      degree:      "Master of Science (Research) — Visiting Student",
      institution: "King Abdullah University of Science and Technology (KAUST)",
      location:    "Thuwal, Saudi Arabia",
      period:      "July 2025 – Present",
      advisor:     "Prof. Ibrahim Hoteit (CLIMATics Group)",
      details:     "Early-stage analysis of large ensemble simulations to quantify internal variability and constraint uncertainty in regional climate responses.",
      badge:       "Current"
    },
    {
      degree:      "Bachelor of Science in Environmental Sciences",
      institution: "Indian Institute of Science Education and Research (IISER) Bhopal",
      location:    "Bhopal, India",
      period:      "2021 – 2025",
      details:     "CPI: 9.15/10.00 · CNR Rao Prize for highest CPI (10/10) in first semester",
      badge:       ""
    },
    {
      degree:      "High School STEM Diploma",
      institution: "St. Paul H.S. School",
      location:    "Indore, India",
      period:      "2006 – 2021",
      details:     "10th (CBSE): 95.2% · 12th (CBSE): 95.6%",
      badge:       ""
    }
  ],

  /* ── Research Experience ─────────────────────────────────── */
  experience: [
    {
      role:        "Visiting Researcher",
      org:         "CLIMATics Group, KAUST",
      location:    "Saudi Arabia",
      period:      "July 2025 – Present",
      supervisor:  "Prof. Ibrahim Hoteit",
      bullets: [
        "Co-supervised for master's thesis on large ensemble simulations.",
        "Quantifying internal variability and uncertainty in regional climate responses."
      ]
    },
    {
      role:        "Research Intern",
      org:         "DST Centre of Excellence for Climate Information, IIT Delhi",
      location:    "New Delhi, India",
      period:      "May 2023 – Present",
      supervisor:  "Prof. Saroj Mishra",
      bullets: [
        "CMIP5/CMIP6 multi-model ensemble analysis of historical precipitation and monsoon variability over India.",
        "Developed a novel framework for sequential decision-making for efficient climate actions.",
        "Investigated circulation-driven precipitation changes under solar geoengineering (GeoMIP G1, G6sulfur).",
        "Presented results at the 14th Annual GeoMIP Meeting 2024, Cornell University.",
        "First-authored commentary on China Plus One strategy and transboundary carbon migration.",
        "Multi-scale analysis of air pollution sources over the Indo-Gangetic Plain."
      ]
    },
    {
      role:        "Research Intern — Ethnography Studies",
      org:         "IISER Bhopal",
      location:    "Bhopal, India",
      period:      "Aug 2023 – Apr 2024",
      supervisor:  "Dr. Renny Thomas",
      bullets: [
        "Field ethnography on socio-cultural importance of Garuda Purana.",
        "Comprehensive ethnographic study of two laboratory environments over four months."
      ]
    }
  ],

  /* ── Publications ────────────────────────────────────────── */
  publications: [
    {
      id:      "sarci-2025",
      type:    "journal",
      status:  "published",
      year:    2025,
      authors: "Bhuyan, D. P., Upadhyaya, P., Pathak, R., Namdev, P., Salunke, P., Anand, A., Suresh, A. D., Arora, A., et al., & Mishra, S. K.",
      title:   "Advancing climate services in South Asia: The SARCI Framework for actionable information, capability, and capacity",
      venue:   "Bulletin of the American Meteorological Society",
      doi:     "10.1175/BAMS-D-25-0172.1",
      url:     "https://doi.org/10.1175/BAMS-D-25-0172.1",
      tags:    ["Climate Services", "South Asia", "Monsoon"],
      highlight: false
    },
    {
      id:      "air-crisis-2025",
      type:    "article",
      status:  "published",
      year:    2025,
      authors: "Mishra, S. K., Upadhyaya P., Arora, A., Vinod A.J., Jayan N., Dwivedi A.",
      title:   "To Solve North India's Air Crisis, Look Beyond Stubble and Fireworks",
      venue:   "The India Forum",
      date:    "Oct 22, 2025",
      url:     "https://www.theindiaforum.in/environment/solve-north-indias-air-crisis-look-beyond-stubble-and-fireworks-0",
      tags:    ["Air Pollution", "Indo-Gangetic Plain", "Policy"],
      highlight: false
    },
    {
      id:      "kantian-2026",
      type:    "journal",
      status:  "under-review",
      year:    2026,
      authors: "Arora, A.",
      title:   "Public enlightenment and climate action: rethinking Kantian principles for a sustainable future",
      venue:   "npj Climate Action (submitted)",
      tags:    ["Climate Ethics", "Philosophy", "Policy"],
      highlight: true
    },
    {
      id:      "gcm-credibility-2026",
      type:    "journal",
      status:  "in-prep",
      year:    2026,
      authors: "Arora, A., Upadhyaya, P., Mishra, S. K., Bhuyan, D., Behera, S., Fasullo, J., Tribbia, J., Jain, S., Salunke, P., Sahany, S., Dash, S. K.",
      title:   "Climate models doubled in a decade but credibility remains poor over the Global South",
      venue:   "In preparation",
      tags:    ["Climate Modeling", "CMIP", "Global South"],
      highlight: true
    },
    {
      id:      "decision-framework-2026",
      type:    "journal",
      status:  "in-prep",
      year:    2026,
      authors: "Mishra, S. K., Ray, P., Srivastava, A., Upadhyaya, P., Ortiz, P., Arora, A., Jain, S., Salunke, P., Schlosser, C.",
      title:   "A principled framework for sequential decision making to promote efficient climate actions",
      venue:   "In preparation",
      tags:    ["Decision Theory", "Climate Policy", "MDPs"],
      highlight: false
    }
  ],

  /* ── Conference Talks & Posters ──────────────────────────── */
  talks: [
    {
      type:     "poster",
      title:    "Circulation Changes under Geoengineering and their Implications in Regional Precipitation and Temperature",
      event:    "14th Annual GeoMIP Meeting 2024",
      location: "Cornell University, Ithaca, USA",
      date:     "July 2024",
      authors:  "Arora, A., Upadhyaya, P., Mishra, S. K.",
      note:     "Full travel & accommodation support awarded",
      url:      ""
    }
  ],

  /* ── Awards & Honours ────────────────────────────────────── */
  awards: [
    {
      year:  "2025",
      title: "Rhodes Scholarship — India Finalist",
      org:   "University of Oxford · Rhodes Trust",
      desc:  "Among the top 13 students out of 1,000 applicants for the Rhodes Scholarship India."
    },
    {
      year:  "2025",
      title: "Visiting Student Research Program",
      org:   "King Abdullah University of Science and Technology (KAUST)",
      desc:  "Full scholarship to conduct master's thesis research at KAUST, Saudi Arabia."
    },
    {
      year:  "2025",
      title: "MPI-M 1-Year Research Funding (Declined)",
      org:   "Max Planck Institute for Meteorology, Hamburg",
      desc:  "Full funding offered under IISER-MPI collaboration. Declined in favour of KAUST."
    },
    {
      year:  "2024",
      title: "Full Travel Support — GeoMIP Meeting",
      org:   "Cornell University, Ithaca, USA",
      desc:  "Awarded full travel and accommodation support for the 14th Annual GeoMIP Meeting."
    },
    {
      year:  "2023",
      title: "Bronze Medal — University Physics Competition",
      org:   "Carroll College, Helena, Montana (International)",
      desc:  "Team award in the international University Physics Competition 2022."
    },
    {
      year:  "2022",
      title: "CNR Rao Education Foundation Prize",
      org:   "IISER Bhopal",
      desc:  "Awarded for securing the highest CPI (10/10) in the first semester of the BS-MS programme."
    },
    {
      year:  "2019",
      title: "GIZ Sustainable Development Competition",
      org:   "German Embassy, New Delhi",
      desc:  "Felicitated for project on 'Sustainable Development in Indore'."
    },
    {
      year:  "2019",
      title: "Joseph Memorial Scholarship",
      org:   "St. Paul Higher Secondary School, Indore",
      desc:  "Awarded for exceptional leadership and superior academic performance."
    }
  ],

  /* ── Projects ────────────────────────────────────────────── */
  projects: [
    {
      id:       "geomip",
      title:    "Stratospheric Aerosol Injection & the South Asian Monsoon",
      year:     2024,
      category: "Climate Modeling",
      tags:     ["GeoMIP", "Geoengineering", "Monsoon"],
      desc:     "Analyzed GeoMIP G6 outputs (CESM-WACCM) to assess impacts of SAI on precipitation patterns, temperature gradients, and atmospheric circulation.",
      url:      "project-geomip.html",
      image:    "images/project-geomip.jpg"
    },
    {
      id:       "pollution",
      title:    "Air Pollution Dynamics over the Indo-Gangetic Plain",
      year:     2024,
      category: "Atmospheric Science",
      tags:     ["Air Quality", "Satellite Data", "IGP"],
      desc:     "Multi-scale analysis of natural and anthropogenic sources of air pollution using reanalysis and satellite datasets.",
      url:      "project-pollution.html",
      image:    "images/project-pollution.jpg"
    },
    {
      id:       "policy",
      title:    "Sequential Decision-Making for Climate Action",
      year:     2023,
      category: "Decision Theory",
      tags:     ["MDPs", "Climate Policy", "Optimization"],
      desc:     "Developed optimal policy pathways using Markov Decision Processes (MDPs) for efficient climate adaptation strategies.",
      url:      "project-policy.html",
      image:    "images/project-policy.jpg"
    },
    {
      id:       "aerosols",
      title:    "Modeling Atmospheric Aerosols in Climate Systems",
      year:     2024,
      category: "Climate Modeling",
      tags:     ["Aerosols", "GCMs", "Radiative Forcing"],
      desc:     "Comprehensive report on aerosol dynamics and representation in GCMs, focusing on microphysics, cloud interactions, and radiative forcing.",
      url:      "",
      image:    "images/project-aerosols.jpg"
    },
    {
      id:       "monsoon-aerosols",
      title:    "Aerosol Influence on Indian Monsoon Rainfall",
      year:     2024,
      category: "Atmospheric Science",
      tags:     ["Aerosols", "Monsoon", "South Asia"],
      desc:     "Co-authored review of remote aerosol emission influences on South Asian monsoon variability.",
      url:      "",
      image:    "images/project-monsoon.jpg"
    },
    {
      id:       "penalty",
      title:    "Modelling the Perfect Penalty Kick",
      year:     2022,
      category: "Computational Physics",
      tags:     ["Fluid Dynamics", "Differential Equations", "Sports Science"],
      desc:     "Solved six coupled differential equations to obtain optimal initial velocities and spin values for a perfect penalty kick.",
      url:      "",
      image:    "images/project-penalty.jpg"
    }
  ],

  /* ── Readings ────────────────────────────────────────────── */
  // (Keep your existing readings.html content — no changes needed there)

};
