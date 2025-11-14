import { AIAnalysis } from "../data/mockData";

type Props = {
  analyses: AIAnalysis[];
};

export function AIInsights({ analyses }: Props) {
  return (
    <section className="card analysis-grid">
      <div className="title">
        <span>رؤية الذكاء الاصطناعي</span>
      </div>
      {analyses.map((analysis) => (
        <div key={analysis.title} className="analysis-section">
          <h4>{analysis.title}</h4>
          <p>{analysis.description}</p>
          <ul>
            {analysis.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
