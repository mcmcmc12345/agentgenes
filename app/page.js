export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}

      <section className="relative">

        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

          <div className="absolute right-10 top-80 h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28">

          <div className="text-center">

            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm tracking-wider text-cyan-300">

              PREMIUM .AI DOMAIN AVAILABLE

            </div>

            <h1 className="mt-10 text-6xl font-black tracking-tight md:text-8xl">

              AgentGenes

              <span className="text-cyan-400">.ai</span>

            </h1>

            <h2 className="mt-8 text-2xl md:text-4xl font-light text-gray-200">

              The DNA of Agentic AI

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              AgentGenes.ai is a premium, memorable and future-ready
              AI brand built for founders creating autonomous systems,
              AI agents, enterprise AI platforms and next-generation
              intelligent software.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-9 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                Acquire Domain
              </a>

              <a
                href="mailto:mciemiecki@gmail.com"
                className="rounded-full border border-white/20 px-9 py-4 transition duration-300 hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Owner
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY ================= */}

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-28">

        <div className="text-center">

          <h2 className="text-4xl font-bold">

            Why AgentGenes.ai?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">

            A premium AI domain designed for startups,
            enterprise platforms and ambitious founders
            building the future of artificial intelligence.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

            <div className="text-5xl">

              🧬

            </div>

            <h3 className="mt-6 text-2xl font-semibold">

              Memorable Brand

            </h3>

            <p className="mt-5 leading-8 text-gray-400">

              "Genes" naturally evokes DNA,
              evolution, intelligence and building blocks—
              a compelling identity for AI companies.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

            <div className="text-5xl">

              🤖

            </div>

            <h3 className="mt-6 text-2xl font-semibold">

              Built for AI

            </h3>

            <p className="mt-5 leading-8 text-gray-400">

              Perfect for AI agents,
              multi-agent systems,
              enterprise AI,
              developer tools,
              infrastructure
              and orchestration platforms.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

            <div className="text-5xl">

              🚀

            </div>

            <h3 className="mt-6 text-2xl font-semibold">

              Premium .AI

            </h3>

            <p className="mt-5 leading-8 text-gray-400">

              Short.
              Brandable.
              Global.

              A name capable of becoming
              a valuable technology brand.

            </p>

          </div>

        </div>

      </section>
            {/* ================= PERFECT FOR ================= */}

      <section className="border-y border-white/10 bg-white/[0.02] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Perfect For
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
              AgentGenes.ai naturally fits companies building the next
              generation of intelligent software.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "🤖 AI Agents",
              "🧠 Multi-Agent Systems",
              "⚡ AI Infrastructure",
              "☁ Enterprise AI",
              "🧬 AI Frameworks",
              "🔗 Developer Platforms"
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/5"
              >

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BRAND POTENTIAL ================= */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Brand Potential
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">

              More than a domain.
              <br />
              A future AI brand.

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Great brands tell a story.

              "Genes" immediately communicates
              DNA, intelligence, evolution,
              foundations and growth.

              Combined with "Agent",
              it creates a memorable identity
              for the emerging Agentic AI market.

            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-10 backdrop-blur">

            <h3 className="text-2xl font-bold">

              Imagine building...

            </h3>

            <div className="mt-10 space-y-5">

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                AgentGenes Cloud
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                AgentGenes Studio
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                AgentGenes SDK
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                AgentGenes Enterprise
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                AgentGenes Labs
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= DOMAIN STATUS ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 p-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-300">

                ● Available Today

              </span>

              <h2 className="mt-8 text-5xl font-bold">

                Premium AI Domain

              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">

                AgentGenes.ai is currently available
                for acquisition directly from the owner.

                Serious inquiries are welcome.

              </p>

            </div>

            <div className="grid gap-4">

              {[
                "✓ Premium .AI Domain",
                "✓ Direct Owner",
                "✓ Fast Secure Transfer",
                "✓ Worldwide",
                "✓ Brandable",
                "✓ Serious Inquiries"
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 p-5"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 pb-28"
      >

        <div className="overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#08101d] to-violet-500/10 p-12 text-center">

          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            AVAILABLE FOR ACQUISITION
          </div>

          <h2 className="mt-8 text-5xl font-bold">
            Interested in AgentGenes.ai?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            If you're building the next generation of AI agents,
            enterprise AI or autonomous systems,
            this domain could become the foundation of your brand.
          </p>

          <div className="mt-12">

            <a
              href="mailto:mciemiecki@gmail.com?subject=AgentGenes.ai%20Inquiry"
              className="inline-flex rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-[#050816] transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Contact Owner
            </a>

          </div>

          <div className="mt-10 text-gray-400">

            <p>
              📧 mciemiecki@gmail.com
            </p>

            <p className="mt-3">
              Direct owner · Secure transfer · Worldwide
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-sm text-gray-500 md:flex-row">

          <div>

            <span className="font-semibold text-gray-300">
              AgentGenes.ai
            </span>

            {" "}· Premium AI Domain

          </div>

          <div>

            © {new Date().getFullYear()} AgentGenes.ai

          </div>

        </div>

      </footer>

    </main>
  );
}