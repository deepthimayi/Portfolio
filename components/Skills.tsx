"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Gauge, Network, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills } from "@/data/portfolio";

type IconDef =
  | { kind: "devicon"; cls: string; forceColor?: string }
  | { kind: "lucide";  Icon: LucideIcon; color: string }
  | { kind: "img";     src: string };

const ICON: Record<string, IconDef> = {
  // Languages
  "Java":             { kind: "devicon", cls: "devicon-java-original colored" },
  "Python":           { kind: "devicon", cls: "devicon-python-original colored" },
  "JavaScript":       { kind: "devicon", cls: "devicon-javascript-original colored" },
  "TypeScript":       { kind: "devicon", cls: "devicon-typescript-original colored" },
  "SQL":              { kind: "devicon", cls: "devicon-postgresql-original colored" },
  "C#":               { kind: "devicon", cls: "devicon-csharp-original colored" },
  "C++":              { kind: "devicon", cls: "devicon-cplusplus-original colored" },
  // Frontend
  "React":            { kind: "devicon", cls: "devicon-react-original colored" },
  "React Native":     { kind: "devicon", cls: "devicon-react-original colored" },
  "Vue.js":           { kind: "devicon", cls: "devicon-vuejs-original colored" },
  "Angular":          { kind: "devicon", cls: "devicon-angular-original colored" },
  "Figma":            { kind: "devicon", cls: "devicon-figma-original colored" },
  // Backend
  "Node.js":          { kind: "devicon", cls: "devicon-nodejs-original colored" },
  "Next.js":          { kind: "devicon", cls: "devicon-nextjs-original", forceColor: "#e2e8f0" },
  "Express.js":       { kind: "devicon", cls: "devicon-express-original", forceColor: "#e2e8f0" },
  "Flask":            { kind: "devicon", cls: "devicon-flask-original", forceColor: "#e2e8f0" },
  "Auth.js":          { kind: "lucide",  Icon: ShieldCheck, color: "#2dd4d4" },
  // Databases
  "MySQL":            { kind: "devicon", cls: "devicon-mysql-original colored" },
  "MongoDB":          { kind: "devicon", cls: "devicon-mongodb-original colored" },
  "Snowflake":        { kind: "devicon", cls: "devicon-snowflake-plain colored" },
  // Cloud & Infrastructure
  "AWS":              { kind: "devicon", cls: "devicon-amazonwebservices-original colored" },
  "Azure":            { kind: "devicon", cls: "devicon-azure-original colored" },
  "GCP":              { kind: "devicon", cls: "devicon-googlecloud-original colored" },
  "Docker":           { kind: "devicon", cls: "devicon-docker-original colored" },
  "Kubernetes":       { kind: "devicon", cls: "devicon-kubernetes-plain colored" },
  "GitHub":           { kind: "devicon", cls: "devicon-github-original", forceColor: "#e2e8f0" },
  "Kafka":            { kind: "img", src: "https://cdn.simpleicons.org/apachekafka/a855f7" },
  // CI/CD & DevOps
  "Jenkins":          { kind: "devicon", cls: "devicon-jenkins-original colored" },
  "Bitbucket":        { kind: "devicon", cls: "devicon-bitbucket-original colored" },
  "TeamCity":         { kind: "img", src: "https://cdn.simpleicons.org/teamcity/2dd4d4" },
  "Confluence":       { kind: "img", src: "https://cdn.simpleicons.org/confluence/0052CC" },
  "Trello":           { kind: "devicon", cls: "devicon-trello-plain colored" },
  // Developer Tools
  "VS Code":          { kind: "devicon", cls: "devicon-vscode-original colored" },
  "IntelliJ IDEA":    { kind: "devicon", cls: "devicon-intellij-original colored" },
  "Jira":             { kind: "devicon", cls: "devicon-jira-original colored" },
  "Git":              { kind: "devicon", cls: "devicon-git-original colored" },
  // Testing & QA
  "Postman":          { kind: "devicon", cls: "devicon-postman-original colored" },
  "Apache JMeter":    { kind: "devicon", cls: "devicon-apache-plain colored" },
  "LoadRunner":       { kind: "lucide",  Icon: Gauge, color: "#7aacac" },
  "Fiddler":          { kind: "lucide",  Icon: Network, color: "#00b800" },
  "Datadog":          { kind: "devicon", cls: "devicon-datadog-original colored" },
};

type SkillItem = { name: string; color: string; tier?: string };
type SkillCluster = { cluster: string; items: SkillItem[] };

function SkillIcon({ name, color }: { name: string; color: string }) {
  const def = ICON[name];
  const SIZE = 24;

  if (!def)      return <Cpu size={SIZE} color={color} strokeWidth={1.6} />;
  if (def.kind === "lucide") return <def.Icon size={SIZE} color={def.color} strokeWidth={1.6} />;
  return (
    <i
      className={def.cls}
      style={{
        fontSize: SIZE + 4,
        lineHeight: 1,
        display: "block",
        ...(def.forceColor ? { color: def.forceColor } : {}),
      }}
    />
  );
}

function SkillCard({ cluster, delay }: { cluster: SkillCluster; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid var(--border-hover)",
        background: "var(--bg-card)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* Gradient header */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(45,212,212,0.18) 0%, rgba(45,212,212,0.06) 100%)",
          borderBottom: "1px solid var(--border-hover)",
          padding: "14px 18px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: 0,
          }}
        >
          {cluster.cluster}
        </h3>
      </div>

      {/* Inner panel — "card within card" inset effect matching reference */}
      <div style={{ padding: "8px 10px 10px" }}>
        <div
          style={{
            background: "var(--bg-primary)",
            borderRadius: 10,
            padding: "10px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {cluster.items.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                padding: "9px 0",
                borderBottom: i < cluster.items.length - 1
                  ? "1px solid var(--border)"
                  : "none",
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: `${skill.color}18`,
                border: `1px solid ${skill.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <SkillIcon name={skill.name} color={skill.color} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  flex: 1,
                }}
              >
                {skill.name}
              </span>
              {/* Tier indicator: filled = primary, outlined = familiar */}
              <div
                title={skill.tier === "primary" ? "Primary skill" : "Familiar"}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: skill.tier === "primary" ? "var(--accent)" : "transparent",
                  border: skill.tier === "primary"
                    ? "none"
                    : "1.5px solid var(--border-hover)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative"
      style={{
        background: "var(--bg-secondary)",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
      }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="page-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="section-label mb-10"
        >
          <span>02</span> — Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "clamp(36px, 6vw, 56px)",
          }}
        >
          The tools I wield.
        </motion.h2>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: "clamp(10px, 1.5vw, 18px)" }}
        >
          {skills.map((cluster, i) => (
            <SkillCard key={cluster.cluster} cluster={cluster} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
