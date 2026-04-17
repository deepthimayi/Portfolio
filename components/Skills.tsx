"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, currentlyLearning } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const pillVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 md:py-40"
      style={{ background: "var(--bg-primary)" }}
    >
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
          className="section-label mb-4"
        >
          <span>02</span> — Skills
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
          The tools I wield.
        </motion.h2>

        {/* Skill clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skills.map((cluster, ci) => (
            <motion.div
              key={cluster.cluster}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {cluster.cluster}
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {cluster.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    className="pill"
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="mb-5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Currently Exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <span key={item} className="pill pill-learning">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
