import { useCallback } from 'react';
import {
  formatCurrencyHelper,
  RoundedIcon,
  VisibilityToggleContent,
} from '@/shared';
import { useVisibilityModalEditBankAccountStore } from '../../../hooks/useVisibilityModalEditBankAccountStore';
import type { BankAccount } from '../../../types/BankAccount';
import { BankAccountCardIcon } from './BankAccountCardIcon';

export function BankAccountCard(bankAccount: BankAccount) {
  const { accountType, currentBalanceInCents, name, color } = bankAccount;
  const { setVisibility } = useVisibilityModalEditBankAccountStore();

  const handleOpenModalEditBankAccount = useCallback(() => {
    setVisibility({
      bankAccount,
      visible: true,
    });
  }, [bankAccount]);

  return (
    <button
      className="flex h-[200px] w-full flex-col justify-between rounded-2xl border-teal-4 border-b-4 bg-white p-4 transition-all hover:bg-gray-0"
      onClick={handleOpenModalEditBankAccount}
      style={{
        borderColor: color,
      }}
      type="button"
    >
      <div className="flex flex-col items-start gap-1">
        <RoundedIcon>
          <BankAccountCardIcon
            className="size-6 text-gray-7"
            type={accountType}
          />
        </RoundedIcon>
        <span className="text-wrap font-medium text-gray-8 tracking-[-0.5px]">
          {name}
        </span>
      </div>
      <div className="flex flex-col items-start">
        <VisibilityToggleContent>
          <span className="font-medium text-gray-8 tracking-[-0.5px]">
            {formatCurrencyHelper(currentBalanceInCents)}
          </span>
        </VisibilityToggleContent>
        <small className="text-gray-6 text-sm">Saldo atual</small>
      </div>
    </button>
  );
}
