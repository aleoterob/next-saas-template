import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Avatar, AvatarFallback } from './avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta = {
  component: HoverCard,
  tags: ['ai-generated'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <HoverCard defaultOpen>
      <HoverCardTrigger className="text-sm underline underline-offset-4">
        @template
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">SaaS Template</p>
            <p className="text-sm text-muted-foreground">
              Shared building blocks for product teams.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
