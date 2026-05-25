import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  component: ToggleGroup,
  tags: ['ai-generated'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Alignment: Story = {
  render: () => (
    <ToggleGroup defaultValue={['center']} aria-label="Text alignment">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
}
