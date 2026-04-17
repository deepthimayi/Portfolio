import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── CSS art "screenshot" panels unique to each project ── */
function RagArt() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Document list panel */}
      <div style={{ background: "#050f0f", border: "1px solid #0a3a3a", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#2dd4d4", letterSpacing: "0.12em", marginBottom: 14 }}>DOCUMENT INDEX</p>
        {["policy_2024.pdf", "contract_v3.pdf", "handbook.pdf", "faq_base.pdf", "terms.pdf"].map((f, i) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #0a2020" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2dd4d4", opacity: i === 0 ? 1 : 0.3 }} />
            <span style={{ fontFamily: "monospace", fontSize: 11, color: i === 0 ? "#f0f7f7" : "#3a6060" }}>{f}</span>
          </div>
        ))}
      </div>
      {/* Query interface */}
      <div style={{ background: "#050f0f", border: "1px solid #0a3a3a", borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#2dd4d4", letterSpacing: "0.12em" }}>QUERY</p>
        <div style={{ background: "#0a1a1a", borderRadius: 8, padding: "10px 14px", fontFamily: "monospace", fontSize: 12, color: "#7aacac" }}>
          What is the refund policy?
        </div>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#2dd4d4", letterSpacing: "0.12em" }}>ANSWER</p>
        <div style={{ background: "#0a1a1a", borderRadius: 8, padding: "12px 14px", flex: 1 }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: "#7aacac", lineHeight: 1.7 }}>
            Based on policy_2024.pdf: Refunds are processed within 7 business days...
          </p>
          <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
            <span style={{ fontFamily: "monospace", fontSize: 9, color: "#2dd4d4", border: "1px solid #0a3a3a", padding: "2px 8px", borderRadius: 4 }}>score: 0.94</span>
            <span style={{ fontFamily: "monospace", fontSize: 9, color: "#2dd4d4", border: "1px solid #0a3a3a", padding: "2px 8px", borderRadius: 4 }}>policy_2024.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodArt() {
  const statuses = ["Order Placed", "Preparing", "Out for Delivery", "Delivered"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Order timeline */}
      <div style={{ background: "#0a0500", border: "1px solid #3a1500", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#f97316", letterSpacing: "0.12em", marginBottom: 14 }}>ORDER #4821 — LIVE</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {statuses.map((s, i) => (
            <div key={s} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: i <= 2 ? "#f97316" : "#3a1500", border: "2px solid #f97316", flexShrink: 0, marginTop: 3 }} />
                {i < statuses.length - 1 && <div style={{ width: 1, height: 28, background: i < 2 ? "#f97316" : "#3a1500" }} />}
              </div>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: i <= 2 ? "#f0f7f7" : "#3a1500", paddingBottom: i < statuses.length - 1 ? 20 : 0 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      {/* WebSocket status */}
      <div style={{ background: "#0a0500", border: "1px solid #3a1500", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#f97316", letterSpacing: "0.12em", marginBottom: 14 }}>ACTIVE CONNECTIONS</p>
        {[1024, 987, 1103, 1056].map((n, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#1a0800" }}>
              <div style={{ width: `${(n / 1200) * 100}%`, height: "100%", background: "#f97316", borderRadius: 2, opacity: 0.7 + i * 0.1 }} />
            </div>
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "#7a4020", width: 36, textAlign: "right" }}>{n}</span>
          </div>
        ))}
        <p style={{ fontFamily: "monospace", fontSize: 9, color: "#7a4020", marginTop: 8 }}>● WebSocket live — avg latency 18ms</p>
      </div>
    </div>
  );
}

function PerfArt() {
  const bars = [40, 65, 52, 88, 72, 95, 78, 60, 85, 70];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Throughput chart */}
      <div style={{ background: "#05000a", border: "1px solid #1e0a3a", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#a855f7", letterSpacing: "0.12em", marginBottom: 14 }}>THROUGHPUT (req/s)</p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 80 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, background: i >= 6 ? "#a855f7" : "#2a0a4a", borderRadius: "3px 3px 0 0", height: `${h}%`, transition: "height 0.3s" }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "#5b2a8a" }}>Before</span>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "#a855f7" }}>After +25%</span>
        </div>
      </div>
      {/* Metrics */}
      <div style={{ background: "#05000a", border: "1px solid #1e0a3a", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#a855f7", letterSpacing: "0.12em", marginBottom: 14 }}>LOAD TEST METRICS</p>
        {[
          { label: "Virtual Users", value: "1,024" },
          { label: "Avg Response", value: "342ms" },
          { label: "Error Rate", value: "0.02%" },
          { label: "Throughput", value: "+25%" },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a0a2a" }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b2a8a" }}>{label}</span>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#a855f7" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EegArt() {
  // Generate pseudo-wave points
  const wave = (offset: number) =>
    Array.from({ length: 20 }, (_, i) => {
      const x = (i / 19) * 100;
      const y = 50 + Math.sin((i + offset) * 0.8) * 20 + Math.sin((i + offset) * 2.1) * 8;
      return `${x},${y}`;
    }).join(" ");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* EEG waveforms */}
      <div style={{ background: "#000a05", border: "1px solid #002a14", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#10b981", letterSpacing: "0.12em", marginBottom: 14 }}>EEG CHANNELS</p>
        {["Fp1", "Fp2", "F3", "F4"].map((ch, i) => (
          <div key={ch} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "#065f46", width: 24 }}>{ch}</span>
              <svg viewBox="0 0 100 100" style={{ flex: 1, height: 28 }} preserveAspectRatio="none">
                <polyline points={wave(i * 3)} fill="none" stroke="#10b981" strokeWidth="1.5" opacity={0.7 - i * 0.1} />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* Model architecture */}
      <div style={{ background: "#000a05", border: "1px solid #002a14", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#10b981", letterSpacing: "0.12em", marginBottom: 14 }}>MODEL PIPELINE</p>
        {["Raw EEG (64 ch)", "FFT + DWT Features", "CNN Encoder", "LSTM Sequence", "Dense Classifier"].map((layer, i) => (
          <div key={layer} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ background: i === 2 || i === 3 ? "#002a14" : "#000a05", border: `1px solid ${i === 2 || i === 3 ? "#10b981" : "#002a14"}`, borderRadius: 6, padding: "6px 12px", width: "100%", textAlign: "center" }}>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: i === 2 || i === 3 ? "#10b981" : "#065f46" }}>{layer}</span>
            </div>
            {i < 4 && <div style={{ width: 1, height: 10, background: "#002a14" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

const artMap: Record<string, React.ReactNode> = {
  "rag-chatbot": <RagArt />,
  "food-delivery-app": <FoodArt />,
  "performance-testing": <PerfArt />,
  "eeg-deception-detection": <EegArt />,
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>

      {/* Hero banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${project.gradientA} 0%, ${project.gradientB} 100%)`,
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(48px, 8vw, 96px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rings */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: `1px solid ${project.accent}18` }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 260, height: 260, borderRadius: "50%", border: `1px solid ${project.accent}28` }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${project.accent}06 1px, transparent 1px), linear-gradient(90deg, ${project.accent}06 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }} />

        <div className="page-container relative" style={{ zIndex: 1 }}>
          {/* Back link */}
          <Link
            href="/#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "clamp(32px, 5vw, 56px)",
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
              color: project.accent, textDecoration: "none", opacity: 0.8,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={undefined}
          >
            <ArrowLeft size={13} /> Back to Portfolio
          </Link>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: project.accent, marginBottom: 16, opacity: 0.7 }}>
            {project.number} — {project.role} · {project.year}
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(36px, 7vw, 88px)",
            color: "#f0f7f7", lineHeight: 1.05, letterSpacing: "-0.02em",
            marginBottom: 20,
          }}>
            {project.title}
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "clamp(14px, 1.8vw, 18px)",
            color: "#7aacac", lineHeight: 1.6,
            maxWidth: 520,
          }}>
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="page-container" style={{ paddingTop: "clamp(48px, 8vw, 96px)", paddingBottom: "clamp(64px, 10vw, 128px)" }}>

        {/* Meta row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
          {[
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
            { label: "Duration", value: project.duration },
            { label: "Stack", value: project.tech[0] + "…" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{label}</p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", color: "var(--text-primary)" }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Two-column: overview + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 mb-16">
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Overview</p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.9, color: "var(--text-secondary)" }}>
              {project.overview}
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Highlights</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {project.highlights.map((h) => (
                <li key={h} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: project.accent, flexShrink: 0, marginTop: 3, fontSize: 12 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(13px, 1.3vw, 14.5px)", lineHeight: 1.7, color: "var(--text-secondary)" }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} style={{
                display: "inline-flex", padding: "6px 16px",
                border: `1px solid ${project.accent}55`, borderRadius: "100px",
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em",
                color: project.accent, background: `${project.accent}08`,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Visuals */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
            Project Visuals
          </p>
          {artMap[project.slug]}
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link
            href="/#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--text-muted)", textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={13} /> All Projects
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px",
              border: `1px solid ${project.accent}55`, borderRadius: "100px",
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
              color: project.accent, textDecoration: "none", background: `${project.accent}08`,
              transition: "all 0.25s",
            }}
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
