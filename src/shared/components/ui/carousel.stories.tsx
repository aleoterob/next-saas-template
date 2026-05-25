import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

const meta = {
  component: Carousel,
  tags: ['ai-generated'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Cards: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {['Plan', 'Build', 'Ship'].map((item) => (
          <CarouselItem key={item}>
            <div className="flex aspect-video items-center justify-center rounded-lg border bg-card text-sm">
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
