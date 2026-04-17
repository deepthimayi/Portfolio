"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { links, personal } from "@/data/portfolio";

const wordVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ctaButtons = [
  { href: links.resume, label: "Download Resume", icon: FileDown, download: true, external: false },
  { href: links.github, label: "GitHub ↗", icon: GithubIcon, download: false, external: true },
  { href: links.linkedin, label: "LinkedIn ↗", icon: LinkedinIcon, download: false, external: true },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const headlineWords = ["Let's", "Build", "Something."];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "clamp(80px, 12vw, 180px)", paddingBottom: "clamp(100px, 14vw, 200px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      {/* Glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{ width: "min(700px, 90vw)", height: "min(700px, 90vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,212,212,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 text-center relative z-10">
        {/* Section label */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-8 md:mb-12 flex justify-center">
          <span>04</span>&nbsp;— Contact
        </motion.p>

        {/* Headline */}
        <h2
          className="mb-6 md:mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(40px, 9vw, 96px)",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={wordVariant}
              className="inline-block mr-[0.2em]"
            >
              {word === "Something." ? (
                <span style={{ color: "var(--accent)" }}>{word}</span>
              ) : word}
            </motion.span>
          ))}
        </h2>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-8 md:mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          Open to full-time roles, collaborations, and interesting problems.
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${links.email}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="underline-slide inline-block mb-10 md:mb-14 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(15px, 3vw, 26px)",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          <span className="flex items-center gap-3 justify-center flex-wrap">
            <Mail size={20} style={{ color: "var(--accent)", flexShrink: 0 }} />
            <span className="break-all sm:break-normal">{links.email}</span>
          </span>
        </motion.a>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {ctaButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                {...(btn.download ? { download: true } : {})}
                {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn-glass"
                aria-label={btn.label}
                style={{ padding: "11px 22px", fontSize: "11px" }}
              >
                <Icon size={13} />
                {btn.label}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Footer — relative flow, not absolute, so it never overlaps */}
      <div
        className="relative z-10 mt-16 md:mt-20 mx-5 sm:mx-8 md:mx-12 pt-6 flex items-center justify-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)", textAlign: "center" }}>
          Designed &amp; Built by {personal.name} · 2025
        </p>
      </div>
    </section>
  );
}
