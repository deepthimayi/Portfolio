"use client";

import { motion } from "framer-motion";
import { FileDown, ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";
import { personal, links, heroStats } from "@/data/portfolio";

const wordVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const firstNameWords = personal.nameFirst.split(" ");
  const lastNameWords = personal.nameLast.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >

      {/* Glow behind photo */}
      <div
        aria-hidden="true"
        className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "clamp(300px, 45vw, 700px)",
          height: "clamp(300px, 45vw, 700px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      {/* ─── Content wrapper ─── */}
      <div className="page-container relative z-10 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100svh-88px)]">

          {/* ── Left: Text ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}>
                — Software Engineer
              </span>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 10px",
                borderRadius: 100,
                border: "1px solid rgba(45,212,212,0.35)",
                background: "rgba(45,212,212,0.07)",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2dd4d4", display: "inline-block", boxShadow: "0 0 6px #2dd4d4" }} />
                Open to roles · Bay Area / Remote
              </span>
            </motion.div>

            <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 1 }} className="mb-0">
              <span className="block pb-1" style={{ overflowY: "clip" }}>
                {firstNameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    className="inline-block mr-3"
                    style={{
                      fontSize: "clamp(40px, 6vw, 88px)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block pb-2" style={{ overflowY: "clip" }}>
                {lastNameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i + firstNameWords.length}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    className="inline-block"
                    style={{
                      fontSize: "clamp(40px, 6vw, 88px)",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.8vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: 480,
                marginTop: "clamp(12px, 2vw, 20px)",
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-7"
              style={{ marginTop: "clamp(20px, 3vw, 32px)", marginBottom: "clamp(24px, 3.5vw, 40px)" }}
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(16px, 2vw, 20px)", color: "var(--accent)", fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-3">
              <a href={links.resume} download className="btn-glass" aria-label="Download Resume">
                <FileDown size={14} /> Resume
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-glass" aria-label="GitHub">
                <GithubIcon size={14} /> GitHub ↗
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-glass" aria-label="LinkedIn">
                <LinkedinIcon size={14} /> LinkedIn ↗
              </a>
              <a
                href="mailto:deepthimayip@gmail.com?subject=Reaching%20Out%20to%20you%20from%20your%20portfolio"
                className="btn-glass"
                aria-label="Let's Connect"
              >
                <Mail size={14} /> Let&apos;s Connect
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              {/* Offset accent frame */}
              <div
                aria-hidden="true"
                className="absolute rounded-2xl"
                style={{
                  inset: 0,
                  background: "var(--accent)",
                  opacity: 0.18,
                  transform: "translate(10px, 10px)",
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "clamp(200px, 36vw, 420px)",
                  aspectRatio: "3 / 4",
                  border: "1px solid var(--border-hover)",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/images/deepthimayi.jpg"
                  alt="Deepthimayi Pesala"
                  fill
                  priority
                  className="object-cover"
                  style={{
                    objectPosition: "center 65%",
                    filter: "contrast(1.04) brightness(1.01) saturate(0.95)",
                  }}
                />
                {/* Very subtle bottom vignette */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(5,10,10,0.25) 100%)" }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown size={13} />
        <span>scroll</span>
      </div>
    </section>
  );
}
