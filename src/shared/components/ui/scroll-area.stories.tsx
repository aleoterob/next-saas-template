import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ScrollArea, ScrollBar } from './scroll-area'

const meta = {
  component: ScrollArea,
  tags: ['ai-generated'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-40 w-64 rounded-lg border">
      <div className="grid gap-2 p-3 text-sm">
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>Activity event {index + 1}</p>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  ),
}
