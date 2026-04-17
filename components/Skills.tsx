"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type Skill = { name: string; color: string };

const belt1: Skill[] = [
  { name: "Java",           color: "#f89820" },
  { name: "Python",         color: "#3572A5" },
  { name: "JavaScript",     color: "#F7DF1E" },
  { name: "TypeScript",     color: "#3178C6" },
  { name: "C/C++",          color: "#00599C" },
  { name: "SQL",            color: "#2dd4d4" },
  { name: "Docker",         color: "#2496ED" },
  { name: "Kubernetes",     color: "#326CE5" },
  { name: "Kafka",          color: "#a855f7" },
];

const belt2: Skill[] = [
  { name: "AWS EC2",        color: "#FF9900" },
  { name: "AWS S3",         color: "#FF9900" },
  { name: "AWS Lambda",     color: "#FF9900" },
  { name: "CI/CD",          color: "#2dd4d4" },
  { name: "Jenkins",        color: "#D24939" },
  { name: "Bitbucket",      color: "#0052CC" },
  { name: "Spring Boot",    color: "#6DB33F" },
  { name: "Microservices",  color: "#2dd4d4" },
  { name: "REST APIs",      color: "#2dd4d4" },
];

const belt3: Skill[] = [
  { name: "React",          color: "#61DAFB" },
  { name: "OAuth 2.0",      color: "#2dd4d4" },
  { name: "JWT",            color: "#2dd4d4" },
  { name: "JUnit",          color: "#25A162" },
  { name: "MySQL",          color: "#4479A1" },
  { name: "MongoDB",        color: "#47A248" },
  { name: "Git",            color: "#F05032" },
  { name: "Postman",        color: "#FF6C37" },
  { name: "Datadog",        color: "#632CA6" },
  { name: "JMeter",         color: "#D22128" },
  { name: "LoadRunner",     color: "#2dd4d4" },
];

const belts = [
  { skills: belt1, direction: "left",  duration: 32 },
  { skills: belt2, direction: "right", duration: 28 },
  { skills: belt3, direction: "left",  duration: 38 },
] as const;

function useDragScroll(ref: React.RefObject<HTMLDivElement | null>) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.clientX - ref.current.getBoundingClientRect().left;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.setPointerCapture(e.pointerId);
    ref.current.style.cursor = "grabbing";
  }, [ref]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.clientX - ref.current.getBoundingClientRect().left;
    const delta = (x - startX.current) * 1.4;
    ref.current.scrollLeft = scrollLeft.current - delta;
  }, [ref]);

  const onPointerUp = useCallback((_e: React.PointerEvent) => {
    isDragging.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  }, [ref]);

  return { onPointerDown, onPointerMove, onPointerUp };
}

function Belt({ skills, direction, duration }: { skills: readonly Skill[]; direction: "left" | "right"; duration: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const drag = useDragScroll(wrapperRef);
  // Duplicate 4× for seamless loop across all screen widths
  const repeated = [...skills, ...skills, ...skills, ...skills];

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden"
      style={{ cursor: "grab" }}
      {...drag}
    >
      {/* Left fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
        style={{ width: 100, background: "linear-gradient(to right, var(--bg-primary), transparent)" }}
      />
      {/* Right fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
        style={{ width: 100, background: "linear-gradient(to left, var(--bg-primary), transparent)" }}
      />

      <div
        className="belt-track"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {repeated.map((skill, i) => (
          <span key={i} className="sk-pill">
            <span className="sk-dot" style={{ background: skill.color }} />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
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
        background: "var(--bg-primary)",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
      }}
    >
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      {/* Header — constrained width */}
      <div className="page-container mb-12">
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
          }}
        >
          The tools I wield.
        </motion.h2>
      </div>

      {/* Belts — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="space-y-0"
        style={{ rowGap: "1.4rem", display: "flex", flexDirection: "column", gap: "1.4rem" }}
      >
        {belts.map((belt, i) => (
          <div key={i}>
            <p
              className="page-container"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.7rem",
              }}
            >
              {i === 0 ? "Languages & Infrastructure" : i === 1 ? "Cloud & DevOps" : "Web, APIs & Databases"}
            </p>
            <Belt skills={belt.skills} direction={belt.direction} duration={belt.duration} />
          </div>
        ))}
      </motion.div>

    </section>
  );
}
