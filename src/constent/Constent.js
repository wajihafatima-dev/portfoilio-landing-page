import {
  Code,
  Layers,
  Globe,
  Sparkles,
  Code2,
  Palette,
  Smartphone,
  Zap,
  GitBranch,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    image: "/images/recipe.jpg",
    title: "Recipe Finder",
    description:
      "Explore delicious recipes instantly with this Next.js recipe finder.",
    tags: ["Next.js", "Api", "Mui"],
    demoUrl: "https://recipe-finder-lemon-mu.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    image: "/images/dashboard.png",
    title: "Dashboard",
    description:
    "A user-friendly dashboard where users can log in, manage their profiles with an interface built using Next.js.",
    tags: ["Next.js", "API", "Javascript"],
    demoUrl: "https://resourceinn.vercel.app/login",
    githubUrl: "#",
  },
  {
    id: 3,
    image: "/images/blog.png",
    title: "Blog Landing Page",
    description: "A simple and interactive landing page built with React.js.",
    tags: ["React.js", "Tailwind CSS"],
    demoUrl: "https://blog-landing-page-lake.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    image: "/images/todo.jpg",
    title: "Todo List",
    description: "A clean and efficient to-do list built with Next.js.",
    tags: ["Next.js", "Javascript" ,"Mui"],
    demoUrl: "https://todo-app-two-theta-77.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Clean and modern portfolio website with smooth scroll animations and responsive design.",
    image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTcwMjQ2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Mui", "Motion"],
    demoUrl: "https://my-portfolio-amber-gamma-81.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 6,
    image: "/images/counter.jpg",
    title: "Counter",
    description: "A simple and interactive counter app built with React.js.",
    tags: ["React.js", "Mui"],
    demoUrl: "https://counter-zeta-nine.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 7,
     image: "/images/quiz.jpg",
    title: "Quiz App",
    description: "An engaging quiz application developed with Next.js.",
    tags: ["Next.js", "Tailwind","Api"],
    demoUrl: "https://quiz-app-two-kappa-43.vercel.app/quiz",
    githubUrl: "#",
  },
];
export const SERVICES_DATA = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, scalable, and modern web applications using the latest technologies and best practices.",
    features: [
      "React.js",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    icon: Layers,
    title: "Responsive UI Design",
    description:
      "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
    features: ["User Research", "Responsive design", "Dynamic flow"],
  },
  {
    icon: Globe,
    title: "Next.js Development",
    description:
      "Developing SEO-friendly and fast server-side rendered applications using Next.js.",
    features: ["Modern Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Sparkles,
    title: "API Integration",
    description:
      "Connecting frontend with REST API services for dynamic data handling.",
    features: ["API Integration", "Database Design", "Custom Features"],
  },
  {
    icon: GitBranch,
    title: "Version Control & Deployment",
    description:
      "Using Git/GitHub for code management and deploying applications on Vercel.",
    features: ["Git Workflow"],
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
    { name: "Next.js", level: 95, color: "#b81481" },
    { name: "Redux", level: 90, color: "#14b8a6" },
    { name: "React Query", level: 80, color: "#b8142a" },
  ],

  tools: [
    {
      icon: Code2,
      name: "Clean Code",
      description:
        "Writing maintainable and scalable frontend code using modern JavaScript and React.js.",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      description:
        "Creating beautiful user experiences with Figma designs, Tailwind CSS, and Material UI.",
    },
    {
      icon: Smartphone,
      name: "Responsive Design",
      description:
        "Building mobile-first layouts that look great on all devices — from phones to desktops.",
    },
    {
      icon: Zap,
      name: "Performance Optimization",
      description:
        "Optimizing web apps for speed, smooth interactions, and excellent Core Web Vitals scores.",
    },
    {
      icon: Layers,
      name: "State Management",
      description:
        "Using Redux, React Query, and Context API to handle complex application states efficiently.",
    },
    {
      icon: Globe,
      name: "API Integration",
      description:
        "Connecting frontend with backend using REST APIs and Firebase for real-time functionality.",
    },
  ],
};
export const HERO_DATA = {
  id: "home",
  backgroundImage:
    "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?auto=format&fit=crop&w=1920&q=80",
  overlay: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",

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
    }
  ],
};
export const CONTACT_DATA = {
  email: "wajihafatima689@gmail.com",
  phone: "+92 172872689",
  location: "Karachi, Pakistan",
  socialLinks: [
    // { icon: Github, link: "https://github.com/yourprofile" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/wajiha-fatima-b42497346" },
    // { icon: Twitter, link: "https://twitter.com/yourprofile" },
  ],
};