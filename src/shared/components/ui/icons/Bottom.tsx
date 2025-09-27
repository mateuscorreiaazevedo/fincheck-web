import type { IconProps } from '@/shared/types';
import { cn } from '@/shared/utils';

export function BottomIcon({ className }: IconProps) {
  return (
    <svg
      className={cn('size-6', className)}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9L12 15L6 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
