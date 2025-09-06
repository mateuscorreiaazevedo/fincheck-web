import { useAuth } from '@/features/auth';
import { StringBuilder } from '@/shared';

export function UserMenu() {
  const { loggedUser } = useAuth();

  const fallbackUser = StringBuilder.parse(
    `${loggedUser?.firstName} ${loggedUser?.lastName}`
  )
    .fallbackLetters()
    .build();

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-1 bg-teal-0">
      <span className="-tracking-[0.5px] font-medium text-sm text-teal-9">
        {fallbackUser}
      </span>
    </div>
  );
}
