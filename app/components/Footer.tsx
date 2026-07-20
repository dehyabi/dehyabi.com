export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 border-t border-zinc-800/40">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Dehya Qalbi.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dehyabi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
          >
            GitHub
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="https://linkedin.com/in/dehyabi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
          >
            LinkedIn
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="mailto:dehyafullstack@gmail.com"
            className="relative text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
          >
            Email
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
