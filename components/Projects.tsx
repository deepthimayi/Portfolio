"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { projects, experience } from "@/data/portfolio";

function ProjectRow({ project, index, isInView }: { project: (typeof projects)[0]; index: number; isInView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="group"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="py-8 md:py-10 flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-start">
        {/* Number */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "var(--accent)",
            paddingTop: 4,
            flexShrink: 0,
            minWidth: 28,
          }}
        >
          {project.number}
        </span>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <h3
            className="group-hover:text-[var(--accent)] transition-colors duration-300"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(20px, 2.5vw, 30px)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.4vw, 15px)",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              marginBottom: 16,
              maxWidth: 560,
            }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  padding: "3px 10px",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub: ${project.title}`}
          className="btn-icon flex-shrink-0 self-start mt-1"
          style={{ width: 36, height: 36 }}
        >
          <GithubIcon size={15} />
        </a>
      </div>
    </motion.article>
  );
}

function ExperienceRow({ exp, index, isInView }: { exp: (typeof experience)[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="py-8 md:py-10 flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-start">
        {/* Period */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            paddingTop: 5,
            flexShrink: 0,
            minWidth: 100,
            lineHeight: 1.5,
          }}
        >
          {exp.period}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2vw, 26px)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            {exp.role}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {exp.company} · {exp.location}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {exp.highlights.map((h) => (
              <li
                key={h}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "clamp(13px, 1.3vw, 14.5px)",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  paddingLeft: 16,
                  borderLeft: "1px solid var(--border-hover)",
                }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative"
      style={{ background: "var(--bg-secondary)", paddingTop: "clamp(64px, 10vw, 128px)", paddingBottom: "clamp(64px, 10vw, 128px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="page-container">
        {/* Projects */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-10">
          <span>03</span> — Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "clamp(32px, 5vw, 48px)",
          }}
        >
          Things I&apos;ve built.
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.number} project={project} index={i} isInView={isInView} />
          ))}
          {/* Closing border */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        {/* Experience */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="section-label mt-20 mb-10"
        >
          <span>04</span> — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "clamp(32px, 5vw, 48px)",
          }}
        >
          Where I&apos;ve worked.
        </motion.h2>

        <div>
          {experience.map((exp, i) => (
            <ExperienceRow key={exp.role + exp.period} exp={exp} index={i} isInView={isInView} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
