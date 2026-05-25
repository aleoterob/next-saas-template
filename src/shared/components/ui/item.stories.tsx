import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from './item'

const meta = {
  component: Item,
  tags: ['ai-generated'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const ProjectList: Story = {
  render: () => (
    <ItemGroup className="max-w-lg">
      <Item>
        <ItemMedia variant="icon">ST</ItemMedia>
        <ItemContent>
          <ItemTitle>Starter template</ItemTitle>
          <ItemDescription>Next.js SaaS starter workspace.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}
