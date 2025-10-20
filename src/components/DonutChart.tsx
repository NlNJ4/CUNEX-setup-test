"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@assets/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@assets/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
    {
        category: "จำนวนผู้ที่ลงทะเบียนเข้าร่วมกิจกรรม",
        total: 500,
        fill: "var(--color-primary)",
    },
    {
        category: "จำนวนผู้ที่ยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม",
        total: 100,
        fill: "var(--color-gray-300)",
    },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-pink-500)",
  },
} satisfies ChartConfig;

export function DonutChart() {
  const registeredPercent = React.useMemo(() => {
    const total = chartData.reduce((acc, curr) => acc + curr.total, 0);
    const registered = chartData[0].total;
    return ((registered / total) * 100).toFixed(0);
  }, []);

  return (
    <Card className="flex flex-col py-0">
      <CardContent className="flex-1 pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] p-0"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="category"
              innerRadius={90}
              strokeWidth={4}
              labelLine={{ strokeWidth: 2 }}
              width={280}
              height={280}
              label={({ name, value, percent }) => {
                return `${name}: ${value} (${(percent * 100).toFixed(0)}%)`;
              }}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="headline-large-emphasized"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-primary"
                        >
                          {registeredPercent.toLocaleString()}%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
