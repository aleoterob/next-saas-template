import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from './empty'
import { Button } from './button'

const meta = {
  component: Empty,
  tags: ['ai-generated'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const NoProjects: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Create a workspace project to begin.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  ),
}
