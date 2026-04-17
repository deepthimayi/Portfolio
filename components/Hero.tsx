"use client";

import { motion } from "framer-motion";
import { FileDown, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";
import { personal, links, heroStats } from "@/data/portfolio";

const wordVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
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
      className="relative min-h-screen flex items-center bg-grid noise overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Radial glow behind photo */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(45,212,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center min-h-[calc(100vh-96px)]">

          {/* ─── Left: Text ─── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Label */}
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              — Software Engineer
            </motion.p>

            {/* Name headline */}
            <h1
              className="leading-none mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block overflow-hidden">
                {firstNameWords.map((word, i) => (
                  <motion.span
                    key={word + i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    className="inline-block mr-4"
                    style={{
                      fontSize: "clamp(52px, 8vw, 100px)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {lastNameWords.map((word, i) => (
                  <motion.span
                    key={word + i}
                    custom={i + firstNameWords.length}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    className="inline-block"
                    style={{
                      fontSize: "clamp(52px, 8vw, 100px)",
                      fontWeight: 600,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-8 mb-10"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "18px",
                      color: "var(--accent)",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <a
                href={links.resume}
                download
                className="btn-glass"
                aria-label="Download Resume"
              >
                <FileDown size={14} />
                Resume
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
                GitHub ↗
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          {/* ─── Right: Photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Accent border offset */}
              <div
                aria-hidden="true"
                className="absolute -inset-[2px] rounded-2xl"
                style={{
                  background: "var(--accent)",
                  transform: "translate(8px, 8px)",
                  opacity: 0.3,
                  zIndex: 0,
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "clamp(280px, 38vw, 480px)",
                  aspectRatio: "4/5",
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
                    filter: "grayscale(15%) contrast(1.08) sepia(0.08)",
                  }}
                />
                {/* Grain overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(5,10,10,0.6) 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown size={14} />
        <span>scroll</span>
      </div>
    </section>
  );
}
