import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './input'
import { Label } from './label'

const meta = {
  component: Label,
  tags: ['ai-generated'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const FieldLabel: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-2">
      <Label htmlFor="name">Project name</Label>
      <Input id="name" defaultValue="Next SaaS Template" />
    </div>
  ),
}
