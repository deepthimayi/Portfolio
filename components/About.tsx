"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, stats } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col"
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span
        className="mt-1"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ background: "var(--bg-secondary)", paddingTop: "clamp(64px, 10vw, 128px)", paddingBottom: "clamp(64px, 10vw, 128px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          className="section-label mb-10"
        >
          <span>01</span> — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left ── */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {/* Geometric mark */}
            <div className="relative mb-8" style={{ width: 56, height: 56 }} aria-hidden="true">
              <div className="absolute inset-0 rounded" style={{ background: "var(--accent)", opacity: 0.15 }} />
              <div className="absolute rounded" style={{ inset: "8px 0 0 8px", background: "var(--bg-card)", border: "1px solid var(--border-hover)" }} />
              <div className="absolute rounded" style={{ top: 5, left: 5, width: 22, height: 22, background: "var(--accent)", opacity: 0.75 }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 4.5vw, 52px)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Engineer by craft,
              <br />
              <em style={{ color: "var(--accent)", fontWeight: 400 }}>problem-solver</em>
              <br />
              by nature.
            </h2>

            {/* Stats — 2×2 grid */}
            <div
              className="grid grid-cols-2 mt-10"
              style={{ gap: "clamp(20px, 4vw, 40px)" }}
            >
              {stats.map((s, i) => (
                <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.15 } as never}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.6vw, 17.5px)",
                lineHeight: 1.9,
                color: "var(--text-secondary)",
              }}
            >
              {personal.bio}
            </p>

            <div style={{ width: 40, height: 1, background: "var(--accent)", opacity: 0.45, margin: "clamp(24px, 4vw, 36px) 0" }} />

            {/* Education */}
            <div className="space-y-3">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>
                Education
              </p>

              {[
                { degree: "M.S. Computer Engineering", school: "Cal State Fullerton", period: "Jan '24 – Dec '25", note: "GPA 3.94" },
                { degree: "B.Tech Electronics & Communication", school: "BVRIT Hyderabad", period: "Aug '17 – Aug '21", note: "" },
              ].map((edu) => (
                <div key={edu.degree} className="glass rounded-xl p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "14px", color: "var(--text-primary)" }}>
                        {edu.degree}
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "13px", color: "var(--text-secondary)", marginTop: 3 }}>
                        {edu.school} · {edu.period}
                      </p>
                    </div>
                    {edu.note && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.08em",
                          color: "var(--accent)",
                          border: "1px solid var(--border-hover)",
                          borderRadius: "100px",
                          padding: "2px 10px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {edu.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
