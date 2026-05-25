import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Progress, ProgressLabel, ProgressValue } from './progress'

const meta = {
  component: Progress,
  tags: ['ai-generated'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Uploading: Story = {
  args: {
    value: 64,
  },
  render: () => (
    <Progress value={64} className="max-w-sm">
      <ProgressLabel>Uploading</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}
