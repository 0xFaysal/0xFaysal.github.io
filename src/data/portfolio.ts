export interface Project {
  id?: string;
  title: string;
  role: string;
  featured?: boolean;
  badge?: string;
  description: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
}

export interface Award {
  title: string;
  award: string;
  team: string;
  category?: string;
  event: string;
  date: string;
  location: string;
  projectTitle?: string;
  projectUrl?: string;
  olympiadUrl?: string;
  nextStage?: string;
  nextStageDates?: string;
  nextStageLocation?: string;
  description: string;
  links?: { label: string; url: string }[];
  images: { src: string; alt?: string; caption: string }[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  description: string;
  bulletPoints?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  shortName: string;
  title: string;
  location: string;
  timeZone: string;
  email: string;
  cvUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    email: string;
    cv: string;
  };
  awards: Award[];
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  name: "Faysal Ahmed Fahim",
  shortName: "Faysal",
  title: "Frontend Developer",
  location: "Dhaka, Bangladesh",
  timeZone: "Asia/Dhaka",
  email: "faysalfahim3@gmail.com",
  cvUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/0xFaysal",
    linkedin: "https://www.linkedin.com/in/faysal-ahmed-fahim01",
    instagram: "https://www.instagram.com/faysal_fahim_/",
    email: "mailto:faysalfahim3@gmail.com",
    cv: "/resume.pdf",
  },
  awards: [
    {
      title: "National Gold Medal in Green Entrepreneurship",
      award: "Gold Medal",
      team: "Team XEN",
      category: "Project Display & Entrepreneurship",
      event: "FIRSO Bangladesh · National Selection Round",
      date: "2026",
      location: "Dhaka, Bangladesh",
      projectTitle: "HelioBay",
      projectUrl: "https://heliobay.vercel.app/",
      olympiadUrl: "https://firso.fibonaccibd.online/",
      nextStage: "FIRSO Global Final 2026 · Rome, Italy",
      nextStageDates: "30 November – 4 December 2026",
      nextStageLocation: "Rome, Italy",
      description:
        "HelioBay was awarded First Place (Gold Medal) in the Green Tech division at the Fibonacci International Robot & STEM Olympiad (FIRSO), recognized for combining decentralized solar energy with battery storage, IoT telemetry, and a transparent charging management network. Selected to represent Bangladesh at the Global Final.",
      links: [
        { label: "HelioBay Project", url: "https://heliobay.vercel.app/" },
        { label: "Official Olympiad", url: "https://firso.fibonaccibd.online/" },
        { label: "Source Code", url: "https://github.com/0xFaysal/HelioBay" },
      ],
      images: [
        {
          src: "/team-xen/team-xen-award.jpeg",
          alt: "Team XEN receiving the Gold Medal at FIRSO Bangladesh 2026",
          caption: "Team XEN receiving the Gold Medal on stage at FIRSO Bangladesh 2026",
        },
        {
          src: "/team-xen/team-xen-2.jpeg",
          alt: "HelioBay solar-powered smart charging station hardware prototype",
          caption: "HelioBay smart solar charging network hardware prototype demonstration",
        },
      ],
    },
    {
      title: "National Top 20 Finalist — Data Privacy Avengers",
      award: "Top 20 Finalist",
      team: "Incognito Unit",
      category: "Data Privacy & Digital Governance",
      event: "Robi Axiata PLC · Data Privacy Avengers",
      date: "2026",
      location: "Dhaka, Bangladesh",
      description:
        "Out of numerous nationwide entries across Bangladesh, finished in the Top 20 in Data Privacy Avengers 2026 organized by Robi Axiata PLC, earning an invitation to the on-site round at the Robi Corporate Office. Awarded the Certificate of Appreciation for engagement with real-world industry perspectives on data privacy and digital governance.",
      links: [
        { label: "Robi Axiata PLC", url: "https://bd.linkedin.com/company/robi-axiata-limited" },
      ],
      images: [
        {
          src: "/robi/robi-team.jpeg",
          alt: "Team Incognito Unit at Robi Corporate Office",
          caption: "Team Incognito Unit during the on-site round at Robi Corporate Office",
        },
        {
          src: "/robi/robi-certificate.webp",
          alt: "Certificate of Appreciation from Robi Axiata PLC",
          caption: "Certificate of Appreciation awarded by Robi Axiata PLC",
        },
      ],
    },
  ],
  projects: [
    {
      title: "ParkEase BD",
      id: "parkease-bd",
      featured: true,
      role: "Full-Stack Developer",
      description:
        "Developed map-based search and booking for shared residential parking in Dhaka. The project uses PostgreSQL transactions to coordinate reservation holds.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Node.js", "Tailwind CSS"],
      url: "https://parkease-bd.vercel.app",
      githubUrl: "https://github.com/0xFaysal/se-lab-wake-up-to-reality",
    },
    {
      title: "HelioBay – Smart Solar EV Charging Network",
      id: "heliobay",
      featured: true,
      role: "Technical Lead · Team XEN",
      badge: "Gold Medal · FIRSO 2026",
      description:
        "Led Team XEN’s work on a solar EV charging platform and integrated dashboards for live IoT telemetry and automated charging control. The project won a national gold medal in Green Tech.",
      tags: ["Green Tech", "Solar Energy", "Next.js", "TypeScript", "IoT & Embedded", "EV Charging"],
      url: "https://heliobay.vercel.app/",
      githubUrl: "https://github.com/0xFaysal/HelioBay",
    },
    {
      title: "UNO-Mates",
      id: "uno-mates",
      featured: true,
      role: "Creator & Lead Developer",
      description:
        "Built a real-time card game for 2–10 players with synchronized rooms and turn validation. Used Zustand for optimistic UI updates and Playwright to test multiplayer behavior.",
      tags: ["Next.js 16", "TypeScript", "Supabase", "Zustand", "Tailwind CSS", "Playwright"],
      url: "https://uno-mates.vercel.app",
      githubUrl: "https://github.com/0xFaysal/UNO-Mates",
    },
    {
      title: "Sohojogi (সহযোগী)",
      role: "Full-Stack Developer",
      description:
        "A Bangladeshi fintech platform converting informal store credit ('Baki') into portable, verifiable credit scores to empower local merchants and consumers.",
      tags: ["Next.js", "TypeScript", "GSAP", "Zustand", "Express.js", "Tailwind CSS"],
      url: "https://sohojogi.vercel.app/",
      githubUrl: "https://github.com/0xFaysal/Sohojogi-frontend",
    },
    {
      title: "Rise of Valor",
      role: "Game & Network Developer",
      description:
        "A multiplayer co-op pixel-art survival action game where 4–5 players battle waves of enemies. Includes in-game voice chat, custom socket networking, and player state synchronization.",
      tags: ["Java", "JavaFX", "Socket Programming", "Firebase", "MongoDB"],
      githubUrl: "https://github.com/0xFaysal/Rise-of-Valor",
    },
    {
      title: "Video-to-Frame Processor",
      role: "Creator",
      description:
        "A high-performance Python utility utilizing FFmpeg and yt-dlp to download streams from YouTube/Facebook and extract high-resolution frames for AI and machine learning datasets.",
      tags: ["Python", "FFmpeg", "yt-dlp", "Computer Vision", "Automation"],
      githubUrl: "https://github.com/0xFaysal/Video-to-Frame-Processor",
    },
    {
      title: "Stricker",
      role: "Full-Stack Developer",
      description:
        "Real-time multiplayer 2D arena game featuring dynamic collision detection, low-latency WebSocket communication, combat mechanics, and lobby rooms.",
      tags: ["TypeScript", "React", "Socket.IO", "Express.js", "Node.js"],
      githubUrl: "https://github.com/0xFaysal/Stricker",
    },
  ],
  skills: [
    {
      name: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Zustand",
        "GSAP",
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "REST APIs",
        "Socket.IO",
      ],
    },
    {
      name: "Testing & Tools",
      skills: [
        "Playwright",
        "Git & GitHub",
        "Firebase",
        "Supabase",
        "Linux",
        "Figma",
      ],
    },
  ],
  experience: [
    {
      title: "Front-End Developer Intern",
      organization: "Algoel",
      organizationUrl: "https://www.facebook.com/algoelofficial",
      period: "Apr 2025 – Aug 2025",
      description:
        "Worked on an e-commerce storefront using React, TypeScript, and Tailwind CSS. My responsibilities covered feature development, API integration, and cross-browser QA.",
      bulletPoints: [
        "Built responsive storefront components and worked on product discovery, dynamic filtering, shopping cart state, and checkout.",
        "Integrated REST APIs for user authentication, product catalog data, and order status.",
        "Refactored UI components, helped test storefront flows across browsers, and collaborated with the team in sprint work and daily standups.",
      ],
    },
  ],
  education: [
    {
      title: "B.Sc. in Computer Science and Engineering (CSE)",
      organization: "United International University (UIU)",
      organizationUrl: "https://www.uiu.ac.bd/",
      period: "2023 – Present",
      description:
        "Undergraduate studies focusing on Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Systems, Computer Networks, and Software Engineering.",
    },
  ],
};
