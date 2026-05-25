import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from './input-group'

const meta = {
  component: InputGroup,
  tags: ['ai-generated'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm">Go</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
