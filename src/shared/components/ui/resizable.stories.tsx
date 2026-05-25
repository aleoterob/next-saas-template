import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable'

const meta = {
  component: ResizablePanelGroup,
  tags: ['ai-generated'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Panels: Story = {
  render: () => (
    <ResizablePanelGroup
      className="min-h-40 max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize={35} className="p-3 text-sm">
        Sidebar
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={65} className="p-3 text-sm">
        Content
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
