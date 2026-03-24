"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { siteConfig } from "@/lib/site-config";
import Magnetic from "./magnetic";

const ROLE_ROTATION = ["Full Stack Developer", "UI Designer", "AI Engineer"] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const target = ROLE_ROTATION[roleIndex];
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(target);
      const switcher = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLE_ROTATION.length);
      }, 2800);
      return () => clearTimeout(switcher);
    }

    let i = 0;
    setTyped("");
    const timer = setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) clearInterval(timer);
    }, 42);
    const switcher = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLE_ROTATION.length);
    }, 2200);
    return () => {
      clearInterval(timer);
      clearTimeout(switcher);
    };
  }, [roleIndex]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-10 w-full max-w-6xl scroll-mt-[100rem] sm:mb-2"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          <h1 className="font-display text-4xl font-bold leading-[1.15] text-[var(--text-primary)] sm:text-5xl md:text-[2.75rem]">
            Hi, I&apos;m {siteConfig.name}
          </h1>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            <span className="text-[var(--accent)]">{typed}</span>
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          </p>
          <p className="readable max-w-xl text-[var(--text-secondary)] leading-relaxed">{siteConfig.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <Link
                href="#contact"
                data-cursor="interactive"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[var(--on-accent)]"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Let&apos;s Talk <BsArrowRight />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                data-cursor="interactive"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[var(--cream)]/25 bg-[var(--cream)]/10 px-6 py-3 text-[var(--text-primary)]"
                href={siteConfig.resumePath}
                download
              >
                Resume <HiDownload />
              </a>
            </Magnetic>
          </div>
          <div className="flex gap-3">
            <Magnetic>
              <a data-cursor="interactive" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="social-pill">
                <BsLinkedin />
              </a>
            </Magnetic>
            <Magnetic>
              <a data-cursor="interactive" href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="social-pill">
                <BsGithub />
              </a>
            </Magnetic>
            <Magnetic>
              <a data-cursor="interactive" href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" className="social-pill">
                <FaTwitter />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          <div className="glow-ring">
            <Image
              src="/myPic.jpeg"
              alt={`${siteConfig.name} portrait`}
              width={320}
              height={320}
              priority
              className="h-64 w-64 rounded-3xl object-cover sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="mouse-scroll">
          <span></span>
        </div>
      </div>
    </section>
  );
}
