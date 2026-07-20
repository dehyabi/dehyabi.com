"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-800/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Dehya Qalbi home">
          {/* Logo mark */}
          <span className="relative flex items-center justify-center w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
              <defs>
                <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path
                d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z"
                fill="none"
                stroke="url(#navLogoGrad)"
                strokeWidth="1.8"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />
              <path
                d="M16 10 L22 16 L16 22 L10 16 Z"
                fill="none"
                stroke="url(#navLogoGrad)"
                strokeWidth="1.4"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />
              <circle cx="16" cy="16" r="1.8" fill="#22d3ee" />
              <circle cx="16" cy="16" r="0.8" fill="#050507" />
            </svg>
            <span className="absolute inset-0 rounded-lg bg-indigo-400/0 transition-all duration-300 group-hover:bg-indigo-400/10 group-hover:blur-md" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100 transition-colors duration-300">
            dehyabi
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-indigo-400/80" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/40">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
