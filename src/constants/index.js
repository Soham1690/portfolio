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
    href: "",
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
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive SPA using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core.",
      "Designed responsive UI components with Tailwind CSS.",
      "Integrated SQLite for efficient client-side storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a rendering engine using OpenGL and C++.",
      "Developed physics engine with collision detection.",
      "Implemented scripting system for customization.",
      "Optimized performance with multi-threading.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed responsive theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern UI.",
      "Optimized SEO and page speed.",
      "Implemented custom widgets and plugins.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly.",
      "Implemented video streaming integration.",
      "Added quiz system with dynamic grading.",
      "Integrated Stripe API for payments.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
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
    href: "https://www.linkedin.com/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
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
