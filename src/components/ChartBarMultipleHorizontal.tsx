"use client";
import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts";

import { Card, CardContent } from "@assets/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@assets/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, ipad: 50 },
  { month: "February", desktop: 305, mobile: 200, ipad: 100 },
  { month: "March", desktop: 237, mobile: 120, ipad: 80 },
  { month: "April", desktop: 73, mobile: 190, ipad: 60 },
  { month: "May", desktop: 209, mobile: 130, ipad: 90 },
  { month: "June", desktop: 214, mobile: 140, ipad: 70 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-pink-500)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-pink-400)",
  },
  ipad: {
    label: "iPad",
    color: "var(--chart-pink-300)",
  },
} satisfies ChartConfig;

export function ChartBarMultipleHorizontal() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="var(--color-gray-300)"
              strokeWidth={0.4}
              strokeDasharray="3 3"
            />
            <ChartLegend
              content={<ChartLegendContent />}
              className="border border-black"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="desktop"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}>
              <LabelList
                dataKey="mobile"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
            <Bar dataKey="ipad" fill="var(--color-ipad)" radius={4}>
              <LabelList
                dataKey="ipad"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
