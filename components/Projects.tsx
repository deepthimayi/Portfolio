"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[0];

/* ── Per-project SVG art ── */
function ProjectArt({ slug, accent }: { slug: string; accent: string }) {
  const op = (o: number) => `${accent}${Math.round(o * 255).toString(16).padStart(2, "0")}`;

  if (slug === "rag-chatbot") return (
    <svg viewBox="0 0 120 80" fill="none" style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", width: "38%", opacity: 0.7 }}>
      {/* Document stack */}
      <rect x="30" y="18" width="52" height="64" rx="4" fill={op(0.08)} stroke={op(0.3)} strokeWidth="1.2"/>
      <rect x="22" y="12" width="52" height="64" rx="4" fill={op(0.1)} stroke={op(0.4)} strokeWidth="1.2"/>
      <line x1="32" y1="28" x2="64" y2="28" stroke={op(0.5)} strokeWidth="1.2"/>
      <line x1="32" y1="36" x2="64" y2="36" stroke={op(0.4)} strokeWidth="1.2"/>
      <line x1="32" y1="44" x2="54" y2="44" stroke={op(0.3)} strokeWidth="1.2"/>
      {/* Search circle */}
      <circle cx="76" cy="56" r="13" fill={op(0.12)} stroke={accent} strokeWidth="1.5"/>
      <line x1="86" y1="66" x2="94" y2="74" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
      <line x1="68" y1="56" x2="82" y2="56" stroke={accent} strokeWidth="1.2"/>
      <line x1="76" y1="48" x2="76" y2="64" stroke={accent} strokeWidth="1.2"/>
    </svg>
  );

  if (slug === "food-delivery-app") return (
    <svg viewBox="0 0 120 80" fill="none" style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", width: "38%", opacity: 0.75 }}>
      {/* Map pin */}
      <path d="M60 10 C48 10 40 20 40 30 C40 46 60 66 60 66 C60 66 80 46 80 30 C80 20 72 10 60 10Z" fill={op(0.12)} stroke={accent} strokeWidth="1.5"/>
      <circle cx="60" cy="30" r="8" fill={op(0.2)} stroke={accent} strokeWidth="1.2"/>
      {/* Route dots */}
      <circle cx="20" cy="60" r="4" fill={accent} opacity="0.6"/>
      <circle cx="100" cy="60" r="4" fill={accent} opacity="0.6"/>
      <path d="M24 60 Q60 70 96 60" stroke={op(0.4)} strokeWidth="1.2" strokeDasharray="4 3"/>
    </svg>
  );

  if (slug === "performance-testing") return (
    <svg viewBox="0 0 120 80" fill="none" style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: "42%", opacity: 0.75 }}>
      {/* Bar chart */}
      <rect x="14" y="52" width="14" height="18" rx="2" fill={op(0.15)} stroke={op(0.5)} strokeWidth="1.2"/>
      <rect x="34" y="38" width="14" height="32" rx="2" fill={op(0.2)} stroke={op(0.6)} strokeWidth="1.2"/>
      <rect x="54" y="24" width="14" height="46" rx="2" fill={op(0.28)} stroke={accent} strokeWidth="1.5"/>
      <rect x="74" y="44" width="14" height="26" rx="2" fill={op(0.18)} stroke={op(0.5)} strokeWidth="1.2"/>
      <rect x="94" y="30" width="14" height="40" rx="2" fill={op(0.22)} stroke={op(0.55)} strokeWidth="1.2"/>
      {/* Trend line */}
      <path d="M21 52 L41 38 L61 22 L81 44 L101 28" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="61" cy="22" r="3" fill={accent}/>
    </svg>
  );

  if (slug === "eeg-deception-detection") return (
    <svg viewBox="0 0 140 60" fill="none" style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "55%", opacity: 0.7 }}>
      {/* EEG wave */}
      <path d="M0 30 L18 30 L24 10 L30 50 L36 30 L46 30 L52 18 L58 42 L64 30 L80 30 L86 8 L92 52 L98 30 L114 30 L120 22 L126 38 L132 30 L140 30"
        stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Electrode dots */}
      <circle cx="24" cy="10" r="2.5" fill={accent} opacity="0.8"/>
      <circle cx="86" cy="8" r="2.5" fill={accent} opacity="0.8"/>
      <circle cx="52" cy="18" r="2" fill={accent} opacity="0.5"/>
    </svg>
  );

  if (slug === "morning-briefing-bot") return (
    <svg viewBox="0 0 100 100" fill="none" style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", width: "34%", opacity: 0.75 }}>
      {/* Sun */}
      <circle cx="50" cy="50" r="18" fill={op(0.15)} stroke={accent} strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="10" fill={op(0.25)} stroke={accent} strokeWidth="1.2"/>
      {/* Rays */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r = deg * Math.PI / 180;
        const x1 = 50 + 22 * Math.cos(r); const y1 = 50 + 22 * Math.sin(r);
        const x2 = 50 + 30 * Math.cos(r); const y2 = 50 + 30 * Math.sin(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>;
      })}
      {/* Notification badge */}
      <rect x="62" y="8" width="28" height="18" rx="4" fill={op(0.2)} stroke={op(0.6)} strokeWidth="1"/>
      <line x1="68" y1="14" x2="84" y2="14" stroke={op(0.7)} strokeWidth="1"/>
      <line x1="68" y1="19" x2="78" y2="19" stroke={op(0.5)} strokeWidth="1"/>
    </svg>
  );

  return null;
}

/* ── CSS art thumbnail unique to each project ── */
function ProjectThumbnail({ project }: { project: Project }) {
  const { gradientA, gradientB, accent, title, number, featured, slug } = project as Project & { featured?: boolean; slug: string };

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
      {/* Featured badge */}
      {featured && (
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 10px",
            borderRadius: 100,
            background: "rgba(168,85,247,0.18)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(168,85,247,0.45)",
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: "#c084fc",
          }}
        >
          ★ Featured
        </div>
      )}

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      {/* Project-specific SVG art */}
      <ProjectArt slug={slug} accent={accent} />

      {/* Bottom overlay with name */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${gradientA}ee 0%, transparent 55%)`,
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

function ProjectRow({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const p = project as Project & {
    featured?: boolean;
    contextNote?: string;
    architectureNote?: string;
    technicalNote?: string;
    calloutBadge?: string;
    codeUrl?: string;
    demoUrl?: string;
    notebookUrl?: string;
  };

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
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <ProjectThumbnail project={p} />
          </motion.div>
        </div>

        {/* Content */}
        <div className={`flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          {/* Context note (e.g. "Research project — ...") */}
          {p.contextNote && (
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 8,
            }}>
              {p.contextNote}
            </span>
          )}

          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 14 }}>
            {project.number}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "var(--text-primary)",
              lineHeight: 1.15,
              marginBottom: 8,
            }}
          >
            {project.title}
          </h3>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: 20 }}>
            {project.tagline}
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(13.5px, 1.4vw, 15.5px)",
            lineHeight: 1.85,
            color: "var(--text-secondary)",
            marginBottom: 16,
          }}>
            {project.description}
          </p>

          {/* Architecture / technical note */}
          {(p.architectureNote || p.technicalNote) && (
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.04em",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 16,
              padding: "8px 12px",
              borderLeft: "2px solid var(--border-hover)",
              background: "rgba(45,212,212,0.03)",
              borderRadius: "0 6px 6px 0",
            }}>
              {p.architectureNote ?? p.technicalNote}
            </p>
          )}

          {/* Results callout badge */}
          {p.calloutBadge && (
            <div style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.35)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#c084fc",
              marginBottom: 20,
              fontWeight: 600,
            }}>
              {p.calloutBadge}
            </div>
          )}

          {/* Tech pills */}
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

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {p.codeUrl && (
              <a
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ fontSize: "11px", padding: "9px 20px", gap: 8 }}
              >
                <GithubIcon size={12} /> View Code ↗
              </a>
            )}
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ fontSize: "11px", padding: "9px 20px", gap: 8 }}
              >
                <ExternalLink size={12} /> Live Demo ↗
              </a>
            )}
            {p.notebookUrl && (
              <a
                href={p.notebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ fontSize: "11px", padding: "9px 20px", gap: 8 }}
              >
                <BookOpen size={12} /> View Notebook ↗
              </a>
            )}
            {project.github && (
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
            )}
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

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} isInView={isInView} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
          style={{ marginTop: "clamp(32px, 5vw, 48px)" }}
        >
          <span style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(14px, 1.4vw, 16px)",
            color: "var(--text-muted)",
          }}>
            Want to see more?
          </span>
          <a
            href="https://github.com/deepthimayi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
            style={{ fontSize: "11px" }}
          >
            <GithubIcon size={13} /> View all repositories ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
