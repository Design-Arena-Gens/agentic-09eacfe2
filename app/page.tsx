import { AIInsights } from "../components/AIInsights";
import { CandlestickWidget } from "../components/CandlestickWidget";
import { IndicatorsPanel } from "../components/IndicatorsPanel";
import { MarketOverview } from "../components/MarketOverview";
import { NewsHighlights } from "../components/NewsHighlights";
import { TradingSignals } from "../components/TradingSignals";
import {
  aiAnalyses,
  indicators,
  marketSnapshots,
  news,
  signals
} from "../data/mockData";

export default function Home() {
  return (
    <main className="container">
      <section className="hero card">
        <h1>منصة التحليل الذكي للأسواق العالمية</h1>
        <p>
          منصة عربية متكاملة تزودك بتحليل لحظي للأسهم والفوركس والعملات الرقمية والسلع
          باستخدام الذكاء الاصطناعي. احصل على أوقات دخول مثالية، مستويات وقف الخسارة،
          وأفضل الأطر الزمنية لكل صفقة.
        </p>
        <div className="chips">
          <span className="chip">تحديث مباشر للبيانات</span>
          <span className="chip">تحليل متعدد الأصول</span>
          <span className="chip">ذكاء اصطناعي متقدم</span>
          <span className="chip">اقتراحات إدارة المخاطر</span>
        </div>
      </section>

      <div className="grid grid-columns-2">
        <MarketOverview markets={marketSnapshots} />
        <CandlestickWidget />
      </div>

      <div className="grid grid-columns-2">
        <AIInsights analyses={aiAnalyses} />
        <IndicatorsPanel indicators={indicators} />
      </div>

      <div className="grid grid-columns-2">
        <TradingSignals signals={signals} />
        <NewsHighlights news={news} />
      </div>

      <footer className="footer">
        البيانات الظاهرة للاختبار والمحاكاة. يمكن ربط المنصة بمصادر بيانات حية وواجهات تداول
        بعد تزويد المفاتيح المناسبة.
      </footer>
    </main>
  );
}
