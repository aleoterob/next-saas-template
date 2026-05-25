import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Globe } from './globe'

const meta = {
  component: Globe,
  tags: ['ai-generated'],
} satisfies Meta<typeof Globe>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-80 w-80 overflow-hidden rounded-lg border">
      <Globe
        config={{
          markers: [{ location: [40.7128, -74.006], size: 0.08 }],
        }}
      />
    </div>
  ),
}
