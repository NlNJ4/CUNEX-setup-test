"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
} from "@assets/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@assets/components/ui/chart";

export const description = "A pie chart with a label";

const chartData = [
  { browser: "chrome", visitors: 232, fill: "var(--color-chart-pink-500)" },
  { browser: "safari", visitors: 131, fill: "var(--color-chart-pink-400)" },
  { browser: "firefox", visitors: 223, fill: "var(--color-chart-pink-300)" },
  { browser: "edge", visitors: 121, fill: "var(--color-chart-pink-200)" },
  { browser: "other", visitors: 153, fill: "var(--color-chart-pink-100)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--color-chart-pink-500)",
  },
  safari: {
    label: "Safari",
    color: "var(--color-chart-pink-400)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--color-chart-pink-300)",
  },
  edge: {
    label: "Edge",
    color: "var(--color-chart-pink-200)",
  },
  other: {
    label: "Other",
    color: "var(--color-chart-pink-100)",
  },
} satisfies ChartConfig;

export function PieChartLabel() {
  return (
    <Card className="flex flex-col rounded-none shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[300px] pb-0"
        >
          <PieChart className="border border-neutral-black">
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie 
              data={chartData} 
              dataKey="visitors" 
              label={({ payload }) => payload.browser} 
              nameKey="browser"
              
            
            />  
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
