import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import it1Img from "@/public/it1.png";
import it2Img from "@/public/it2.png";
import it3Img from "@/public/it3.png";
import it4Img from "@/public/it4.png";
import it5Img from "@/public/it5.png";
import it6Img from "@/public/it6.png";
import it7Img from "@/public/it7.png";
import it8Img from "@/public/it8.png";
import khata1Img from "@/public/khataAPP1.jpeg";
import khata2Img from "@/public/khataapp2.jpeg";
import khata3Img from "@/public/Khataapp3.jpeg";
import khata4Img from "@/public/Khataapp4.jpeg";
import khata5Img from "@/public/KhataAPP5.jpeg";
import car1Img from "@/public/carResale1.jpg";
import car2Img from "@/public/carresale2.png";
import bank1Img from "@/public/Bank1.png";
import bank2Img from "@/public/bank2.png";
import bank3Img from "@/public/bank3.png";
import bank4Img from "@/public/bank4.png";
import bank5Img from "@/public/bank5.png";
import ec1Img from "@/public/ec.jpg";
import ec2Img from "@/public/EC2.jpg";
import ec3Img from "@/public/ec3.png";
import ec4Img from "@/public/ec4.png";
import ec5Img from "@/public/ec5.png";
import ec6Img from "@/public/ec6.png";
import ec7Img from "@/public/ec7.png";
import ec8Img from "@/public/ec8.png";
import ec9Img from "@/public/ec9.png";
import ec10Img from "@/public/ec10.png";
import ec11Img from "@/public/ec11.png";
import ec12Img from "@/public/ec12.png";
import ec13Img from "@/public/ec13.png";
import ec15_1Img from "@/public/ec15 (1).png";
import ec15_2Img from "@/public/ec15 (2).png";
import ec15_3Img from "@/public/ec15 (3).png";
import ec15_4Img from "@/public/ec15 (4).png";
import ec15_5Img from "@/public/ec15 (5).png";
import ec15_6Img from "@/public/ec15 (6).png";
import ec15_7Img from "@/public/ec15 (7).png";
import ec15_8Img from "@/public/ec15 (8).png";
import ec15_9Img from "@/public/ec15 (9).png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Engineering",
    location: "UET Lahore, Pakistan",
    description:
      "Completed BS Computer Engineering with CGPA 3.889, focused on software systems, ML, and embedded intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    type: "work",
    title: "Junior Full Stack Programmer (.NET/C#)",
    location: "Camco Manufacturing Inc. (Remote, Pakistan)",
    description:
      "Built internal systems including Kanban, time tracking, and IT ticketing tools using Blazor, .NET, C#, SQL, and Microsoft Access.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Mar 2025",
  },
  {
    type: "work",
    title: "MERN Stack Developer (Intern)",
    location: "Mercury Sols (Onsite, Pakistan)",
    description:
      "Developed full-stack apps with React, Next.js, Node.js, Express, and NestJS, and worked with MongoDB/PostgreSQL plus deployment and API testing workflows.",
    icon: React.createElement(FaReact),
    date: "Jun 2025 - Aug 2025",
  },
  {
    type: "work",
    title: "Full Stack, AI & ML Engineer",
    location: "Open to full-time opportunities",
    description:
      "Delivering production-oriented web and AI solutions including model integration, automation, and scalable backend systems.",
    icon: React.createElement(HiOutlineCodeBracketSquare),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Final Year Project - AI-Based Snore Detection & Wearable Alert System",
    description:
      "IoT-based wearable solution for real-time snore detection using CNN-based audio classification with TensorFlow Lite and ESP32-C3 deployment.",
    tags: ["AI/ML", "IoT", "TensorFlow Lite", "ESP32-C3", "Healthcare"],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "/snorinapaaVideo.mp4",
    images: [],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ecommerce Web Application (ASP.NET + SQL Server)",
    description:
      "Full-stack e-commerce system with role-based modules for Admin, Buyer, and Seller, including product, cart, and order management flows.",
    tags: ["ASP.NET", "C#", "SQL Server", "HTML", "Bootstrap"],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    images: [
      ec1Img,
      ec2Img,
      ec3Img,
      ec4Img,
      ec5Img,
      ec6Img,
      ec7Img,
      ec8Img,
      ec9Img,
      ec10Img,
      ec11Img,
      ec12Img,
      ec13Img,
      ec15_1Img,
      ec15_2Img,
      ec15_3Img,
      ec15_4Img,
      ec15_5Img,
      ec15_6Img,
      ec15_7Img,
      ec15_8Img,
      ec15_9Img,
    ],
    imageUrl: ec1Img,
  },
  {
    title: "AI-Based Car Resale Price Prediction System",
    description:
      "Machine learning project for car price forecasting with data preprocessing, feature engineering, model training, and Flask app integration.",
    tags: ["Python", "Scikit-learn", "Flask", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/WardaTorab207/AiCarResalePricePrediction",
    liveUrl: "",
    videoUrl: "",
    images: [car1Img, car2Img],
    imageUrl: car1Img,
  },
  {
    title: "IT Ticket Management System (Django)",
    description:
      "Web-based ticketing platform where employees submit issues and developers resolve them using role-based access workflows.",
    tags: ["Django", "Python", "MySQL", "RBAC", "Web App"],
    githubUrl: "https://github.com/WardaTorab207/ITTicketSystem",
    liveUrl: "",
    videoUrl: "",
    images: [it1Img, it2Img, it3Img, it4Img, it5Img, it6Img, it7Img, it8Img],
    imageUrl: it1Img,
  },
  {
    title: "Bank Management System",
    description:
      "Desktop banking application to manage clients, accounts, transactions, and authentication with practical data handling workflows.",
    tags: ["Java", "Swing", "Desktop App", "File System"],
    githubUrl: "https://github.com/WardaTorab207/BankManagementSystem",
    liveUrl: "",
    videoUrl: "",
    images: [bank1Img, bank2Img, bank3Img, bank4Img, bank5Img],
    imageUrl: bank1Img,
  },
  {
    title: "MERN Stack Projects - Mercury Sols Internship",
    description:
      "Combined internship backend projects focused on REST APIs, modular service architecture, and PostgreSQL-driven data handling.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Internship"],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    images: [rmtdevImg, corpcommentImg, wordanalyticsImg],
    imageUrl: rmtdevImg,
  },
  {
    title: "KhataApp (TypeScript + JavaScript)",
    description:
      "Practical finance and account tracking application built with modern full-stack architecture using TypeScript and JavaScript.",
    tags: ["TypeScript", "JavaScript", "Node.js", "React", "Full Stack"],
    githubUrl: "https://github.com/WardaTorab207/KhataApp",
    liveUrl: "",
    videoUrl: "",
    images: [khata1Img, khata2Img, khata3Img, khata4Img, khata5Img],
    imageUrl: khata1Img,
  },
] as const;

export const skillsByCategory = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Django",
      "Flask",
      "C# .NET",
      "Java",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server", "SQLite", "Firebase"],
  },
  {
    title: "AI / ML",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Data Preprocessing",
      "Model Training",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "Stripe", "Render", "Vercel"],
  },
] as const;
