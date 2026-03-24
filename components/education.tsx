"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const educationTimeline = [
  {
    title: "Bachelor of Science in Computer Engineering",
    institute: "University of Engineering and Technology (UET), Lahore",
    date: "2022 - 2026",
    detail:
      "Current undergraduate program focused on software engineering, AI/ML systems, and intelligent computing.",
    marks: "CGPA: 3.889",
  },
  {
    title: "Intermediate in Engineering",
    institute: "Doctors Public College",
    date: "2019 - 2022",
    detail: "Completed FSc Pre-Engineering with strong performance in core science subjects.",
    marks: "Marks: 1082 / 1100",
  },
  {
    title: "Matriculation",
    institute: "Doctors Public School",
    date: "2017 - 2019",
    detail: "Completed Matric with excellent academic standing.",
    marks: "Marks: 1067 / 1100",
  },
] as const;

export default function Education() {
  const { ref } = useSectionInView("Education", 0.45);

  return (
    <section id="education" ref={ref} className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-36">
      <SectionHeading>Education</SectionHeading>
      <p className="readable-wide mx-auto mb-7 -mt-5 text-center text-base leading-relaxed text-[var(--text-secondary)]">
        Academic timeline with clear milestones, grades, and progression.
      </p>

      <div className="relative">
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-[var(--accent)]/40 sm:block" />
        <div className="space-y-4">
          {educationTimeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="interactive-card relative rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/45 bg-[var(--bg)] text-[var(--accent)] sm:flex">
                  <HiAcademicCap />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                  {item.date}
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-1 text-base font-medium leading-snug text-[var(--text-secondary)]">{item.institute}</p>
              <p className="mt-3 text-base leading-[1.7] text-[var(--text-secondary)]">{item.detail}</p>
              <p className="mt-3 inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--bg)] px-3 py-1 text-sm font-semibold text-[var(--text-primary)]">
                {item.marks}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
