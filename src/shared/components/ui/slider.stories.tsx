import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Slider } from './slider'

const meta = {
  component: Slider,
  tags: ['ai-generated'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    className: 'max-w-sm',
  },
}
