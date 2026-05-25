import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { AspectRatio } from './aspect-ratio'

const meta = {
  component: AspectRatio,
  tags: ['ai-generated'],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const VideoFrame: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: () => (
    <AspectRatio ratio={16 / 9} className="max-w-lg rounded-lg bg-muted">
      <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
        16:9 preview
      </div>
    </AspectRatio>
  ),
}
