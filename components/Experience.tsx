"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

function ExperienceRow({ exp, index, isInView }: { exp: (typeof experience)[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "clamp(28px, 4vw, 44px)",
        paddingBottom: "clamp(28px, 4vw, 44px)",
      }}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        <div style={{ flexShrink: 0, minWidth: 120 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)", lineHeight: 1.6 }}>
            {exp.period}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(18px, 2vw, 26px)", color: "var(--text-primary)", lineHeight: 1.2, marginBottom: 6 }}>
            {exp.role}
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 20 }}>
            {exp.company} · {exp.location}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {exp.highlights.map((h) => (
              <li key={h} style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(13px, 1.3vw, 14.5px)", lineHeight: 1.75,
                color: "var(--text-secondary)", paddingLeft: 16,
                borderLeft: "1px solid var(--border-hover)",
              }}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative"
      style={{ background: "var(--bg-primary)", paddingTop: "clamp(64px, 10vw, 128px)", paddingBottom: "clamp(64px, 10vw, 128px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="page-container">
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-10">
          <span>03</span> — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "clamp(8px, 2vw, 16px)" }}
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
