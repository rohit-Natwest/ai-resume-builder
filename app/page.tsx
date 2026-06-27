import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <h1 className="text-5xl font-bold">
          ResumeAI
        </h1>
      </section>
    </main>
  );
}