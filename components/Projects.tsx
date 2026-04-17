"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

/* ── CSS art thumbnail unique to each project ── */
function ProjectThumbnail({ project }: { project: (typeof projects)[0] }) {
  const { gradientA, gradientB, accent, title, number } = project;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        borderRadius: 14,
        overflow: "hidden",
        background: `linear-gradient(135deg, ${gradientA} 0%, ${gradientB} 100%)`,
        border: "1px solid var(--border)",
        flexShrink: 0,
      }}
    >
      {/* Decorative rings */}
      <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", border: `1px solid ${accent}22` }} />
      <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: `1px solid ${accent}33` }} />

      {/* Accent dot cluster */}
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: accent, opacity: 0.9 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: accent, opacity: 0.5 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: accent, opacity: 0.25 }} />
      </div>

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      {/* Bottom overlay with name */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${gradientA}ee 0%, transparent 50%)`,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "20px 22px",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", color: accent, marginBottom: 6 }}>
          {number}
        </span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 600, color: "#f0f7f7", lineHeight: 1.2 }}>
          {title}
        </span>
      </div>
    </div>
  );
}

function ProjectRow({ project, index, isInView }: { project: (typeof projects)[0]; index: number; isInView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "clamp(36px, 5vw, 56px)",
        paddingBottom: "clamp(36px, 5vw, 56px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 items-center">

        {/* Thumbnail */}
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <ProjectThumbnail project={project} />
            </motion.div>
          </Link>
        </div>

        {/* Content */}
        <div className={`flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 14 }}>
            {project.number}
          </span>

          <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
            <h3
              className="group"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(22px, 3vw, 38px)",
                color: "var(--text-primary)",
                lineHeight: 1.15,
                marginBottom: 8,
                transition: "color 0.25s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
            >
              {project.title}
            </h3>
          </Link>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: 20 }}>
            {project.tagline}
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(13.5px, 1.4vw, 15.5px)",
            lineHeight: 1.85,
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} style={{
                display: "inline-flex", padding: "4px 12px",
                border: "1px solid var(--border-hover)", borderRadius: "100px",
                fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.06em",
                color: "var(--accent)", background: "rgba(45,212,212,0.05)",
              }}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="btn-glass"
              style={{ fontSize: "11px", padding: "9px 20px", gap: 8 }}
            >
              View Details <ArrowRight size={13} />
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label={`GitHub: ${project.title}`}
              style={{ width: 38, height: 38 }}
            >
              <GithubIcon size={15} />
            </a>
          </div>
        </div>
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
      className="relative"
      style={{ background: "var(--bg-secondary)", paddingTop: "clamp(64px, 10vw, 128px)", paddingBottom: "clamp(64px, 10vw, 128px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="page-container">
        {/* Projects header */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-10">
          <span>04</span> — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "clamp(8px, 2vw, 16px)" }}
        >
          Things I&apos;ve built.
        </motion.h2>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} isInView={isInView} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

      </div>
    </section>
  );
}
