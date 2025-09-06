import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils';

export function RoundedIcon({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex size-[42px] items-center justify-center rounded-pill bg-gray-2',
        className
      )}
      {...props}
    />
  );
}
