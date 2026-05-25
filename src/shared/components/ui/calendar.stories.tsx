import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Calendar } from './calendar'

const meta = {
  component: Calendar,
  tags: ['ai-generated'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const SingleMonth: Story = {
  args: {
    mode: 'single',
    selected: new Date(2026, 4, 25),
    month: new Date(2026, 4, 1),
  },
}
