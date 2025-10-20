"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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

export const description = "A pie chart with stacked sections";

const chartData = [
  {
    category: "จำนวนผู้ที่ลงทะเบียนเข้าร่วมกิจกรรม",
    total: 500,
    fill: "var(--color-primary)",
  },
  {
    category: "จำนวนผู้ที่ยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม",
    total: 100,
    fill: "var(--color-gray-100)",
  },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-pink-500)",
  },
  จำนวนผู้ที่ลงทะเบียนเข้าร่วมกิจกรรม: {
    label: "จำนวนผู้ที่ลงทะเบียนเข้าร่วมกิจกรรม",
    color: "var(--color-primary)",
  },
  จำนวนผู้ที่ยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม: {
    label: "จำนวนผู้ที่ยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม",
    color: "var(--color-gray-100)",
  },
} satisfies ChartConfig;

export function PieChartStacked() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="total"
                  nameKey="category"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    return chartConfig[
                      payload?.[0].dataKey as keyof typeof chartConfig
                    ].label;
                  }}
                />
              }
            />
            <Pie
              data={chartData}
              outerRadius={140}
              dataKey="total"
              nameKey="category"
            />
            <Pie
              data={chartData}
              dataKey="total"
              innerRadius={142}
              outerRadius={149}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
