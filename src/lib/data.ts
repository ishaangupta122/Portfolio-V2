import { FaEnvelope, FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { Data } from "./types";

export const DATA: Data = {
  about: {
    image: "/ishaan_img.jpg",
    name: "Ishaan Gupta",
    title: "Web Developer",
    description:
      "I'm passionate about building modern web applications using MERN Stack.",
    resume:
      "https://drive.google.com/file/d/1JGCOPowZn3_dLo0WQAPzxGWtZdAV0TYd/view?usp=drive_link",
    mail: "ishaang2209@gmail.com",
    linkedin: "https://www.linkedin.com/in/ishaangupta05/",
    twitter: "https://x.com/ishaangupta05",
    github: "https://github.com/ishaangupta122",
    instagram: "https://www.instagram.com/ishaangupta___/",
    url: "https://ishaangupta.me",
  },

  experiences: [
    {
      id: 1,
      image: "",
      company: "TechNest Digital",
      role: "Full-Stack Engineer",
      period: "Feb 2025 – Apr 2025",
      description: [
        "Developed full-stack web applications using React, Node.js, Express, and MongoDB, integrating RESTful APIs and secure payment gateways with multi-option support.",
        "Implemented robust authentication and authorization using JWT and OAuth, ensuring secure frontend-backend communication.",
      ],
      url: "",
    },
    {
      id: 2,
      image: "",
      company: "Coreline",
      role: "Front-End Engineer",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Built responsive, pixel-perfect UIs using React and Tailwind CSS, collaborating with designers to ensure visual and functional consistency.",
        "Optimized cross-device performance and implemented reusable components with efficient Redux state management.",
      ],
      url: "https://www.coreline.com",
    },
  ],

  educations: [
    {
      id: 1,
      logo: "/tiet_logo.png",
      institution: "Thapar Institute of Engineering and Technology",
      degree: "B.Tech. in Computer Engineering",
      period: "2025 – 2028",
      url: "https://www.thapar.edu",
    },
    {
      id: 2,
      logo: "",
      institution: "Thapar Polytechnic College",
      degree: "Diploma in CSE",
      period: "2022 – 2025",
      url: "https://www.tpc.ac.in",
    },
    {
      id: 3,
      logo: "",
      institution: "Guru Nanak Foundation Public School",
      degree: "Matriculation",
      period: "2012 - 2022",
      url: "https://gnfpspatiala.org.in/",
    },
  ],

  skills: [
    { id: 1, name: "HTML", image: "/html.svg" },
    { id: 2, name: "CSS", image: "/css.svg" },
    { id: 3, name: "Tailwind CSS", image: "/tailwind.svg" },
    { id: 4, name: "Bootstrap", image: "/bootstrap.svg" },
    { id: 5, name: "JavaScript", image: "/javascript.svg" },
    { id: 6, name: "TypeScript", image: "/typescript.png" },
    // { id: 7, name: "Python", image: "/python.svg" },
    { id: 8, name: "C++", image: "/c++.svg" },
    { id: 9, name: "React.js", image: "/react.svg" },
    { id: 10, name: "Next.js", image: "/nextjs.png" },
    { id: 11, name: "Node.js", image: "/nodejs.png" },
    { id: 12, name: "MongoDB", image: "/mongodb.svg" },
    // { id: 13, name: "PostreSQL", image: "/postresql.svg" },
    { id: 14, name: "MySQL", image: "/mysql.svg" },
    { id: 15, name: "Git", image: "/git.svg" },
    { id: 16, name: "AWS", image: "/aws.svg" },
    // { id: 17, name: "DigitalOcean", image: "/digitalocean.svg" },
    { id: 18, name: "Linux", image: "/linux.png" },
    { id: 19, name: "Figma", image: "/figma.svg" },
  ],

  projects: [
    {
      id: 1,
      title: "Cloudify Frontend",
      description:
        "Built a modern and responsive UI frontend with Next.js, ShadcnUI, and TailwindCSS for Cloudify using Figma Design.",
      images: ["/cloudify_img_2.png", "/cloudify_img_1.png"],
      videos: [],
      techStack: ["Next.js", "Node.js", "TailwindCSS", "ShadcnUI"],
      websiteUrl: "https://cloudify-frontend.vercel.app/",
      sourceUrl: "https://github.com/ishaangupta122/Cloudify_Frontend.git",
    },
    {
      id: 2,
      title: "Grocery Store Frontend",
      description:
        "Built an intuitive and responsive grocery store frontend with React and TailwindCSS. Includes dynamic product listings and a shopping cart",
      images: ["/grocery_img.png"],
      videos: ["/grocery_store_video.mp4"],
      techStack: ["React", "Node.js", "TailwindCSS"],
      websiteUrl: "https://grocery-store-wheat.vercel.app/",
      sourceUrl: "https://github.com/ishaangupta122/GroceryStore.git",
    },
    {
      id: 3,
      title: "Thapar Polytechnic College",
      description:
        "Developed a comprehensive web portal for Thapar Polytechnic College using React and Node.js. Features include dynamic data fetching, responsive design, and an modern UI.",
      images: ["/tpc_img.png", "/tpc_admin_img.png"],
      videos: [],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      websiteUrl: "https://tpc-website-phi.vercel.app/",
      sourceUrl: "https://github.com/ishaangupta122/tpc-website.git",
    },
    {
      id: 4,
      title: "Course Selling Platform",
      description:
        "Engineered a full-stack platform for selling courses online using React, Node.js, and Razorpay for payments. Instructors can manage content while students securely purchase and access materials.",
      images: ["/courses_img.png"],
      videos: [],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "Razorpay",
        "PrimeReact",
      ],
      websiteUrl: "https://courses-platform-zeta.vercel.app/",
      sourceUrl: "https://github.com/ishaangupta122/CoursesPlatform.git",
    },
    {
      id: 5,
      title: "Restaurant Admin Dashboard",
      description:
        "Designed an admin dashboard for Restaurant using React, TypeScript, and PrimeReact. Management of orders, reviews, and more can be done with this dashboard.",
      images: ["/food_admin_img.png"],
      videos: [],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "PrimeReact",
      ],
      websiteUrl: "https://restaurant-platform-admin.vercel.app/",
      sourceUrl:
        "https://github.com/ishaangupta122/Restaurant-Ecommerce-Platform.git",
    },
    {
      id: 6,
      title: "Pixera (Multimedia Hub)",
      description:
        "Created Pixera, a multimedia hub leveraging the Pexels API for stunning image searches. Built with React and TailwindCSS, it offers fast search queries and a sleek, responsive gallery interface.",
      images: ["/pixera_img.png"],
      videos: [],
      techStack: [
        "React",
        "Node.js",
        "TailwindCSS",
        "Pexels API",
        "Search Query",
      ],
      websiteUrl: "https://pixera-app.vercel.app/",
      sourceUrl: "https://github.com/ishaangupta122/PixeraApp.git",
    },
  ],

  contact: {
    twitter: "https://x.com/ishaangupta05",
    linkedin: "https://www.linkedin.com/in/ishaangupta05/",
    mail: "ishaang2209@gmail.com",
  },

  socials: [
    {
      icon: FaRegFileAlt,
      label: "Resume",
      url: "https://drive.google.com/file/d/1JGCOPowZn3_dLo0WQAPzxGWtZdAV0TYd/view?usp=drive_link",
    },
    {
      icon: FaEnvelope,
      label: "Mail",
      url: "mailto:ishaang2209@gmail.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/ishaangupta122",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ishaangupta05/",
    },
    {
      icon: FaXTwitter,
      label: "X",
      url: "https://twitter.com/ishaangupta05",
    },
  ],
} as const;
