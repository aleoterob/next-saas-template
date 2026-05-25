import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Separator } from './separator'

const meta = {
  component: Separator,
  tags: ['ai-generated'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="max-w-sm">
      <p className="text-sm">Account</p>
      <Separator className="my-3" />
      <p className="text-sm text-muted-foreground">Billing and team access.</p>
    </div>
  ),
}
