import Container from "@/components/Container";

export default function Projects() {
  return (
    <Container className="py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-100">
        Projects
      </h1>

      {/* StratBench */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-blue-950/20 border border-blue-800/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-neutral-100">
              StratBench
            </h2>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
              Active Development
            </span>
          </div>

          <p className="text-lg font-semibold text-blue-300 mb-6">
            Professional-grade algorithmic trading backtesting platform with AI-powered strategy generation, ML model training, and advanced technical analysis
          </p>

          <p className="text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            StratBench enables users to build, test, and analyze trading strategies on historical market data. 
            The platform combines AI-powered natural language strategy generation, machine learning model training 
            (9 production-ready models), and advanced technical analysis in a modern web application. Features 
            include interactive stock charts with technical indicators, a strategy builder that converts natural 
            language descriptions into executable trading rules, a comprehensive backtesting engine for both 
            rule-based and ML-based strategies, and a stock screener for discovering opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">🎯 Core Features</h3>
              <p className="text-sm text-neutral-400">
                • AI-powered strategy generation<br/>
                • 9 ML models (RF, XGBoost, LightGBM, etc.)<br/>
                • Technical indicators (SMA, EMA, RSI, MACD, Bollinger)<br/>
                • Stock screener & multi-ticker comparison
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">⚙️ Tech Stack</h3>
              <p className="text-sm text-neutral-400">
                • Frontend: Vite + React 18 + TypeScript + Tailwind<br/>
                • Backend: FastAPI (Python 3.12)<br/>
                • Database: Supabase PostgreSQL<br/>
                • Data: Polygon/Massive API + S3 Parquet
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">📊 Current Status</h3>
              <p className="text-sm text-neutral-400">
                • 7 tickers loaded (AAPL, AMZN, GOOGL, META, MSFT, NVDA, TSLA)<br/>
                • 3 months historical data (Oct-Dec 2024)<br/>
                • 228K+ minute-level bars<br/>
                • Testing stage, ready for expansion
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-neutral-100 mb-2">🚀 Architecture</h3>
              <p className="text-sm text-neutral-400">
                • Frontend-first design (4/5 pages work offline)<br/>
                • Hybrid data access (Supabase + backend API)<br/>
                • Minute-level precision backtesting<br/>
                • Production-ready ML models
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://backtester-final.vercel.app/ticker-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Open StratBench
            </a>
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold mb-6 text-neutral-100 mt-16">
        Past Projects
      </h2>

      {/* Machine Learning for Trading */}
      <section className="mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-neutral-100">
            Machine Learning for Trading
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
    </Container>
  );
}
