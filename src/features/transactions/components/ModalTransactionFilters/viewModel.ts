import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import type { BankAccount } from '@/features/bankAccounts';
import { bankAccountsQueryKeys } from '@/features/bankAccounts/constants/bankAccountsQueryKeys';
import { useVisibleTransactionFiltersStore } from '../../stores/useVisibleTransactionFiltersStore';

export function useModalTransactionFiltersViewModel() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);
  const queryClient = useQueryClient();
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const { visible, setVisibility } = useVisibleTransactionFiltersStore();
  const bankAccounts = queryClient.getQueryData(
    bankAccountsQueryKeys.getBankAccounts()
  ) as BankAccount[];

  function handleSelectBankAcccountId(value: string) {
    setSelectedBankAccountId(prevState => (prevState === value ? null : value));
  }

  function handleChangeYear(step: number) {
    setYearSelected(prevState => prevState + step);
  }

  return {
    handleChangeYear,
    yearSelected,
    visible,
    setVisibility,
    selectedBankAccountId,
    handleSelectBankAcccountId,
    bankAccounts,
  };
}
