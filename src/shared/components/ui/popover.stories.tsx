import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './button'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './popover'

const meta = {
  component: Popover,
  tags: ['ai-generated'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>Details</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Deployment</PopoverTitle>
          <PopoverDescription>
            Last deployed from the main branch.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}
