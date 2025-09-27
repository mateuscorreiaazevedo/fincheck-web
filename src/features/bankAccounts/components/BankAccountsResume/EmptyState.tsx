import { LoadingSkeleton } from '@/shared';
import { ButtonOpenModalCreateBankAccount } from './ButtonOpenModalCreateBankAccount';
import { BankAccountsSliderHeader } from './SliderHeader';

interface IEmptyStateProps {
  isLoading?: boolean;
  onOpenModalCreateBankAccount?(): void;
}

export function BankAccountsResumeEmptyState({
  isLoading = false,
  onOpenModalCreateBankAccount,
}: IEmptyStateProps) {
  return (
    <div className="flex flex-col">
      <BankAccountsSliderHeader isLoading={isLoading} />
      <LoadingSkeleton
        className="h-52 w-full rounded-2xl"
        isLoading={isLoading}
      >
        <ButtonOpenModalCreateBankAccount
          onClick={onOpenModalCreateBankAccount}
        />
      </LoadingSkeleton>
    </div>
  );
}
