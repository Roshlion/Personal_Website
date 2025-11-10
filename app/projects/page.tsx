import Container from "@/components/Container";
import EC2StatusCard from "@/components/EC2StatusCard";

export default function Projects() {
  return (
    <Container className="py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-100">
        Projects
      </h1>

      {/* Current Work Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-neutral-100 flex items-center gap-3">
          <span className="text-blue-400">⚡</span>
          Current Work
        </h2>
        <EC2StatusCard />
      </section>

      <h2 className="text-3xl font-bold mb-6 text-neutral-100">
        Past Projects
      </h2>

      {/* AI Backtester Project */}
      <section className="mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-neutral-100">
            AI Backtester
          </h2>
          <p className="text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            An interactive backtesting platform supporting ML-based and
            technical-indicator strategies. Users can craft strategies via AI
            prompts that compile to a DSL/Python script, then run backtests on
            hosted datasets.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ai-backtester-j1kleim2w-roshlions-projects.vercel.app/backtester"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              Open Live App
            </a>
            <a
              href="https://github.com/Roshlion/AI_BACKTESTER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg font-medium border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              View Repository
            </a>
          </div>
        </div>
      </section>

      {/* ML Projects */}
      <section className="mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-neutral-100">
            ML Projects
          </h2>
          <p className="text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            A collection of machine learning implementations and algorithmic trading projects.
            Includes custom learner implementations (Decision Trees, Random Trees, Bag Learners),
            Q-Learning for trading strategies, and market simulation tools built in Python.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Roshlion/ML-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg font-medium border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              View Repository
            </a>
          </div>
        </div>
      </section>

      {/* Future Projects Placeholder */}
      <section>
        <div className="bg-neutral-900/50 border border-neutral-800 border-dashed rounded-2xl p-8 text-center">
          <p className="text-neutral-500 text-lg">More projects coming soon...</p>
        </div>
      </section>
    </Container>
  );
}
