import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  component: RadioGroup,
  tags: ['ai-generated'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const BillingCycle: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly" className="grid gap-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="monthly" value="monthly" />
        <Label htmlFor="monthly">Monthly</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="yearly" value="yearly" />
        <Label htmlFor="yearly">Yearly</Label>
      </div>
    </RadioGroup>
  ),
}
