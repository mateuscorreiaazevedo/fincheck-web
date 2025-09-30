import { useState } from 'react';
import { useGetBankAccounts } from '@/features/bankAccounts';
import { useVisibleTransactionFiltersStore } from '../../stores/useVisibleTransactionFiltersStore';

export function useModalTransactionFiltersViewModel() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const { visible, setVisibility } = useVisibleTransactionFiltersStore();
  const { data: bankAccounts } = useGetBankAccounts();

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
