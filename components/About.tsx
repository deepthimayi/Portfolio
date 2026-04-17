"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personal, stats } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
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
          fontSize: "clamp(36px, 5vw, 56px)",
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
          fontSize: "13px",
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
      className="relative py-32 md:py-40"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Subtle top border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-16"
        >
          <span>01</span> — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ─── Left: Decorative + heading ─── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Abstract geometric mark */}
            <div className="relative w-24 h-24 mb-10" aria-hidden="true">
              <div
                className="absolute inset-0 rounded-sm"
                style={{ background: "var(--accent)", opacity: 0.15 }}
              />
              <div
                className="absolute rounded-sm"
                style={{
                  inset: "12px 0 0 12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-hover)",
                }}
              />
              <div
                className="absolute rounded-sm"
                style={{
                  top: 8,
                  left: 8,
                  width: 32,
                  height: 32,
                  background: "var(--accent)",
                  opacity: 0.7,
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-16">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Bio ─── */}
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
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
              }}
            >
              {personal.bio}
            </p>

            {/* Divider */}
            <div
              className="my-10"
              style={{
                width: 48,
                height: 1,
                background: "var(--accent)",
                opacity: 0.4,
              }}
            />

            {/* Education */}
            <div className="space-y-6">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                Education
              </p>
              <div
                className="glass rounded-xl p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                  }}
                >
                  M.S. Computer Engineering
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    marginTop: 4,
                  }}
                >
                  California State University, Fullerton · Jan &#39;24 – Dec &#39;25
                </p>
              </div>
              <div
                className="glass rounded-xl p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                  }}
                >
                  B.Tech Electronics &amp; Communication Engineering
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    marginTop: 4,
                  }}
                >
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
