import { MarketSnapshot } from "../data/mockData";

type Props = {
  markets: MarketSnapshot[];
};

const trendClass = {
  up: "trend-up",
  down: "trend-down"
} as const;

export function MarketOverview({ markets }: Props) {
  return (
    <section className="card market-overview">
      <div className="title">
        <span>نظرة سريعة على الأسواق</span>
      </div>
      <div className="market-overview-row">
        {markets.map((market) => (
          <article key={market.symbol} className="market-card">
            <h3>{market.name}</h3>
            <div className="market-metric">
              <span>السعر الحالي</span>
              <strong>{market.price.toLocaleString("ar-EG")}</strong>
            </div>
            <div className="market-metric">
              <span>التغير اليومي</span>
              <span className={trendClass[market.trend]}>
                {market.change > 0 ? "+" : ""}
                {market.change.toFixed(2)}٪
              </span>
            </div>
            <div className="market-metric">
              <span>أفضل جلسة</span>
              <span>{market.session}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
