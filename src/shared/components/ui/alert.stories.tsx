import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Alert, AlertAction, AlertDescription, AlertTitle } from './alert'
import { Button } from './button'

const meta = {
  component: Alert,
  tags: ['ai-generated'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-lg">
      <AlertTitle>Workspace ready</AlertTitle>
      <AlertDescription>
        Your project has been provisioned and can receive traffic.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-lg">
      <AlertTitle>Deployment failed</AlertTitle>
      <AlertDescription>Check the build logs before retrying.</AlertDescription>
    </Alert>
  ),
}
