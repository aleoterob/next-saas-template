import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from './button-group'

const meta = {
  component: ButtonGroup,
  tags: ['ai-generated'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SegmentedActions: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Preview</Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>v1.0</ButtonGroupText>
      <Button variant="outline">Publish</Button>
    </ButtonGroup>
  ),
}
