import { Signal } from "../data/mockData";

type Props = {
  signals: Signal[];
};

export function TradingSignals({ signals }: Props) {
  return (
    <section className="card signals-grid">
      <div className="title">
        <span>توصيات التداول الذكية</span>
      </div>
      {signals.map((signal) => (
        <article key={`${signal.instrument}-${signal.timeframe}`} className="signal-card">
          <div className="signal-header">
            <h3>{signal.instrument}</h3>
            <span className="badge">{signal.bias}</span>
          </div>
          <div className="signal-meta">
            <span>الإطار: {signal.timeframe}</span>
            <span>الثقة: {signal.confidence}%</span>
            <span>أفضل جلسة: {signal.bestSession}</span>
          </div>
          <p>{signal.aiNotes}</p>
          <div className="levels">
            <div className="level-row">
              <span>سعر الدخول</span>
              <strong>{signal.entry}</strong>
            </div>
            <div className="level-row">
              <span>وقف الخسارة</span>
              <strong>{signal.stopLoss}</strong>
            </div>
            <div className="level-row">
              <span>أهداف الربح</span>
              <strong>{signal.takeProfit.join(" / ")}</strong>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
