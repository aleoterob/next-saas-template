import type { Preview } from '@storybook/nextjs-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

import '@/app/globals.css'
import { JotaiProvider } from '@/shared/providers/jotai-provider'
import { TanstackQueryProvider } from '@/shared/providers/tanstack-query-provider'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

const preview: Preview = {
  decorators: [
    (Story) => (
      <JotaiProvider>
        <TanstackQueryProvider>
          <div className="gradient-page-background min-h-svh p-6 text-foreground">
            <Story />
          </div>
        </TanstackQueryProvider>
      </JotaiProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    msw: {
      handlers: mswHandlers,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
