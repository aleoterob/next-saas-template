import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from './native-select'

const meta = {
  component: NativeSelect,
  tags: ['ai-generated'],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect defaultValue="growth" className="max-w-xs">
      <NativeSelectOptGroup label="Plans">
        <NativeSelectOption value="starter">Starter</NativeSelectOption>
        <NativeSelectOption value="growth">Growth</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}
