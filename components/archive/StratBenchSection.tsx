/**
 * StratBench is intentionally not rendered.
 * Nothing in the app imports this file. Restore it on the home or projects
 * page when the project should be public again.
 */

export default function StratBenchSection() {
  return (
    <section className="mb-12">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-neutral-100">StratBench</h2>
          <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm text-neutral-300">
            Hidden
          </span>
        </div>

        <p className="text-neutral-300 mb-6 leading-relaxed max-w-3xl">
          StratBench is a backtesting platform for building, testing, and
          analyzing trading strategies on historical market data. It combines
          natural-language strategy generation, machine learning models, and
          technical analysis.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://backtester-final.vercel.app/ticker-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Open StratBench
          </a>
        </div>
      </div>
    </section>
  );
}
