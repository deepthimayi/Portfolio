"use client";

import { useEffect, useState } from "react";
import { FileDown, X, Menu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { links } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? "var(--navbar-bg)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav className="page-container h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="font-bold text-2xl transition-opacity duration-200 hover:opacity-80 z-10"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--accent)",
              letterSpacing: "0.02em",
            }}
            aria-label="Deepthimayi Pesala — Home"
          >
            DP
          </a>

          {/* Desktop nav links */}
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

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Icon buttons — visible on all sizes */}
            <div className="tooltip-wrap hidden sm:block">
              <a href={links.resume} download className="btn-icon" aria-label="Download Resume">
                <FileDown size={15} />
              </a>
              <span className="tooltip">Resume</span>
            </div>
            <div className="tooltip-wrap hidden sm:block">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <GithubIcon size={15} />
              </a>
              <span className="tooltip">GitHub</span>
            </div>
            <div className="tooltip-wrap hidden sm:block">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                <LinkedinIcon size={15} />
              </a>
              <span className="tooltip">LinkedIn</span>
            </div>

            {/* Theme toggle — always visible */}
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden btn-icon"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ width: 38, height: 38 }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{
              background: "var(--bg-primary)",
              backdropFilter: "blur(20px)",
              paddingTop: "68px",
              opacity: 0.98,
            }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                  }}
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Social links in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center gap-4 mt-4"
              >
                <a href={links.resume} download className="btn-glass" aria-label="Download Resume" style={{ fontSize: "11px" }}>
                  <FileDown size={13} /> Resume
                </a>
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                  <GithubIcon size={16} />
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
