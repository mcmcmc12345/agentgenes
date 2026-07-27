export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0B1120] to-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">

        <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm mb-8">
          Premium .AI Domain Available
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          AgentGenes
          <span className="text-cyan-400">.ai</span>
        </h1>

        <p className="mt-8 text-2xl md:text-3xl text-gray-200 font-light">
          The DNA of Agentic AI
        </p>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
          A premium brand for the next generation of AI Agents,
          Autonomous Systems, AI Infrastructure and Enterprise AI.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Make an Offer
          </a>

          <a
            href="mailto:mciemiecki@gmail.com"
            className="rounded-full border border-gray-700 px-8 py-4 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            Contact Owner
          </a>

        </div>

      </section>

      {/* WHY */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why AgentGenes.ai?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl">🧬</div>
            <h3 className="mt-5 text-2xl font-semibold">
              Memorable Brand
            </h3>
            <p className="mt-4 text-gray-400">
              Short, unique and instantly connected with AI, DNA and intelligent systems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl">🤖</div>
            <h3 className="mt-5 text-2xl font-semibold">
              Built for Agentic AI
            </h3>
            <p className="mt-4 text-gray-400">
              Perfect for AI agents, orchestration platforms, autonomous systems and developer tools.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl">🚀</div>
            <h3 className="mt-5 text-2xl font-semibold">
              Premium .AI
            </h3>
            <p className="mt-4 text-gray-400">
              An investment-grade domain for ambitious AI startups and technology companies.
            </p>
          </div>

        </div>

      </section>

      {/* USE CASES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Ideal For
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {[
            "AI Agents",
            "Agent Frameworks",
            "Enterprise AI",
            "AI Infrastructure",
            "Developer Platforms",
            "Multi-Agent Systems"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-800 bg-white/5 p-6 text-center text-lg hover:border-cyan-400 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Interested in acquiring AgentGenes.ai?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Serious inquiries are welcome.
          </p>

          <div className="mt-10">

            <a
              href="mailto:YOUR_EMAIL"
              className="rounded-full bg-cyan-500 px-10 py-4 text-black font-bold hover:bg-cyan-400 transition"
            >
              Contact the Owner
            </a>

          </div>

          <p className="mt-8 text-gray-500">
            Fast and secure domain transfer.
          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-gray-500">

        © {new Date().getFullYear()} AgentGenes.ai

      </footer>

    </main>
  );
}