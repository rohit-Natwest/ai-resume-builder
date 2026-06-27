export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-bold tracking-tight">
          Resume<span className="text-blue-500">AI</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-slate-300 hover:text-white transition">
            Features
          </a>
          <a href="#" className="text-sm text-slate-300 hover:text-white transition">
            Templates
          </a>
          <a href="#" className="text-sm text-slate-300 hover:text-white transition">
            Pricing
          </a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </header>
  );
}