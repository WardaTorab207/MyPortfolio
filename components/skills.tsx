"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsByCategory } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BsBraces, BsDatabaseGear, BsGear, BsRobot } from "react-icons/bs";

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <BsBraces />,
  Backend: <BsGear />,
  Databases: <BsDatabaseGear />,
  "AI / ML": <BsRobot />,
  "Tools & DevOps": <BsGear />,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const allSkills = skillsByCategory.flatMap((g) => g.skills);
  const [activeCategory, setActiveCategory] = React.useState<"All" | (typeof skillsByCategory)[number]["title"]>("All");
  const shownSkills =
    activeCategory === "All"
      ? allSkills
      : skillsByCategory.find((g) => g.title === activeCategory)?.skills ?? [];

  return (
    <section id="skills" ref={ref} className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Skills</SectionHeading>
      <motion.div className="relative overflow-hidden rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-4 sm:p-5">
        <div className="skills-marquee">
          {allSkills.concat(allSkills).map((skill, idx) => (
            <span key={`${skill}-${idx}`} className="skill-chip" title={skill} data-cursor="interactive">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skillsByCategory.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-[var(--cream)]/15 bg-[var(--surface)] p-4 text-center sm:p-5"
          >
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cream)]/10 text-[var(--accent)]">
              {iconMap[group.title]}
            </div>
            <h3 className="text-base font-semibold leading-snug text-[var(--text-primary)]">{group.title}</h3>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          data-cursor="interactive"
          onClick={() => setActiveCategory("All")}
          className={`min-h-[44px] rounded-full px-4 py-2 text-sm transition ${
            activeCategory === "All"
              ? "bg-[var(--accent)] text-[var(--on-accent)]"
              : "border border-white/15 bg-white/5 text-[var(--text-secondary)]"
          }`}
        >
          All Skills
        </button>
        {skillsByCategory.map((group) => (
          <button
            type="button"
            key={group.title}
            data-cursor="interactive"
            onClick={() => setActiveCategory(group.title)}
            className={`min-h-[44px] rounded-full px-4 py-2 text-sm transition ${
              activeCategory === group.title
                ? "bg-[var(--accent)] text-[var(--on-accent)]"
                : "border border-white/15 bg-white/5 text-[var(--text-secondary)]"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        {shownSkills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
