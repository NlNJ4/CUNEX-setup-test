"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@assets/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@assets/components/ui/chart";

export const description = "A bar chart with a label";

const chartData = [
  { faculty: "คณะวิศวกรรมศาสตร์", total: 92 },
  { faculty: "คณะอักษรศาสตร์", total: 45 },
  { faculty: "คณะสถาปัตยกรรมศาสตร์", total: 67 },
  { faculty: "คณะวิทยาศาสตร์", total: 83 },
];

const chartConfig = {
  total: {
    label: "total",
    color: "var(--color-primary)",
  },
} satisfies ChartConfig;

export function ChartBarHorizontal() {
  return (
    // <Card className="border-none">
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="var(--color-gray-300)"
              strokeWidth={0.4}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="faculty"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              type="number"
              dataKey="total"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              
              
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total" fill="var(--color-total)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
