import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'

const meta = {
  component: Command,
  tags: ['ai-generated'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Palette: Story = {
  render: () => (
    <Command className="max-w-md rounded-lg border bg-popover">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Dashboard <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Admin">
          <CommandItem>Team members</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
