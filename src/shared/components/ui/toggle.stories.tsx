import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Toggle } from './toggle'

const meta = {
  component: Toggle,
  tags: ['ai-generated'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    children: 'Bold',
  },
}
