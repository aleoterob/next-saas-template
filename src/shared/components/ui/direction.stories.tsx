import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { DirectionProvider } from './direction'

const DirectionExample = () => (
  <DirectionProvider direction="rtl">
    <div className="rounded-lg border p-3 text-sm" dir="rtl">
      لوحة التحكم
    </div>
  </DirectionProvider>
)

const meta = {
  component: DirectionExample,
  tags: ['ai-generated'],
} satisfies Meta<typeof DirectionExample>

export default meta
type Story = StoryObj<typeof meta>

export const RightToLeft: Story = {}
