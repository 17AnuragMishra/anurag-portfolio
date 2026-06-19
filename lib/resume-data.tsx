import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anurag Mishra",
  initials: "AM",
  location: "Lucknow, India",
  about:
    "Frontend and full-stack developer crafting polished product experiences.",
  summary:
    "I build modern web applications with a strong eye for interface quality, usability, and clean implementation. My recent work spans React, Next.js, Node.js, TypeScript, and AI-flavored product ideas, with a focus on experiences that feel smooth and thoughtfully designed.",
  status: "Open to frontend, full-stack, and product-focused opportunities",
  avatarUrl: "https://i.postimg.cc/CLwnmNff/banner-01-jpg.png",
  personalWebsiteUrl: "https://github.com/17AnuragMishra",
  contact: {
    email: "anuragmishra0521@gmail.com",
    tel: null as string | null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/17AnuragMishra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/17AnuragMishra/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/17AnuragMishra",
        icon: XIcon,
      },
    ],
  },
  quickFacts: [
    "Shipping product-minded interfaces with React and Next.js",
    "Comfortable across frontend polish, APIs, and full-stack delivery",
    "Recent builds include EasyProcure, MeetingHelper, and aiHireMaster",
  ],
  currentFocus: [
    "Designing cleaner, smoother UI systems that feel intentional from the first interaction.",
    "Building practical products that simplify workflows instead of adding more friction.",
    "Growing as a full-stack engineer who can own both product feel and implementation depth.",
  ],
  education: [
    {
      school: "BBD National Institute of Technology and Management",
      degree: "Bachelor's of Technology in Computer Science Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "FilFlo",
      link: "https://filflo.in",
      badges: ["Gurugram, India"],
      title: "SDE",
      start: "09/2025",
      end: "Present",
      description: [
        "Engineered and deployed a Role Based Access Control system across frontend and backend, tightening user permissions and reducing unauthorized access risk.",
        "Developed a retail order dashboard and management system that contributed to sales growth beyond 1 crore.",
        "Designed responsive frontend components with React, Next.js, Tailwind CSS, and shared UI patterns.",
        "Collaborated closely with the team to turn product requirements into usable features with better UX and performance.",
      ],
    },
    {
      company: "HanaLabs",
      link: "https://tryintent.com",
      badges: ["Bangalore, India", "Remote"],
      title: "Frontend Developer Intern",
      start: "12/2024",
      end: "03/2025",
      description: [
        "Worked on Ucasty, a real-time event streaming SaaS platform, and improved rendering performance by roughly 15% through better code abstraction.",
        "Developed frontend components in a 4-member team while translating Figma designs into production-ready TypeScript and Next.js interfaces.",
        "Improved UI and UX across multiple platform modules, helping raise overall product quality and user engagement.",
      ],
    },
    {
      company: "Sugarcane AI",
      link: "https://play.sugarcaneai.dev/",
      badges: ["Remote"],
      title: "Gen AI & Prompt Intern",
      start: "01/2024",
      end: "04/2024",
      description: [
        "Improved prompt accuracy by 92% through structured prompt design and iterative experimentation.",
        "Gained hands-on experience with AI workflows, prompt writing, and analytical problem solving in product contexts.",
      ],
    },
  ],
  openSource: [
    {
      organization: "Zulip",
      link: "https://zulip.com/",
      repo: "https://github.com/zulip/zulip",
      badges: ["Open Source"],
      title: "Merged 3 PRs, working on 2 ongoing issues.",
      start: "2024",
      end: "Present",
      description: [
        "Successfully merged 3 pull requests to the Zulip repository.",
        "Currently working on 2 ongoing issues.",
        "Website: zulip.com",
        "Repo: github.com/zulip/zulip",
      ],
    },
    {
      organization: "typehero",
      link: "https://typehero.dev",
      repo: "https://github.com/typehero/typehero",
      badges: ["Open Source"],
      title: "Merged 1 PR, working on 2 ongoing issues.",
      start: "2024",
      end: "Present",
      description: [
        "Successfully merged 1 pull request to the typehero repository.",
        "Currently working on 2 ongoing issues.",
        "Website: typehero.dev",
        "Repo: github.com/typehero/typehero",
      ],
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Python",
    "Tailwind CSS",
    "HTML/CSS",
    "REST APIs",
    "Postman",
    "Git",
  ],
  projects: [
    {
      title: "EasyProcure",
      description:
        "A procurement workflow platform focused on requisitions, vendor coordination, approvals, and end-to-end visibility through a cleaner dashboard experience.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      category: "Workflow Platform",
      period: "Recent",
      link: { href: "https://easyprocure.in/" },
    },
    // {
    //   title: "MeetingHelper",
    //   description:
    //     "A meeting productivity tool built to organize agendas, capture notes, and turn conversations into clear follow-up actions and summaries.",
    //   techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    //   category: "Productivity Tool",
    //   period: "Recent",
    //   link: { href: "https://intervuecopilot.vercel.app/" },
    // },
    {
      title: "aiHireMaster",
      description:
        "An AI interview preparation platform that combines mock interviews, skill assessment, and detailed feedback to help candidates practice with confidence.",
      techStack: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "OpenAI/Gemini",
        "Vapi",
      ],
      category: "AI Platform",
      period: "Featured",
      link: { href: "https://aihiremaster.anuragm.xyz/" },
    },
    {
      title: "RiderConnect",
      description:
        "A real-time group tracker for sharing live locations, chatting with your group, and staying coordinated even during network instability.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "MongoDB",
        "Node.js",
      ],
      category: "Real-Time App",
      period: "Featured",
      link: { href: "https://riderconnect.in/" },
    },
    {
      title: "Ucasty",
      description:
        "An event streaming and hosting platform with ticketing, privacy controls, and tools for inviting users from anywhere.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "MongoDB",
        "Node.js",
      ],
      category: "Streaming SaaS",
      period: "Shipped",
      link: { href: "https://beta.ucasty.com" },
    },
    {
      title: "ThoughtVibe",
      description:
        "A full-stack article and blogging application built for sharing experiences and publishing written content.",
      techStack: ["JavaScript", "EJS", "Node.js", "MongoDB", "REST APIs"],
      category: "Content Platform",
      period: "Project",
      link: { href: "https://thoughtvibe.anuragm.xyz/" },
    },
    {
      title: "innTrack",
      description:
        "A logistics tracking system concept focused on operational visibility and cleaner tracking flows.",
      techStack: ["Python", "Django", "JavaScript", "HTML/CSS", "PostgreSQL"],
      category: "Logistics Tool",
      period: "Build",
      link: { href: "https://github.com/17AnuragMishra/innTrack-" },
    },
  ],
} as const;
