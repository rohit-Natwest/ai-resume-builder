export default function HeroPreview() {
  return (
    <div className="relative w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-30 blur-2xl"></div>

      {/* Card */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500"></div>

          <div>
            <div className="h-4 w-32 rounded bg-slate-700"></div>
            <div className="mt-2 h-3 w-24 rounded bg-slate-800"></div>
          </div>
        </div>

        {/* ATS Score */}
        <div className="mt-8 rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4">
          <div className="text-sm text-slate-400">ATS Score</div>

          <div className="mt-2 text-4xl font-bold text-blue-400">
            94%
          </div>
        </div>

        {/* Experience */}
        <div className="mt-8">
          <div className="mb-3 h-3 w-28 rounded bg-slate-700"></div>

          <div className="space-y-3">
            <div className="h-3 rounded bg-slate-800"></div>
            <div className="h-3 rounded bg-slate-800"></div>
            <div className="h-3 w-3/4 rounded bg-slate-800"></div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["React", "Next.js", "AI", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}