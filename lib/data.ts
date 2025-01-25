import React from "react";
import {CgGames, CgWorkAlt} from "react-icons/cg";
import {FaBible, FaChurch, FaCoins, FaCompass, FaReact, FaSketch} from "react-icons/fa";
import {LuGamepad2, LuGraduationCap} from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/Editor.png";
import wordanalyticsImg from "@/public/portscanner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "College MiniProject",
    location: "solapur, IN",
    description:
      "I made a Ecommerce Website.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "A Gamer",
    location: "",
    description:
      "I like to play various games, like Pc Games -- Counter Strike 2, Fortnite, Resident Village 8, MineCraft, Forza Horizon 5, GTA 5 Etc. Phone Games -- granny, Subway Suffer ",
    icon: React.createElement(LuGamepad2),
    date: "2010 - 2025",
  },
  {
    title: "a historophile",
    location: "",
    description:
      "Passionate about history, exploring different eras and understanding their impact on the present.",
    icon: React.createElement(FaCompass),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BlogSite",
    description:
    "I built a simple blog site using React, MongoDB, and Tailwind. The platform allows users to create, read, and comment on blog posts, providing a seamless and user-friendly experience.",
    tags: ["React", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Code Editor",
    description:
    "Working on Developing a custom code editor inspired by VS Code, with features like syntax highlighting, auto-completion, and file navigation.",
    tags: ["prisma", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Port Scanner",
    description: "A fast and efficient tool to scan IP addresses and identify open ports, helping users assess network security and potential vulnerabilities." ,
    tags: [ "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "OSINT",
  "Express",
  "PostgreSQL",
  "Python",
  "Network security",
  "Framer Motion",
] as const;
