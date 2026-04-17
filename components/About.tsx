"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, stats } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col"
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 600,
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span
        className="mt-2"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "12px",
          color: "var(--text-secondary)",
          letterSpacing: "0.04em",
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
      className="relative py-20 md:py-28 lg:py-36"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-10 md:mb-16"
        >
          <span>01</span> — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* ─── Left ─── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Geometric mark */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-8" aria-hidden="true">
              <div className="absolute inset-0 rounded-sm" style={{ background: "var(--accent)", opacity: 0.15 }} />
              <div
                className="absolute rounded-sm"
                style={{ inset: "10px 0 0 10px", background: "var(--bg-card)", border: "1px solid var(--border-hover)" }}
              />
              <div
                className="absolute rounded-sm"
                style={{ top: 6, left: 6, width: 26, height: 26, background: "var(--accent)", opacity: 0.7 }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 60px)",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Engineer by craft,
              <br />
              <em style={{ color: "var(--accent)" }}>problem-solver</em>
              <br />
              by nature.
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10 md:mt-14">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>

          {/* ─── Right ─── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.8vw, 18px)",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
              }}
            >
              {personal.bio}
            </p>

            <div
              className="my-8 md:my-10"
              style={{ width: 48, height: 1, background: "var(--accent)", opacity: 0.4 }}
            />

            {/* Education */}
            <div className="space-y-4">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                Education
              </p>
              <div className="glass rounded-xl p-4 sm:p-5">
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "14px", color: "var(--text-primary)" }}>
                  M.S. Computer Engineering
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "13px", color: "var(--text-secondary)", marginTop: 4 }}>
                  Cal State Fullerton · Jan &#39;24 – Dec &#39;25 · GPA 3.94
                </p>
              </div>
              <div className="glass rounded-xl p-4 sm:p-5">
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "14px", color: "var(--text-primary)" }}>
                  B.Tech Electronics &amp; Communication
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "13px", color: "var(--text-secondary)", marginTop: 4 }}>
                  BVRIT Hyderabad · Aug &#39;17 – Aug &#39;21
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
