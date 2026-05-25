import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Skeleton } from './skeleton'

const meta = {
  component: Skeleton,
  tags: ['ai-generated'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingCard: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-8 w-28" />
    </div>
  ),
}
