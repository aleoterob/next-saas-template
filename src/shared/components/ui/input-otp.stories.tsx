import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from './input-otp'

function InputOTPExample() {
  return (
    <InputOTP maxLength={6} value="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

const meta = {
  component: InputOTPExample,
  tags: ['ai-generated'],
} satisfies Meta<typeof InputOTPExample>

export default meta
type Story = StoryObj<typeof meta>

export const Code: Story = {
  render: () => <InputOTPExample />,
}
