export function ProjectsSection() {
  const projects = [
    {
      title: "OpenClaw AI Integration",
      description:
        "Built AI-powered restaurant and automation systems integrating OpenClaw agents with Telegram bots, Claude Opus, and Ollama for intelligent workflows.",
      tags: ["Python", "FastAPI", "AI Agents", "Telegram"],
      link: "https://github.com/dehyabi",
    },
    {
      title: "Background Checking Platform",
      description:
        "Developed a comprehensive background checking system integrated with an HR platform. Included OpenAI API integration for automated resume screening.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
      link: "https://github.com/dehyabi",
    },
    {
      title: "OWL Plantation System",
      description:
        "Maintained enterprise-level plantation management system for enterprise clients. Built inventory management for PT Topjaya Antariksa Electronics.",
      tags: ["Laravel", "MySQL", "Docker", "CI/CD"],
      link: "https://github.com/dehyabi",
    },
    {
      title: "Document Management System",
      description:
        "Built a Document Management System (DMS) for PT Transportasi Jakarta to streamline internal document workflows and approvals.",
      tags: ["Vue.js", "Node.js", "MongoDB", "REST API"],
      link: "https://github.com/dehyabi",
    },
    {
      title: "dehyabi.com",
      description:
        "Personal portfolio site built with Next.js and Tailwind CSS. Features blog, project showcase, and contact. Deployed on Vercel with Cloudflare DNS.",
      tags: ["Next.js", "Tailwind", "Vercel", "SSG"],
      link: "https://dehyabi.com",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-4 w-px bg-indigo-400/50 rounded-full" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
              Projects
            </h2>
          </div>
          <p className="max-w-xl text-zinc-400">
            A selection of projects I&apos;ve worked on — from AI integrations to enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-700/60 hover:bg-zinc-900/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]"
              style={{ "--delay": `${i * 0.05}s` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <svg
                  className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-800/50 px-3 py-1 text-[11px] text-zinc-400 border border-zinc-700/30 transition-colors duration-300 group-hover:border-zinc-600/40"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
