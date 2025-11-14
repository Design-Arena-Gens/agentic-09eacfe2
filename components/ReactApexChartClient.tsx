'use client';

import dynamic from "next/dynamic";
import type { Props as ReactApexChartProps } from "react-apexcharts";

const ReactApexChart = dynamic(
  () => import("react-apexcharts").then((mod) => mod.default),
  { ssr: false }
) as unknown as (props: ReactApexChartProps) => JSX.Element;

export type { ReactApexChartProps };
export default ReactApexChart;
