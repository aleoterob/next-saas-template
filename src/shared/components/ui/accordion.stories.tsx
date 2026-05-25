import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

const meta = {
  component: Accordion,
  tags: ['ai-generated'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion defaultValue={['security']} className="w-full max-w-md">
      <AccordionItem value="security">
        <AccordionTrigger>Security settings</AccordionTrigger>
        <AccordionContent>
          Configure password, session, and recovery preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>Review invoices and payment methods.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
