import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { LoginBrandSeparator } from './login-brand-separator'

const meta = {
  component: LoginBrandSeparator,
  tags: ['ai-generated'],
} satisfies Meta<typeof LoginBrandSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm text-primary-foreground">
      <LoginBrandSeparator />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('LB')).toBeVisible()
  },
}

export const Compact: Story = {
  render: () => (
    <div className="max-w-xs text-primary-foreground">
      <LoginBrandSeparator className="h-7" />
    </div>
  ),
}
