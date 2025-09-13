import { useAuth } from '@/features/auth';
import { StringBuilder } from '@/shared';

export function UserMenu() {
  const { loggedUser, signout } = useAuth();

  const fallbackUser = StringBuilder.parse(
    `${loggedUser?.firstName} ${loggedUser?.lastName}`
  )
    .fallbackLetters()
    .build();

  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-1 bg-teal-0"
      onClick={signout}
      type="button"
    >
      <span className="-tracking-[0.5px] font-medium text-sm text-teal-9">
        {fallbackUser}
      </span>
    </button>
  );
}
