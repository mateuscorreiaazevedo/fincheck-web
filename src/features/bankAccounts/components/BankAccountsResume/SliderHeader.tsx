import type { ReactNode } from 'react';
import { LoadingSkeleton } from '@/shared';

interface ISliderHeaderProps {
  isLoading: boolean;
  children?: ReactNode;
}

export function BankAccountsSliderHeader({
  children,
  isLoading,
}: ISliderHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <LoadingSkeleton className="h-5 w-28" isLoading={isLoading}>
        <strong className="text-lg text-white tracking-[-1px]">
          Minhas contas
        </strong>
      </LoadingSkeleton>
      {children}
    </div>
  );
}
