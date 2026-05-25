import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import { Input } from './input'

const meta = {
  component: Input,
  tags: ['ai-generated'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'm@example.com',
    'aria-label': 'Email',
  },
}

export const Invalid: Story = {
  args: {
    type: 'email',
    value: 'not-an-email',
    'aria-label': 'Email',
    'aria-invalid': true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText(/email/i)).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    value: 'Password1!',
    'aria-label': 'Contraseña',
  },
}
