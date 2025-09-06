import type { IconProps } from '@/shared/types';

export function CashIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.18843 4.94922H17.8116C19.777 4.94922 21 6.33668 21 8.30014V15.6986C21 17.6621 19.777 19.0495 17.8106 19.0495H6.18843C4.22303 19.0495 3 17.6621 3 15.6986V8.30014C3 6.33668 4.22886 4.94922 6.18843 4.94922Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.66406 11.2988V12.7019"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.3359 12.7019V11.2988"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M14.2868 12.0003C14.2868 10.7365 13.2623 9.71289 11.9994 9.71289C10.7355 9.71289 9.71094 10.7365 9.71094 12.0003C9.71094 13.2642 10.7355 14.2878 11.9994 14.2878C13.2623 14.2878 14.2868 13.2642 14.2868 12.0003Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
