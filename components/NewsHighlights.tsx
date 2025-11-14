import { NewsItem } from "../data/mockData";

type Props = {
  news: NewsItem[];
};

export function NewsHighlights({ news }: Props) {
  return (
    <section className="card news-grid">
      <div className="title">
        <span>الأخبار الاقتصادية المؤثرة</span>
      </div>
      {news.map((item) => (
        <article key={item.title} className="news-card">
          <header className="signal-header">
            <h5>{item.title}</h5>
            <span className="badge">تأثير {item.impact}</span>
          </header>
          <p>{item.summary}</p>
        </article>
      ))}
    </section>
  );
}
