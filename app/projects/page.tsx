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

      {/* TRADER - Algorithmic Trading Infrastructure */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-blue-950/20 border border-blue-800/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-neutral-100">
              TRADER
            </h2>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
              Active Development
            </span>
          </div>

          <p className="text-lg font-semibold text-blue-300 mb-4">
            Production-grade algorithmic trading system built to discover profitable strategies through large-scale optimization
          </p>

          <p className="text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            A comprehensive trading infrastructure featuring S3-based data pipelines, 14 quantitative strategies,
            and multi-strategy portfolio optimization. The system processes minute-level market data
            (500M+ bars) to identify optimal trading configurations through walk-forward validation,
            regime-aware selection, and transaction cost modeling.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">📊 Dataset</h3>
              <p className="text-sm text-neutral-400">
                • 500M+ minute bars (Polygon.io)<br/>
                • Oct 2024 - Oct 2025 (13 months)<br/>
                • 6.7GB Parquet w/ Hive partitioning<br/>
                • DuckDB query engine (S3-native)
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">🎯 Strategy Suite</h3>
              <p className="text-sm text-neutral-400">
                • 14 quantitative strategies<br/>
                • Mean reversion, momentum, stat-arb<br/>
                • ML-based (GradientBoosting)<br/>
                • Opening range, VWAP, Kalman filters
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">⚙️ Optimization</h3>
              <p className="text-sm text-neutral-400">
                • Walk-forward validation<br/>
                • Regime-aware selection<br/>
                • Transaction cost modeling<br/>
                • Multi-objective (Sharpe, return, DD)
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">🚀 Infrastructure</h3>
              <p className="text-sm text-neutral-400">
                • AWS S3 + EC2 compute<br/>
                • Scalable to 100+ tickers<br/>
                • Automated backtesting pipeline<br/>
                • Real-time monitoring & alerts
              </p>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-200 mb-2">🏆 Best Results (Oct 2025 - 1 Month Test)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <p className="text-neutral-400">Winner</p>
                <p className="font-bold text-green-400">VWAPReversion</p>
              </div>
              <div>
                <p className="text-neutral-400">Return</p>
                <p className="font-bold text-neutral-100">+6.66%</p>
              </div>
              <div>
                <p className="text-neutral-400">Sharpe Ratio</p>
                <p className="font-bold text-neutral-100">1.85</p>
              </div>
              <div>
                <p className="text-neutral-400">Max Drawdown</p>
                <p className="font-bold text-neutral-100">-8.2%</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/RoshHoul/TRADER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Repository
            </a>
            <a
              href="https://github.com/RoshHoul/TRADER/blob/main/DOCUMENTATION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg font-medium border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

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
