import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'
import { Switch } from './switch'

const meta = {
  component: Switch,
  tags: ['ai-generated'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Notifications</Label>
    </div>
  ),
}
