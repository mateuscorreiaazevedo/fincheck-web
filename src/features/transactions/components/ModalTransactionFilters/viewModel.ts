import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useGetBankAccounts } from '@/features/bankAccounts';
import { useVisibleTransactionFiltersStore } from '../../stores/useVisibleTransactionFiltersStore';

export function useModalTransactionFiltersViewModel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(searchParams.get('bankAccountId'));
  const [yearSelected, setYearSelected] = useState<number>(
    searchParams.get('year')
      ? Number(searchParams.get('year'))
      : new Date().getFullYear()
  );
  const { visible, setVisibility } = useVisibleTransactionFiltersStore();
  const { data: bankAccounts } = useGetBankAccounts();

  function handleSelectBankAcccountId(value: string) {
    setSelectedBankAccountId(prevState => (prevState === value ? null : value));
  }

  function handleChangeYear(step: number) {
    setYearSelected(prevState => prevState + step);
  }

  function handleFilterTransactions() {
    setSearchParams(prevParams => {
      const params = Object.fromEntries(prevParams.entries());

      return {
        ...params,
        year: String(yearSelected),
        ...(selectedBankAccountId && { bankAccountId: selectedBankAccountId }),
      };
    });
    setVisibility(false);
  }

  function handleClearFilters() {
    setSelectedBankAccountId(null);
    setYearSelected(new Date().getFullYear());
    setSearchParams(prevParams => {
      const params = Object.fromEntries(prevParams.entries());
      const { year: _year, bankAccountId: _bankAccountId, ...rest } = params;

      return {
        ...rest,
      };
    });
    setVisibility(false);
  }

  const isClearFilters =
    !!searchParams.get('year') || !!searchParams.get('bankAccountId');

  return {
    handleChangeYear,
    yearSelected,
    visible,
    setVisibility,
    selectedBankAccountId,
    handleSelectBankAcccountId,
    bankAccounts,
    handleFilterTransactions,
    isClearFilters,
    handleClearFilters,
  };
}
