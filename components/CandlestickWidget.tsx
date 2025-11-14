'use client';

import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import ReactApexChart, {
  type ReactApexChartProps
} from "./ReactApexChartClient";
import {
  chartSeriesByTimeframe,
  timeframeOptions,
  type TimeframeOption
} from "../data/chartData";

export function CandlestickWidget() {
  const [activeTimeframe, setActiveTimeframe] = useState<TimeframeOption["key"]>("ساعة");

  const series = useMemo(
    () => [
      {
        name: "EURUSD",
        data: chartSeriesByTimeframe[activeTimeframe]
      }
    ],
    [activeTimeframe]
  );

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 360,
      foreColor: "#e2e8f0",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#94a3b8"
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        formatter: (value) => value.toFixed(4),
        style: {
          colors: "#94a3b8"
        }
      }
    },
    tooltip: {
      theme: "dark",
      x: {
        show: true
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#22c55e",
          downward: "#ef4444"
        },
        wick: {
          useFillColor: true
        }
      }
    },
    grid: {
      borderColor: "rgba(148, 163, 184, 0.15)"
    }
  };

  return (
    <section className="card chart-card">
      <div className="chart-header">
        <div className="title">
          <span>الرسم البياني الشمعي</span>
        </div>
        <div className="timeframes">
          {timeframeOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className={`timeframe ${activeTimeframe === option.key ? "active" : ""}`}
              onClick={() => setActiveTimeframe(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <ReactApexChart options={options} series={series} type="candlestick" height={360} />
    </section>
  );
}
