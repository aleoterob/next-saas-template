import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { http, HttpResponse } from 'msw'
import { expect } from 'storybook/test'

import { LoginForm } from './login-form'

const meta = {
  component: LoginForm,
  tags: ['ai-generated'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'max-w-sm',
  },
}

export const PasswordToggle: Story = {
  args: {
    className: 'max-w-sm',
  },
  play: async ({ canvas, userEvent }) => {
    const password = canvas.getByLabelText('Contraseña', {
      selector: 'input',
    })
    const toggle = canvas.getByRole('button', { name: /mostrar contraseña/i })

    await expect(password).toHaveAttribute('type', 'password')
    await userEvent.click(toggle)
    await expect(password).toHaveAttribute('type', 'text')
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  },
}

export const InvalidSubmit: Story = {
  args: {
    className: 'max-w-sm',
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^ingresar$/i }))

    await expect(await canvas.findByText(/ingresa un email valido/i)).toBeVisible()
    await expect(
      await canvas.findByText(/la contraseña debe tener al menos 7 caracteres/i),
    ).toBeVisible()
  },
}

export const ServerError: Story = {
  args: {
    className: 'max-w-sm',
  },
  parameters: {
    msw: {
      handlers: [
        http.post('/api/auth/login', () =>
          HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 }),
        ),
      ],
    },
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText(/email/i), 'demo@example.com')
    await userEvent.type(
      canvas.getByLabelText('Contraseña', { selector: 'input' }),
      'Password1!',
    )
    await userEvent.click(canvas.getByRole('button', { name: /^ingresar$/i }))

    await expect(await canvas.findByRole('alert')).toHaveTextContent(
      /no pudimos iniciar sesion/i,
    )
  },
}
