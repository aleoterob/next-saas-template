import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './button'
import { Toaster } from './sonner'

const meta = {
  component: Toaster,
  tags: ['ai-generated'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="outline">Toast trigger</Button>
      <Toaster />
    </div>
  ),
}
