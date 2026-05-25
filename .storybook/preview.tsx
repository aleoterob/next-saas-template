import type { Preview } from '@storybook/nextjs-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

import '@/app/globals.css'
import { AppStoreProvider } from '@/shared/providers/app-store-provider'
import { QueryProvider } from '@/shared/providers/query-provider'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppStoreProvider>
        <QueryProvider>
          <div className="gradient-page-background min-h-svh p-6 text-foreground">
            <Story />
          </div>
        </QueryProvider>
      </AppStoreProvider>
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
