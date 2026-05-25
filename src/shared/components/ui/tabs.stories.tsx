import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  component: Tabs,
  tags: ['ai-generated'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Usage and billing summary.</TabsContent>
      <TabsContent value="activity">Recent workspace events.</TabsContent>
    </Tabs>
  ),
}
