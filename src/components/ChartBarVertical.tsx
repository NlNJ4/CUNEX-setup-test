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

export const description = "A bar chart with a custom label"

const chartData = [
  { faculty: "คณะวิศวกรรมศาสตร์", total: 92 },
  { faculty: "คณะอักษรศาสตร์", total: 45 },
  { faculty: "คณะสถาปัตยกรรมศาสตร์", total: 67 },
  { faculty: "คณะวิทยาศาสตร์", total: 83 },
  { faculty: "คณะครุศาสตร์", total: 54 },
  
  
]

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--color-primary)",
  },
  label: {
    color: "var(--color-neutral-black)",
  }
} satisfies ChartConfig

export function ChartBarVertical() {
  return (
    <Card className="bg-neutral-100 shadow-elevation-2">
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
            
            
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="total" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="total"
              layout="vertical"
              fill="transparent"
              radius={2}
              barSize={32}
            >
              <LabelList
                dataKey="faculty"
                position="insideBottomLeft"
                offset={0}
                className="fill-(--color-label)"
                style={{
                  fontFamily: "var(--font-chula-regular)",
                  fontSize: "22px",
                  lineHeight: "28px",
                  letterSpacing: "0px",
                  
                }}
              />
              <LabelList
                dataKey="total"
                position="right"
                offset={8}
                className="fill-foreground"
                style={{
                  fontFamily: "var(--font-chula-regular)",
                  fontSize: "22px",
                  lineHeight: "28px",
                  letterSpacing: "0px",
                  
                }}
                
              />
            </Bar>
            <Bar
              dataKey="total"
              layout="vertical"
              fill="var(--color-total)"
              radius={2}
              barSize={32}
              
            >
              {/* <LabelList
                dataKey="faculty"
                position="insideTopLeft"
                offset={8}
                className="fill-(--color-label)"
                style={{
                  fontFamily: "var(--font-chula-regular)",
                  fontSize: "22px",
                  lineHeight: "28px",
                  letterSpacing: "0px",

                }}
              /> */}
              <LabelList
                dataKey="total"
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
