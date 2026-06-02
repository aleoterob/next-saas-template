import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { JotaiProvider } from '@/shared/providers/jotai-provider';
import { TanstackQueryProvider } from '@/shared/providers/tanstack-query-provider';
import './globals.css';
import { cn } from "@/shared/utils/cn";

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "antialiased", "font-sans", raleway.variable)}
    >
      <body className="gradient-page-background min-h-full flex flex-col">
        <JotaiProvider>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
