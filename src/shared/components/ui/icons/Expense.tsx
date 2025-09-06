import type { IconProps } from '@/shared/types';

export function ExpenseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2591 18.3475H6.42182C4.53409 18.3475 3.35999 17.0156 3.35999 15.1307V8.02816C3.35999 6.14324 4.53409 4.81128 6.42088 4.81128H17.5791C19.4602 4.81128 20.64 6.14324 20.64 8.02816V9.94668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.44421 8.17126H7.79112"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M9.80457 11.5803C9.80457 10.3671 10.7881 9.38443 12.0005 9.38443C13.2138 9.38443 14.1974 10.3671 14.1974 11.5803C14.1974 12.7937 13.2138 13.7763 12.0005 13.7763C10.7881 13.7763 9.80457 12.7937 9.80457 11.5803Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.5377 16.2976L18.5889 18.3487L20.6391 16.2976"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M18.5889 13.5V18.3477"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
