import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './context-menu'

const meta = {
  component: ContextMenu,
  tags: ['ai-generated'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <ContextMenu open>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm">
        Right click area
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Page</ContextMenuLabel>
          <ContextMenuItem>Refresh</ContextMenuItem>
          <ContextMenuCheckboxItem checked>Show grid</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Remove</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
