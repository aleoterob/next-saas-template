import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  component: Select,
  tags: ['ai-generated'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <Select defaultOpen defaultValue="growth">
      <SelectTrigger>
        <SelectValue placeholder="Select plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Plans</SelectLabel>
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="growth">Growth</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
