import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Textarea } from './textarea'

const meta = {
  component: Textarea,
  tags: ['ai-generated'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Write a project note...',
    className: 'max-w-sm',
  },
}
