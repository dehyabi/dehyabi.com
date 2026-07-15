export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[50vw] w-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-zinc-800/20 blur-[100px]"
        />
      </div>

      <div className="animate-float flex flex-col items-center gap-5">
        <h1 className="animate-breathe select-none text-[18vw] font-extralight leading-none tracking-tighter text-zinc-50 sm:text-[14vw] md:text-[11vw] lg:text-[9vw]">
          Soon
        </h1>
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
          Dehya Qalbi
        </p>
      </div>
    </main>
  );
}
