import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'
import { Button } from './button'

const meta = {
  component: Collapsible,
  tags: ['ai-generated'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <Collapsible defaultOpen className="flex max-w-sm flex-col gap-2">
      <CollapsibleTrigger render={<Button variant="outline" />}>
        Toggle details
      </CollapsibleTrigger>
      <CollapsibleContent className="text-sm text-muted-foreground">
        Advanced settings are available for workspace administrators.
      </CollapsibleContent>
    </Collapsible>
  ),
}
