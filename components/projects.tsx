"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectMediaSlider({
  images,
  videoUrl,
  title,
}: {
  images: readonly any[];
  videoUrl?: string;
  title: string;
}) {
  const mediaItems = React.useMemo(
    () => [
      ...(videoUrl
        ? [{ type: "video" as const, src: videoUrl, alt: `${title} demo video` }]
        : []),
      ...images.map((img, idx) => ({
        type: "image" as const,
        src: img,
        alt: `${title} screenshot ${idx + 1}`,
      })),
    ],
    [images, videoUrl, title]
  );

  const [activeIndex, setActiveIndex] = React.useState(0);
  const isVideoOnly = Boolean(videoUrl) && images.length === 0;

  React.useEffect(() => {
    if (mediaItems.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [mediaItems.length]);

  if (!mediaItems.length) return null;

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--cream)]/15 bg-[var(--bg)] p-2">
      <div className="relative h-64 w-full rounded-lg bg-[var(--cream)]/70">
        {mediaItems.map((item, idx) => (
          <div
            key={`${title}-media-${idx}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls={!isVideoOnly}
                autoPlay={isVideoOnly}
                muted={isVideoOnly}
                loop={isVideoOnly}
                playsInline
                className="h-full w-full rounded-lg object-contain"
                preload="metadata"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        ))}
      </div>
      {mediaItems.length > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5">
          {mediaItems.map((_, idx) => (
            <span
              key={`${title}-dot-${idx}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeIndex ? "w-5 bg-[var(--accent)]" : "w-1.5 bg-[var(--deep-navy)]/25"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full max-w-6xl">
      <SectionHeading>Projects</SectionHeading>
      <p className="readable-wide mx-auto mb-7 -mt-5 text-center text-base leading-relaxed text-[var(--text-secondary)]">
        Clean project cards with auto-sliding previews and full-image visibility.
      </p>
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {projectsData.map((project, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -90 : 90, y: 14 },
              show: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="project-card group relative overflow-hidden rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)]"
          >
            <div className="relative">
              <div className="p-3">
                <ProjectMediaSlider
                  images={project.images}
                  videoUrl={project.videoUrl}
                  title={project.title}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[var(--deep-navy)]/55 opacity-0 transition group-hover:opacity-100">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--accent)] px-4 py-2 font-medium text-[var(--on-accent)]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <BsGithub /> GitHub
                    </span>
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/55 bg-white/20 px-4 py-2 text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiExternalLink /> Live Demo
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-xl font-semibold leading-snug text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-[var(--cream)]/20 bg-[var(--cream)]/10 px-2.5 py-1 text-sm leading-snug text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
