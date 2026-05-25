import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from './combobox'

const meta = {
  component: Combobox,
  tags: ['ai-generated'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <Combobox defaultOpen items={['Starter', 'Growth', 'Enterprise']}>
      <ComboboxInput placeholder="Select plan" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="Starter">Starter</ComboboxItem>
          <ComboboxItem value="Growth">Growth</ComboboxItem>
          <ComboboxItem value="Enterprise">Enterprise</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
