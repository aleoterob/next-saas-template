import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const meta = {
  component: Table,
  tags: ['ai-generated'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Invoices: Story = {
  render: () => (
    <Table className="max-w-lg">
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
