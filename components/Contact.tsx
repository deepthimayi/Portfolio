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
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ctaButtons = [
  {
    href: links.resume,
    label: "Download Resume",
    icon: FileDown,
    download: true,
    external: false,
  },
  {
    href: links.github,
    label: "GitHub ↗",
    icon: GithubIcon,
    download: false,
    external: true,
  },
  {
    href: links.linkedin,
    label: "LinkedIn ↗",
    icon: LinkedinIcon,
    download: false,
    external: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const headlineWords = ["Let's", "Build", "Something."];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-40 md:py-56 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Top border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />

      {/* Centered radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,212,212,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label mb-12 justify-center flex"
        >
          <span>04</span>&nbsp;— Contact
        </motion.p>

        {/* Headline */}
        <h2
          className="mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(48px, 9vw, 96px)",
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
              className="inline-block mr-[0.25em]"
            >
              {word === "Something." ? (
                <span style={{ color: "var(--accent)" }}>{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h2>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(15px, 2vw, 19px)",
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
          className="underline-slide inline-block mb-16 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "0.01em",
          }}
          whileHover={{ color: "var(--accent)" } as never}
        >
          <span className="flex items-center gap-3 justify-center">
            <Mail size={22} style={{ color: "var(--accent)" }} />
            {links.email}
          </span>
        </motion.a>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {ctaButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                {...(btn.download ? { download: true } : {})}
                {...(btn.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="btn-glass"
                aria-label={btn.label}
                style={{ padding: "12px 28px", fontSize: "12px" }}
              >
                <Icon size={14} />
                {btn.label}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 right-0 py-6 flex items-center justify-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}
        >
          Designed &amp; Built by {personal.name} · 2025
        </p>
      </div>
    </section>
  );
}
