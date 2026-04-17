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
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 pt-20 sm:pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 md:gap-10 lg:gap-8 items-center min-h-[calc(100svh-80px)]">

          {/* ─── Photo (top on mobile/tablet, right on desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Accent offset border */}
              <div
                aria-hidden="true"
                className="absolute -inset-[2px] rounded-2xl"
                style={{ background: "var(--accent)", transform: "translate(6px, 6px)", opacity: 0.2, zIndex: 0 }}
              />
              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  /* Phone: 70vw capped at 280px
                     Tablet (md): 42vw capped at 380px
                     Laptop/Desktop (lg+): fluid up to 460px */
                  width: "clamp(220px, 70vw, 280px)",
                  aspectRatio: "3/4",
                  border: "1px solid var(--border-hover)",
                  zIndex: 1,
                }}
              >
                <style>{`
                  @media (min-width: 768px)  { .hero-photo { width: clamp(300px, 42vw, 380px) !important; } }
                  @media (min-width: 1024px) { .hero-photo { width: clamp(300px, 34vw, 420px) !important; } }
                  @media (min-width: 1280px) { .hero-photo { width: clamp(340px, 32vw, 460px) !important; } }
                `}</style>
                <div
                  className="hero-photo relative overflow-hidden rounded-2xl"
                  style={{
                    width: "clamp(220px, 70vw, 280px)",
                    aspectRatio: "3/4",
                    border: "1px solid var(--border-hover)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/images/deepthimayi.jpg"
                    alt="Deepthimayi Pesala"
                    fill
                    priority
                    className="object-cover object-top"
                    style={{ filter: "grayscale(8%) contrast(1.04) brightness(1.02)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(5,10,10,0.4) 100%)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Text ─── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.p
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="mb-4 sm:mb-5"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}
            >
              — Software Engineer
            </motion.p>

            <h1 className="leading-none mb-2" style={{ fontFamily: "var(--font-display)" }}>
              <span className="block overflow-hidden">
                {firstNameWords.map((word, i) => (
                  <motion.span
                    key={word + i} custom={i} initial="hidden" animate="visible" variants={wordVariant}
                    className="inline-block mr-3"
                    style={{ fontSize: "clamp(40px, 9vw, 96px)", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {lastNameWords.map((word, i) => (
                  <motion.span
                    key={word + i} custom={i + firstNameWords.length} initial="hidden" animate="visible" variants={wordVariant}
                    className="inline-block"
                    style={{ fontSize: "clamp(40px, 9vw, 96px)", fontWeight: 600, color: "var(--accent)", lineHeight: 1.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="mt-4 mb-6 sm:mt-5 sm:mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(14px, 2vw, 18px)", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "500px" }}
            >
              {personal.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-5 sm:gap-8 mb-7 sm:mb-10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(13px, 2vw, 17px)", color: "var(--accent)", fontWeight: 700 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-2 sm:gap-3">
              <a href={links.resume} download className="btn-glass" aria-label="Download Resume">
                <FileDown size={13} /> Resume
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-glass" aria-label="GitHub">
                <GithubIcon size={13} /> GitHub ↗
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-glass" aria-label="LinkedIn">
                <LinkedinIcon size={13} /> LinkedIn ↗
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown size={13} />
        <span>scroll</span>
      </div>
    </section>
  );
}
