"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

type SkillCluster = (typeof skills)[0];

function SkillCard({ cluster, delay }: { cluster: SkillCluster; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid var(--border-hover)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Gradient header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${cluster.gradientA} 0%, ${cluster.gradientB} 100%)`,
          padding: "14px 20px 13px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: 0,
          }}
        >
          {cluster.cluster}
        </h3>
      </div>

      {/* Skills list */}
      <div
        style={{
          background: "var(--bg-card)",
          padding: "16px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 11,
        }}
      >
        {cluster.items.map((skill) => (
          <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: 11 }}>
            {/* Colored icon square */}
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                background: `${skill.color}22`,
                border: `1px solid ${skill.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: skill.color }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "13.5px",
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative"
      style={{
        background: "var(--bg-secondary)",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
      }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="page-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label mb-10"
        >
          <span>02</span> — Skills
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
            marginBottom: "clamp(36px, 6vw, 56px)",
          }}
        >
          The tools I wield.
        </motion.h2>

        {/* Card grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(14px, 2vw, 22px)" }}
        >
          {skills.map((cluster, i) => (
            <SkillCard key={cluster.cluster} cluster={cluster} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
