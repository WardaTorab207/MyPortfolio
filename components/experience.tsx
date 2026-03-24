"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { CgWorkAlt } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const work = experiencesData.filter((item) => item.type === "work");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-36"
    >
      <SectionHeading>Professional Experience</SectionHeading>
      <p className="readable-wide mx-auto mb-7 -mt-5 text-center text-base leading-relaxed text-[var(--text-secondary)]">
        A timeline of impactful roles, technologies, and delivery outcomes.
      </p>
      <div className="grid gap-5">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="interactive-card rounded-3xl border border-[var(--cream)]/15 bg-[var(--surface)] p-5 sm:p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[var(--bg)] p-2">
              <CgWorkAlt className="text-xl text-[var(--accent)]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">Professional Work</h3>
          </div>
          <div className="space-y-4">
            {work.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--cream)]/12 bg-[var(--bg)] p-4 sm:p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {item.date}
                </p>
                <h4 className="mt-1 text-lg font-semibold leading-snug text-[var(--text-primary)]">
                  {item.title}
                </h4>
                <p className="mt-1 text-base text-[var(--text-secondary)]">{item.location}</p>
                <p className="mt-3 text-base leading-[1.65] text-[var(--text-secondary)]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
