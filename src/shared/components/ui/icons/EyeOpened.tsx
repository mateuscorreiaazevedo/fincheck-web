import type { IconProps } from '@/shared/types';

export function EyeOpenedIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.7474C7.2 5.81337 16.8 5.81337 20 12.7474M12.0034 16.4776C10.7314 16.4776 9.69141 15.4426 9.69141 14.1646C9.69141 12.8876 10.7314 11.8516 12.0034 11.8516C13.2764 11.8516 14.3164 12.8876 14.3164 14.1646C14.3164 15.4426 13.2764 16.4776 12.0034 16.4776Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
