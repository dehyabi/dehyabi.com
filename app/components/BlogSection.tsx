export function BlogSection() {
  const posts = [
    {
      title: "Integrating OpenClaw AI Agents into Production Systems",
      date: "Jul 2026",
      excerpt:
        "How I built AI-powered automation using OpenClaw agents, Telegram bots, and Claude Opus to streamline restaurant operations.",
      slug: "openclaw-ai-agents-production",
    },
    {
      title: "Building Knowledge Graphs for Financial Compliance",
      date: "Jul 2026",
      excerpt:
        "Lessons from building a compliance engine with traversable audit trails and automated limit checking for fund management.",
      slug: "knowledge-graphs-compliance",
    },
    {
      title: "Why I Chose Next.js for My Personal Site",
      date: "Jun 2026",
      excerpt:
        "A breakdown of the technical decisions behind dehyabi.com — SSG, Cloudflare DNS, Vercel, and the blog strategy.",
      slug: "nextjs-personal-site",
    },
  ];

  return (
    <section id="blog" className="mx-auto max-w-5xl px-6 py-28">
      <div className="flex flex-col gap-14">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-4 w-px bg-indigo-400/50 rounded-full" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
                Blog
              </h2>
            </div>
            <p className="max-w-xl text-zinc-400">
              Thoughts on engineering, AI, and building products.
            </p>
          </div>
          <a
            href="/blog"
            className="hidden sm:block relative text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
          >
            View all →
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="flex flex-col">
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col gap-2 border-l border-zinc-800/60 hover:border-indigo-400/40 pl-6 py-5 -ml-px transition-all duration-500 hover:bg-zinc-900/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-500">{post.date}</span>
                {i === 0 && (
                  <span className="rounded-full bg-zinc-800/60 px-2.5 py-0.5 text-[10px] font-medium text-zinc-300 border border-zinc-700/30">
                    Latest
                  </span>
                )}
              </div>
              <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{post.excerpt}</p>
            </a>
          ))}
        </div>

        <a
          href="/blog"
          className="sm:hidden relative self-start text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group"
        >
          View all →
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-300 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </section>
  );
}
