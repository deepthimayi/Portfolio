"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { personal } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
      }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      {/* Subtle glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{ width: "min(600px, 80vw)", height: "min(600px, 80vw)", borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }} />
      </div>

      <div className="page-container relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label mb-10">
          <span>05</span> — Contact

        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(32px, 6vw, 72px)",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Let&apos;s build{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>something.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(14px, 1.6vw, 17px)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "clamp(36px, 6vw, 60px)",
            maxWidth: 480,
          }}
        >
          Open to full-time roles, collaborations, and interesting problems.
        </motion.p>

        {/* Form — centered, max-width */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="contact-input"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}
            >
              Email
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

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role, project, or idea..."
              className="contact-input resize-none"
            />
          </div>

          {/* Status */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
            >
              <CheckCircle size={14} /> Message sent — I&apos;ll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
              style={{ color: "#f87171", fontFamily: "var(--font-mono)", fontSize: "12px" }}
            >
              <AlertCircle size={14} /> {errorMsg}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-glass-submit"
            style={{ alignSelf: "flex-start", minWidth: 160 }}
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
      </div>

      {/* Footer */}
      <div
        className="page-container relative z-10 mt-16"
        style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
          Designed &amp; Built by {personal.name} · 2025
        </p>
      </div>
    </section>
  );
}
