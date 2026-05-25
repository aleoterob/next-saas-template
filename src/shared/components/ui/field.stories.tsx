import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './input'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from './field'

const meta = {
  component: Field,
  tags: ['ai-generated'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const FormFields: Story = {
  render: () => (
    <FieldSet className="max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="workspace">Workspace</FieldLabel>
          <Input id="workspace" defaultValue="SaaS Template" />
          <FieldDescription>Visible to invited team members.</FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldTitle>Billing email</FieldTitle>
          <Input defaultValue="billing" aria-invalid />
          <FieldError errors={[{ message: 'Use a valid email address.' }]} />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
