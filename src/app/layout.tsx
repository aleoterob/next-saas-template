import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppStoreProvider } from '@/shared/providers/app-store-provider';
import { QueryProvider } from '@/shared/providers/query-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next SaaS Template',
  description: 'Next SaaS Template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="gradient-page-background min-h-full flex flex-col">
        <AppStoreProvider>
          <QueryProvider>{children}</QueryProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
}
