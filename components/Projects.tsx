"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass glass-hover rounded-2xl p-7 flex flex-col group"
      style={{ height: "100%" }}
    >
      {/* Number */}
      <p
        className="mb-5"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
        }}
      >
        {project.number}
      </p>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: "20px",
          color: "var(--text-primary)",
          lineHeight: 1.3,
          transition: "color 0.2s ease",
        }}
      >
        <span className="group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </span>
      </h3>

      {/* Description */}
      <p
        className="mb-6 flex-1"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
        }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-flex",
              padding: "3px 10px",
              border: "1px solid var(--border-hover)",
              borderRadius: "100px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.06em",
              color: "var(--accent)",
              background: "rgba(45,212,212,0.05)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon"
          aria-label={`GitHub: ${project.title}`}
          style={{ width: 32, height: 32 }}
        >
          <GithubIcon size={14} />
        </a>
        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label={`Live demo: ${project.title}`}
            style={{ width: 32, height: 32 }}
          >
            <ExternalLink size={14} />
          </a>
        )}
        <span
          className="ml-auto"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
          }}
        >
          View Project →
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 md:py-40"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label mb-4"
        >
          <span>03</span> — Projects
        </motion.p>

        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "64px",
          }}
        >
          Things I&apos;ve built.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
