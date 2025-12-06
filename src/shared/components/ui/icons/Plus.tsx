import { memo } from 'react';
import type { IconProps } from '@/shared/types';
import { cn } from '@/shared/utils';

export const PlusIcon = memo(({ className }: IconProps) => {
  return (
    <svg
      className={cn('size-6', className)}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18M12 6V18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
});
