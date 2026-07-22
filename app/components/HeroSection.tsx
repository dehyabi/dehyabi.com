"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 9000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.7)";
        ctx.fill();
      }

      // Draw connections
      const maxDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Multi-layer aurora */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {/* Indigo blob top-left */}
        <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-indigo-500/[0.07] blur-[120px] animate-aurora" />
        {/* Violet blob center-right */}
        <div className="absolute top-[20%] right-[-15%] h-[40vw] w-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-violet-500/[0.06] blur-[100px] animate-aurora" style={{ animationDelay: "-4s" }} />
        {/* Cyan blob bottom */}
        <div className="absolute bottom-[-10%] right-[20%] h-[35vw] w-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-cyan-500/[0.05] blur-[100px] animate-aurora" style={{ animationDelay: "-8s" }} />
      </div>

      {/* Particle network canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Perspective grid floor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[40%] overflow-hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(99,102,241,0.03) 0%, transparent 100%)",
        }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "translateX(-50%) perspective(300px) rotateX(60deg)",
            transformOrigin: "center bottom",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 80%)",
          }}
        />
      </div>

      {/* Scan line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-scan" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Animated glow ring behind name */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-indigo-400/[0.08] animate-spin-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-400/[0.06] animate-spin-slow"
          style={{
            animationDirection: "reverse",
            animationDuration: "15s",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          }}
        />

        <h1
          className="animate-fade-up text-5xl font-semibold tracking-tighter text-zinc-50 sm:text-6xl md:text-7xl"
          style={{ "--delay": "0s" } as React.CSSProperties}
        >
          Dehya Qalbi
        </h1>
        <p
          className="animate-fade-up max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed"
          style={{ "--delay": "0.1s" } as React.CSSProperties}
        >
          Building things that work, that last, and that make sense. Full-stack, AI-powered, end to end.
        </p>
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-3 pt-2"
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <a
            href="#about"
            className="rounded-lg bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all duration-300"
          >
            View Skills
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/30 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
        <div
          className="animate-fade-up pt-8 flex items-center gap-8 text-zinc-500"
          style={{ "--delay": "0.3s" } as React.CSSProperties}
        >
          <SocialLink href="https://github.com/dehyabi" label="GitHub" />
          <SocialLink href="https://linkedin.com/in/dehyabi" label="LinkedIn" />
          <SocialLink href="mailto:dehyafullstack@gmail.com" label="Email" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
