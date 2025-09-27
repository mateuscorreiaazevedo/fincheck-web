import type { IconProps } from '@/shared/types';
import { cn } from '@/shared/utils';

export function RightIcon({ className }: IconProps) {
  return (
    <svg
      className={cn('size-6', className)}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
