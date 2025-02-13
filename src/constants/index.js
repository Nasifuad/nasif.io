import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  debuggers,
  talkhive,
  zenflow,
  ecommerce,
} from "../assets/tech";

export const socialLinks = [
  {
    name: "Github",
    icon: FiGithub,
    to: "https://github.com/Nasifuad",
  },
  {
    name: "Linkedin",
    icon: FiLinkedin,
    to: "https://www.linkedin.com/in/nasif-fuad1/",
  },
  {
    name: "Email",
    icon: FiMail,
    to: "mailto:nasifuad007@gmail.com",
  },
  {
    name: "Resume",
    icon: FiDownload,
    to: "tel:+880-1953726489",
  },
];
export const navLinks = [
  {
    name: "About Me",
    to: "#",
  },
  {
    name: "Resume",
    to: "#",
  },
  {
    name: "Contact",
    to: "#contact",
  },
  {
    name: "Skill",
    to: "#skill",
  },
  {
    name: "Projects",
    to: "#projects",
  },
];
export const projects = [
  {
    category: "MERN Application",
    title: "The Debuggers Journal",
    description:
      "A MERN application to post about daily debugging problems and solutions",
    link: "https://the-debuggers-journal-e2f6.vercel.app/",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: debuggers,
    github: "https://github.com/Nasifuad/the-debuggers-journal",
  },
  {
    category: "MERN Application",
    title: "TalkHive.io",
    description:
      "Real Time Chat Application for collaboration and communication",
    link: "https://talkhive.vercel.app/",
    tech: ["MongoDB", "Socket-io", "Express", "React", "Node.js"],
    image: talkhive,
    github: "https://github.com/Nasifuad/TalkHive",
  },
  {
    category: "Frontend Application",
    title: "Zenflow",
    description:
      "Product Landing Page for Shoes with interactive slide features and review",
    link: "https://nasifuad.github.io/ZenFlow/",
    tech: ["React", "Tailwind CSS"],
    image: zenflow,
    github: "https://github.com/Nasifuad/ZenFlow",
  },
  {
    category: "Frontend Application",
    title: "Ecommerce Product Page",
    description:
      "Customized Product page with interactive slide features and review",
    link: "https://nasifuad.github.io/Ecommarce-Product-Page/",
    tech: ["React", "Tailwind CSS"],
    image: ecommerce,
    github: "https://github.com/Nasifuad/Ecommarce-Product-Page",
  },
];
export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
