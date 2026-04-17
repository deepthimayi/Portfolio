"use client";

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { links } from "@/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5, 10, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-2xl transition-colors duration-200 hover:opacity-80"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--accent)",
            letterSpacing: "0.02em",
          }}
          aria-label="Deepthimayi Pesala — Home"
        >
          DP
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-slide transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icon buttons */}
        <div className="flex items-center gap-3">
          <div className="tooltip-wrap">
            <a
              href={links.resume}
              download
              className="btn-icon"
              aria-label="Download Resume"
            >
              <FileDown size={15} />
            </a>
            <span className="tooltip">Resume</span>
          </div>
          <div className="tooltip-wrap">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <span className="tooltip">GitHub</span>
          </div>
          <div className="tooltip-wrap">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <span className="tooltip">LinkedIn</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
