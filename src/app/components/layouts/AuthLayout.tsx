import { memo } from 'react';
import { Outlet } from 'react-router';
import illustration from '@/app/assets/images/illustration.png';
import { Logo } from '../ui/icons/Logo';

function AuthLayout() {
  return (
    <main className="flex h-full">
      <div className="flex h-full w-1/2 flex-col items-center justify-center gap-16">
        <Logo className="h-6 text-gray-5" />

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
      <div className="relative flex h-full w-1/2 items-center justify-center p-8">
        <img
          alt="auth-illustration"
          className="h-full max-h-[960px] w-full max-w-[656px] select-none rounded-[32px] object-cover"
          src={illustration}
        />
        <div className="absolute bottom-8 h-auto max-w-[656px] rounded-b-[32px] bg-white p-10">
          <Logo className="h-8 text-teal-9" />
          <p className="mt-6 font-medium text-gray-7 text-xl">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </main>
  );
}

export default memo(AuthLayout);
