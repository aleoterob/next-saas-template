import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Kbd, KbdGroup } from './kbd'

const meta = {
  component: Kbd,
  tags: ['ai-generated'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Shortcut: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
