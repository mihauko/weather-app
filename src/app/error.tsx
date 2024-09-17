'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-34 container mx-auto flex min-h-screen flex-col items-center lg:p-12">
      <h2 className="pb-4">{error.message || 'Something goes wrong!'}</h2>
      <Button variant="outline" onClick={() => reset()}>
        Try again
      </Button>
    </main>
  );
}
