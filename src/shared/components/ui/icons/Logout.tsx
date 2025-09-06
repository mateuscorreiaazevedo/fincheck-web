import type { IconProps } from '@/shared/types';

export function LogoutIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4822 4.08H8.06193C5.99514 4.08 4.32001 5.75609 4.32001 7.82193V15.6965C4.32001 17.7633 5.99514 19.4393 8.06193 19.4393H14.4822M15.9729 8.3175L19.6803 11.7599M19.6803 11.7599L15.9729 15.2024M19.6803 11.7599L10.6763 11.7603"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
