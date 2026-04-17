"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileDown, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
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
  { href: links.resume, label: "Resume", icon: FileDown, download: true, external: false },
  { href: links.github, label: "GitHub ↗", icon: GithubIcon, download: false, external: true },
  { href: links.linkedin, label: "LinkedIn ↗", icon: LinkedinIcon, download: false, external: true },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const headlineWords = ["Let's", "Build", "Something."];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "clamp(80px, 12vw, 160px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      {/* Glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{ width: "min(700px, 90vw)", height: "min(700px, 90vw)", borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section label */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-8 md:mb-12 flex justify-center text-center">
          <span>04</span>&nbsp;— Contact
        </motion.p>

        {/* Headline */}
        <h2
          className="mb-5 md:mb-6 text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(38px, 9vw, 92px)", lineHeight: 1.05, color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {headlineWords.map((word, i) => (
            <motion.span key={word + i} custom={i} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={wordVariant} className="inline-block mr-[0.2em]">
              {word === "Something." ? <span style={{ color: "var(--accent)" }}>{word}</span> : word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }}
          className="text-center mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(14px, 2vw, 18px)", color: "var(--text-secondary)", lineHeight: 1.6 }}
        >
          Open to full-time roles, collaborations, and interesting problems.
        </motion.p>

        {/* ─── Contact form + sidebar layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 md:gap-8">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Deepthimayi"
                  className="contact-input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact-input"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role, project, or idea..."
                className="contact-input resize-none"
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                <CheckCircle size={15} /> Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2" style={{ color: "#f87171", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                <AlertCircle size={15} /> {errorMsg}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-glass-submit"
              aria-label="Send message"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2 justify-center">
                  <span className="loading-dot" /> Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2 justify-center">
                  <Send size={14} /> Send Message
                </span>
              )}
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55 }}
            className="flex flex-col gap-4"
          >
            {/* Email card */}
            <div className="glass rounded-2xl p-5 flex flex-col gap-3">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Email</p>
              <a
                href={`mailto:${links.email}`}
                className="underline-slide flex items-start gap-2 transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "13px", color: "var(--text-primary)", wordBreak: "break-all" }}
              >
                <Mail size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                {links.email}
              </a>
            </div>

            {/* Links card */}
            <div className="glass rounded-2xl p-5 flex flex-col gap-3">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Links</p>
              <div className="flex flex-col gap-2">
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
                      style={{ justifyContent: "center", fontSize: "11px", padding: "9px 16px" }}
                    >
                      <Icon size={13} /> {btn.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative z-10 mt-14 md:mt-20 mx-5 sm:mx-8 md:mx-12 pt-6 flex items-center justify-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)", textAlign: "center" }}>
          Designed &amp; Built by {personal.name} · 2025
        </p>
      </div>
    </section>
  );
}
