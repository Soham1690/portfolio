// ================= PROJECTS =================

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://www.soham.buzz/",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Parkinson Disease Classification using AI/ML",
    description:
      "An AI/ML-powered clinical-style web application that predicts Parkinson disease risk using biomedical voice-pattern features, with a polished frontend and deployed live demo.",
    subDescription: [
      "Built a machine learning classification workflow using biomedical speech features for Parkinson risk prediction.",
      "Created a clean frontend experience focused on medical-style clarity, result readability, and professional presentation.",
      "Integrated the prediction workflow with a deployed web interface for live usage and resume demonstration.",
      "Structured the project to showcase AI/ML, frontend engineering, model inference, and deployment skills.",
    ],
    href: "https://parkinsons-frontend.vercel.app/",
    logo: "",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "FastAPI" },
      { id: 4, name: "scikit-learn" },
      { id: 5, name: "AI/ML" },
      { id: 6, name: "Vercel" },
    ],
  },
  {
    id: 3,
    title: "Driver Drowsiness Detection using AI/ML",
    description:
      "A real-time driver safety web application that detects drowsiness using computer vision, webcam monitoring, alert states, and a deployed FastAPI + Vercel setup.",
    subDescription: [
      "Built a real-time drowsiness detection system using webcam-based computer vision workflows.",
      "Implemented alert states for fatigue, head-down behavior, and driver safety risk monitoring.",
      "Created a FastAPI backend pipeline for detection processing and frontend integration.",
      "Designed a polished React dashboard with live camera feed, monitoring states, and incident-ready UI.",
    ],
    href: "https://drowsiness-detection-system-five.vercel.app/",
    logo: "",
    image: "/images/drowsiness-dashboard.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "MediaPipe" },
      { id: 5, name: "AI/ML" },
      { id: 6, name: "Vercel" },
    ],
  },
];

// ================= SOCIALS =================

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/soham6969/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Soham1690",
    icon: "/assets/logos/github.svg",
  },
];

// ================= EXPERIENCES =================

export const experiences = [
  {
    title: "Software Developer",
    job: "Flam",
    date: "May 2025 - December 2025",
    contents: [
      "Designed and developed scalable backend REST APIs for real-time messaging workflows.",
      "Optimized event-driven architecture to improve system performance and throughput.",
      "Integrated third-party services and improved monitoring pipelines.",
      "Collaborated in agile sprints and contributed to production-ready feature releases.",
    ],
  },
  {
    title: "Graduate Engineer Intern",
    job: "LTIMindtree",
    date: "January 2025 - March 2025",
    contents: [
      "Worked on Java backend development focusing on OOP and modular architecture.",
      "Participated in milestone-based corporate evaluations.",
      "Strengthened understanding of enterprise SDLC practices.",
    ],
  },
  {
    title: "Salesforce Developer Virtual Intern",
    job: "PwC – CTDP 2.0",
    date: "May 2024 - August 2024",
    contents: [
      "Built CRM workflows and Lightning components using Salesforce.",
      "Automated business processes using Flow and Process Builder.",
      "Worked on enterprise-style deployment scenarios.",
    ],
  },
  {
    title: "Cisco Networking Apprentice",
    job: "Cisco",
    date: "May 2024 - August 2024",
    contents: [
      "Performed IP subnetting and routing simulations.",
      "Configured LAN/WAN environments using Packet Tracer.",
      "Strengthened networking fundamentals aligned with CCNA standards.",
    ],
  },
];

// ================= REVIEWS =================

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Incredible portfolio and attention to detail!",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Professional, clean, and well-structured projects.",
    img: "https://robohash.org/jill",
  },
];