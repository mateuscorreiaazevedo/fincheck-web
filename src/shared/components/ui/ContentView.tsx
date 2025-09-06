import type { ComponentProps, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

export function ContentView({
  className,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) {
  return (
    <div
      className={cn('h-full w-full rounded-2xl px-4 py-8 lg:p-10', className)}
      {...props}
    />
  );
}
