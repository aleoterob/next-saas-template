import { http, HttpResponse } from 'msw'

export const mswHandlers = {
  auth: [
    http.post('/api/auth/login', () =>
      HttpResponse.json({
        user: {
          id: 'user-1',
          email: 'demo@example.com',
          name: 'Demo User',
        },
        token: 'storybook-token',
      }),
    ),
    http.get('/api/auth/me', () =>
      HttpResponse.json({
        user: {
          id: 'user-1',
          email: 'demo@example.com',
          name: 'Demo User',
        },
      }),
    ),
  ],
}
