import type { IconProps } from '@/shared/types';

export function BankIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.72245 8.55224L11.5923 3.47166C11.8231 3.32276 12.1209 3.32276 12.3517 3.47166L20.2224 8.55224C20.4216 8.6816 20.5426 8.9031 20.5426 9.14136V9.69325C20.5426 10.0795 20.2289 10.3931 19.8418 10.3931H4.10217C3.71501 10.3931 3.40137 10.0795 3.40137 9.69325V9.14136C3.40137 8.9031 3.52236 8.6816 3.72245 8.55224Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.9714 7.45505V7.46421"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M20.5684 20.0436L20.1971 18.3581C20.1477 18.1338 19.9485 17.9738 19.7187 17.9738H4.22382C3.99394 17.9738 3.79478 18.1338 3.74545 18.3581L3.37411 20.0436C3.30711 20.3489 3.53977 20.6383 3.85248 20.6383H20.091C20.4037 20.6383 20.6354 20.3489 20.5684 20.0436Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14.1377 10.3912V17.9745M18.4713 10.3912V17.9745M5.46899 10.3912V17.9745M9.80246 10.3912V17.9745"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
