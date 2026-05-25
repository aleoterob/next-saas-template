import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Continue',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Save draft',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Submitting',
    disabled: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /submitting/i }),
    ).toBeDisabled()
  },
}

export const CssCheck: Story = {
  args: {
    children: 'Ingresar',
    variant: 'luaPale',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /ingresar/i })

    await expect(getComputedStyle(button).backgroundColor).toBe(
      'rgb(45, 205, 241)',
    )
  },
}
