import { PlusIcon } from '@/shared';
import { BankAccountsSliderHeader } from './SliderHeader';

interface IEmptyStateProps {
  isLoading?: boolean;
}

export function BankAccountsResumeEmptyState({
  isLoading = false,
}: IEmptyStateProps) {
  return (
    <div className="flex flex-col">
      <BankAccountsSliderHeader isLoading={isLoading} />
      <button
        className="flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-teal-6 border-dashed text-white"
        type="button"
      >
        <div className="flex size-11 items-center justify-center rounded-full border-2 border-white border-dashed">
          <PlusIcon className="size-6" />
        </div>
        <span className="w-32 text-center font-medium tracking-[-0.5px]">
          Cadastre uma nova conta
        </span>
      </button>
    </div>
  );
}
