import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './chart'

const chartData = [
  { month: 'Jan', signups: 186 },
  { month: 'Feb', signups: 305 },
  { month: 'Mar', signups: 237 },
]

const chartConfig = {
  signups: {
    label: 'Signups',
    color: 'var(--primary)',
  },
} satisfies ChartConfig

function ChartExample() {
  return (
    <ChartContainer config={chartConfig} className="min-h-52 w-full max-w-lg">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="signups" fill="var(--color-signups)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

const meta = {
  component: ChartExample,
  tags: ['ai-generated'],
} satisfies Meta<typeof ChartExample>

export default meta
type Story = StoryObj<typeof meta>

export const BarOverview: Story = {
  render: () => <ChartExample />,
}
