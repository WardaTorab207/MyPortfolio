"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  index,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  images,
  videoUrl,
}: ProjectProps & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="interactive-card max-w-[52rem] overflow-hidden rounded-2xl border border-black/5 bg-white/62 p-4 sm:p-5 shadow-sm dark:bg-white/10 dark:text-white">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-[#3d6e72] dark:text-white/70">
              {description}
            </p>
          </div>

          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {videoUrl ? (
              <div className="block min-w-[16rem] snap-start overflow-hidden rounded-xl border border-black/10 sm:min-w-[17rem]">
                <video src={videoUrl} controls preload="metadata" className="h-40 w-full object-cover sm:h-44" />
              </div>
            ) : null}
            {images.map((img, index) => (
              githubUrl ? (
                <a
                  key={`${title}-${index}`}
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block min-w-[16rem] snap-start overflow-hidden rounded-xl border border-black/10 transition hover:-translate-y-1 hover:opacity-95 sm:min-w-[17rem]"
                  title="Open project GitHub"
                >
                  <Image
                    src={img}
                    alt={`${title} preview ${index + 1}`}
                    quality={95}
                    className="h-40 w-full object-cover sm:h-44"
                  />
                </a>
              ) : (
                <div key={`${title}-${index}`} className="block min-w-[16rem] snap-start overflow-hidden rounded-xl border border-black/10 sm:min-w-[17rem]">
                  <Image
                    src={img}
                    alt={`${title} preview ${index + 1}`}
                    quality={95}
                    className="h-40 w-full object-cover sm:h-44"
                  />
                </div>
              )
            ))}
          </div>

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[var(--baltic-blue)] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {githubUrl ? (
              <Link
                href={githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--deep-navy)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--ink-black)]"
              >
                <BsGithub /> GitHub
              </Link>
            ) : null}
            {liveUrl ? (
              <Link
                href={liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--baltic-blue)] px-4 py-2 text-sm font-medium text-[var(--baltic-blue)] transition hover:bg-[var(--alabaster-grey)]"
              >
                <FiExternalLink /> Live Demo
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
