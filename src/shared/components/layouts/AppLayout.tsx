import { memo } from 'react';
import { Outlet } from 'react-router';
import { UserMenu } from '@/features/users';
import { Logo } from '../ui';

function AppLayout() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 lg:p-8 lg:pt-6">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-teal-9" />
        <UserMenu />
      </header>
      <Outlet />
    </div>
  );
}

export default memo(AppLayout);
