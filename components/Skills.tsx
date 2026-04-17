"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

type Skill = { name: string; icon: string | null; color: string; useColored: boolean };
type SkillCluster = { cluster: string; items: Skill[] };

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 7,
        background: `${skill.color}18`,
        border: `1px solid ${skill.color}35`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {skill.icon ? (
        <i
          className={skill.useColored ? `${skill.icon} colored` : skill.icon}
          style={{
            fontSize: 16,
            lineHeight: 1,
            display: "block",
            ...(!skill.useColored ? { color: skill.color } : {}),
          }}
        />
      ) : (
        /* Fallback: colored dot for skills without devicon */
        <div
          style={{ width: 9, height: 9, borderRadius: "50%", background: skill.color }}
        />
      )}
    </div>
  );
}

function SkillCard({ cluster, delay }: { cluster: SkillCluster; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid var(--border-hover)",
        background: "var(--bg-card)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header — teal-tinted, matches site palette */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(45,212,212,0.12) 0%, rgba(45,212,212,0.04) 100%)",
          borderBottom: "1px solid var(--border-hover)",
          padding: "13px 18px 12px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: 0,
          }}
        >
          {cluster.cluster}
        </h3>
      </div>

      {/* Skill rows */}
      <div style={{ padding: "14px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
        {cluster.items.map((skill) => (
          <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <SkillIcon skill={skill} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "13px",
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

        {/* 2 cols mobile → 3 cols tablet → 4 cols desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: "clamp(10px, 1.5vw, 18px)" }}
        >
          {skills.map((cluster, i) => (
            <SkillCard key={cluster.cluster} cluster={cluster} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
