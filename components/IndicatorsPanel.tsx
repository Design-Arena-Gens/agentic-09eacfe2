import { Indicator } from "../data/mockData";

type Props = {
  indicators: Indicator[];
};

export function IndicatorsPanel({ indicators }: Props) {
  return (
    <section className="card">
      <div className="title">
        <span>المؤشرات الفنية المدعومة بالذكاء الاصطناعي</span>
      </div>
      <div className="indicators-list">
        {indicators.map((indicator) => (
          <div key={indicator.name} className="indicator">
            <strong>{indicator.name}</strong>
            <div>{indicator.value}</div>
            <small>إطار: {indicator.timeframe}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
