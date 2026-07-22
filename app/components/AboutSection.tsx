export function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "Flask", "Node.js", "Go", "Laravel", "REST APIs"] },
    { category: "Databases & Vector Stores", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone", "Weaviate", "ChromaDB", "FAISS", "Snowflake", "BigQuery", "Redshift"] },
    { category: "AI / ML", items: ["OpenAI API", "Hugging Face", "PyTorch", "TensorFlow", "LangChain", "Ollama", "RAG", "Embeddings", "Fine-tuning", "Pandas"] },
    { category: "MLOps & DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Git", "AWS", "Vercel", "Kafka", "Airflow", "MLflow", "Kubeflow", "Vertex AI", "SageMaker", "Prometheus", "Datadog"] },
  ];

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="h-4 w-px bg-indigo-400/50 rounded-full" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
              About
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-zinc-300 leading-relaxed">
            I&apos;m a Full Stack AI Engineer with 5+ years of experience building scalable web
            applications and AI-powered solutions. Currently working at <span className="text-zinc-100 font-medium">Jackson Ventures LLC dba IPOT</span> on digital
            transformation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="group rounded-xl border border-zinc-800/40 bg-zinc-900/20 p-5 backdrop-blur-sm transition-all duration-500 hover:border-zinc-700/60 hover:shadow-[0_0_24px_rgba(99,102,241,0.06)]"
              style={{ "--delay": `${i * 0.05}s` } as React.CSSProperties}
            >
              <h3 className="mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300 border border-zinc-700/30 transition-colors duration-300 group-hover:border-zinc-600/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
