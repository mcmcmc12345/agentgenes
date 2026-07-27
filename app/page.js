export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          AgentGenes<span className="text-blue-500">.ai</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-300">
          The DNA of Autonomous AI Agents
        </p>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Building the foundation layer for the next generation of
          intelligent AI agents, reusable capabilities and autonomous systems.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#vision"
            className="rounded-full bg-blue-600 px-8 py-3 hover:bg-blue-500"
          >
            Explore Vision
          </a>

          <a
            href="mailto:contact@agentgenes.ai"
            className="rounded-full border border-gray-600 px-8 py-3 hover:bg-gray-900"
          >
            Contact
          </a>
        </div>

      </div>


      <section id="vision" className="mt-32 max-w-5xl grid md:grid-cols-3 gap-8">

        <div className="border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">
            🧬 Agent DNA
          </h2>
          <p className="mt-4 text-gray-400">
            Reusable intelligence patterns for autonomous systems.
          </p>
        </div>


        <div className="border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">
            🤖 AI Agents
          </h2>
          <p className="mt-4 text-gray-400">
            The next evolution of intelligent software.
          </p>
        </div>


        <div className="border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">
            ⚡ Future Infrastructure
          </h2>
          <p className="mt-4 text-gray-400">
            A foundation for emerging agent ecosystems.
          </p>
        </div>

      </section>

    </main>
  );
}
