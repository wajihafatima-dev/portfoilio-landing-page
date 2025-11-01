import { Code, Layers, Globe, Sparkles, Code2, Palette, Smartphone, Zap } from "lucide-react";

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTYyODU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYxNjcxMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Recharts", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile App UI",
    description:
      "Beautiful mobile app interface with smooth animations and intuitive navigation.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjczMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Clean and modern portfolio website with smooth scroll animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTcwMjQ2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Tailwind", "Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "Productivity app for managing tasks, projects, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNzAwNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Firebase", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Manage multiple social media accounts from a single, unified dashboard.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYxNjcxMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "API", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
export const SERVICES_DATA = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, scalable, and modern web applications using the latest technologies and best practices.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Designing high-converting landing pages that capture attention and drive results.",
    features: ["Modern Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description:
      "Tailored web solutions to meet your unique business needs and requirements.",
    features: ["API Integration", "Database Design", "Custom Features"],
  },
];

export const ABOUT_DATA = {
  skills: [
    { name: "HTML", level: 95, color: "#f97316" },
    { name: "CSS", level: 90, color: "#3b82f6" },
    { name: "JavaScript", level: 90, color: "#facc15" },
    { name: "React.js", level: 95, color: "#06b6d4" },
    { name: "Tailwind", level: 80, color: "#b8b514" },
  ],

  skills2: [
    { name: "Bootstrap", level: 80, color: "#f33030" },
    { name: "MUI", level: 90, color: "#2fb814" },
    { name: "Redux", level: 90, color: "#14b8a6" },
    { name: "Next.js", level: 95, color: "#b81481" },
    { name: "React Query", level: 80, color: "#b8142a" },
  ],

  tools: [
    {
      icon: Code2,
      name: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      description: "Creating beautiful user experiences with figma designs",
    },
    {
      icon: Smartphone,
      name: "Responsive",
      description: "Mobile-first design approach  sbdadjasdjashdjakjsdhkajs",
    },
    {
      icon: Zap,
      name: "Performance",
      description: "Optimized for speed and efficiency",
    },
  ],
};
export const HERO_DATA = {
  id: "home",
  backgroundImage:
    "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?auto=format&fit=crop&w=1920&q=80",
  overlay:
    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",

  title: "Welcome to my portfolio",
  heading: {
    intro: "Hi, I'm",
    name: "Wajiha Mukhtar",
    role: "Frontend Developer",
  },
  description:
    "I build responsive & modern web applications with clean code and beautiful designs. Transforming ideas into digital reality.",

  buttons: [
    {
      label: "View Portfolio",
      sectionId: "portfolio",
      variant: "contained",
      color: "emerald",
      icon: "ArrowRight", 
    },
    {
      label: "My Resume",
      href: "/assets/wajiha_cv.pdf",
      download: "myResume.pdf",
      variant: "outlined",
      color: "gradient",
      icon: "SaveAltOutlinedIcon",
    },
  ],
};
