import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Raleway } from 'next/font/google';
import { JotaiProvider } from '@/shared/providers/jotai-provider';
import { TanstackQueryProvider } from '@/shared/providers/tanstack-query-provider';
import './globals.css';
import { cn } from "@/shared/utils/cn";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, ralewayHeading.variable)}
    >
      <body className="gradient-page-background min-h-full flex flex-col">
        <JotaiProvider>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
