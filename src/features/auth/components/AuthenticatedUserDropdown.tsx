import { useAuth } from '@/features/auth';
import { DropdownMenu, LogoutIcon, StringBuilder } from '@/shared';

export function AuthenticatedUserDropdown() {
  const { authenticatedUser, signout } = useAuth();

  const fallbackUser = StringBuilder.parse([
    authenticatedUser?.firstName ?? '',
    authenticatedUser?.lastName ?? '',
  ])
    .listFallback()
    .build();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-1 bg-teal-0 outline-none"
          type="button"
        >
          <span className="-tracking-[0.5px] font-medium text-sm text-teal-9">
            {fallbackUser}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" className="mt-2 w-32">
        <DropdownMenu.Header>
          <DropdownMenu.Label className="font-normal text-gray-7">
            Olá{' '}
            <strong className="font-semibold text-teal-9">
              {authenticatedUser?.firstName}!
            </strong>
          </DropdownMenu.Label>
        </DropdownMenu.Header>
        <DropdownMenu.Separator />
        <DropdownMenu.Body>
          <DropdownMenu.Item onSelect={signout}>
            <LogoutIcon className="size-5" />
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Body>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
