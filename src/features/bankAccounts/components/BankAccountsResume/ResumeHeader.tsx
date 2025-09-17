import {
  formatCurrencyHelper,
  LoadingSkeleton,
  VisibilityToggleButton,
  VisibilityToggleContent,
} from '@/shared';

interface IProps {
  totalBalanceInCents: number;
  isLoading: boolean;
}

export function BankAccountsResumeHeader({
  isLoading,
  totalBalanceInCents,
}: IProps) {
  return (
    <header className="mb-10 md:mb-0">
      <LoadingSkeleton className="h-4 w-20" isLoading={isLoading}>
        <span className="text-white tracking-[-0.5px]">Saldo total</span>
      </LoadingSkeleton>
      <div className="flex items-center gap-2">
        <LoadingSkeleton className="h-6 w-32" isLoading={isLoading}>
          <VisibilityToggleContent>
            <strong className="text-2xl text-white tracking-[-1px]">
              {formatCurrencyHelper(totalBalanceInCents)}
            </strong>
          </VisibilityToggleContent>
        </LoadingSkeleton>
        <LoadingSkeleton className="size-8 rounded-full" isLoading={isLoading}>
          <VisibilityToggleButton />
        </LoadingSkeleton>
      </div>
    </header>
  );
}
