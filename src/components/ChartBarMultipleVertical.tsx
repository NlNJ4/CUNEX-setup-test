"use client"

 import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@assets/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@assets/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, ipad: 50 },
  { month: "February", desktop: 305, mobile: 200, ipad: 100 },
  { month: "March", desktop: 237, mobile: 120, ipad: 80 },
  { month: "April", desktop: 73, mobile: 190, ipad: 60 },
  { month: "May", desktop: 209, mobile: 130, ipad: 90 },
  { month: "June", desktop: 214, mobile: 140, ipad: 70 },
]

const chartData2Bar = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

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
  }
} satisfies ChartConfig

export function ChartBarMultipleVertical() {
  return (
    <Card className="bg-neutral-100 shadow-elevation-2">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} >
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>  
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} >
              <LabelList
                dataKey="mobile"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
            <Bar dataKey="ipad" fill="var(--color-ipad)" radius={4} >
              <LabelList
                dataKey="ipad"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
