export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md p-10 sm:p-16">
        {/* Subtle aurora inside card */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[50%] -left-[20%] h-[80%] w-[80%] rounded-full bg-indigo-500/[0.04] blur-[100px]" />
          <div className="absolute -bottom-[40%] -right-[20%] h-[70%] w-[70%] rounded-full bg-violet-500/[0.03] blur-[80px]" />
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-4 w-px bg-indigo-400/50 rounded-full" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
                Contact
              </h2>
            </div>
            <p className="max-w-lg text-lg text-zinc-300 leading-relaxed">
              Currently exploring new challenges in AI engineering and full-stack roles. If you are building something ambitious, I would love to hear about it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <ContactItem
              label="Email"
              value="dehyafullstack@gmail.com"
              href="mailto:dehyafullstack@gmail.com"
            />
            <ContactItem
              label="LinkedIn"
              value="linkedin.com/in/dehyabi"
              href="https://linkedin.com/in/dehyabi"
            />
            <ContactItem
              label="GitHub"
              value="github.com/dehyabi"
              href="https://github.com/dehyabi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1.5"
    >
      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">{label}</span>
      <span className="relative inline-flex items-center gap-1.5 text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">
        {value}
        <svg
          className="h-3 w-3 text-zinc-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </span>
    </a>
  );
}
