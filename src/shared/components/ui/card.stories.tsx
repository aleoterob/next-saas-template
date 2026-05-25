import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Button } from './button'

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const AccountSummary: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Account summary</CardTitle>
        <CardDescription>Current workspace usage</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          3 active projects and 12 team members.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Manage</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/3 active projects/i)).toBeVisible()
  },
}

export const Compact: Story = {
  render: () => (
    <Card size="sm" className="max-w-sm">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
        <CardDescription>Smaller spacing for dense views</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Ready for dashboard sidebars.</p>
      </CardContent>
    </Card>
  ),
}
