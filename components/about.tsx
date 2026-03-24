"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { siteConfig } from "@/lib/site-config";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="section-slide mb-24 w-full max-w-5xl scroll-mt-28 sm:mb-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <div className="grid auto-rows-[minmax(120px,auto)] gap-4 md:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="interactive-card md:col-span-2 rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-6 sm:p-7"
        >
          <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)]">Personal Bio</h3>
          <p className="readable mt-3 text-base leading-[1.75] text-[var(--text-secondary)] sm:text-lg">
            I am <strong>{siteConfig.name}</strong>, a {siteConfig.role}. I build robust full-stack products with
            clean architecture, modern frontend experiences, and production-ready AI/ML integrations that solve real
            business problems.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="interactive-card rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-6 sm:p-7"
        >
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">Location</h3>
          <div className="mt-3 flex items-center gap-2 text-[var(--text-secondary)] leading-relaxed">
            <HiOutlineMapPin className="text-[var(--accent)]" />
            <span>{siteConfig.location}</span>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="interactive-card md:col-span-3 rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-6 sm:p-7"
        >
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">Tech Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["C# .NET", "React", "HTML", "CSS", "Bootstrap", "AI/ML", "PyTorch", "TensorFlow"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--cream)]/20 bg-[var(--cream)]/10 px-3 py-1.5 text-sm leading-snug text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.article>
      </div>
      <div className="sr-only">
        {/* Keeps role data available for accessibility context */}
        {siteConfig.role}
      </div>
    </motion.section>
  );
}
