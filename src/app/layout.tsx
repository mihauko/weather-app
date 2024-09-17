import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import Provider from './_provider';

import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const generateMetadata = (): Metadata => ({
  title: {
    default: 'Weather app',
    template: `%s | Weather app`,
  },
  description: 'Get the latest weather information for Gliwice and Hamburg.',
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
