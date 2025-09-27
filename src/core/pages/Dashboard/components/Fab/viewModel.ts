import { useState } from 'react';
import { useVisibilityModalCreateBankAccountStore } from '@/features/bankAccounts';
import { useVisibilityModalCreateTransactionStore } from '@/features/transactions';

export function useDashboardFABViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const { setVisibility: setBankAccountVisibility } =
    useVisibilityModalCreateBankAccountStore();
  const { setVisibility: setTransactionVisibility } =
    useVisibilityModalCreateTransactionStore();

  function handleOpenModalCreateBankAccount() {
    setBankAccountVisibility(true);
  }

  function handleOpenModalCreateIncomeTransaction() {
    setTransactionVisibility({
      type: 'INCOME',
      visible: true,
    });
  }
  function handleOpenModalCreateExpenseTransaction() {
    setTransactionVisibility({
      type: 'EXPENSE',
      visible: true,
    });
  }

  return {
    isOpen,
    setIsOpen,
    handleOpenModalCreateBankAccount,
    handleOpenModalCreateIncomeTransaction,
    handleOpenModalCreateExpenseTransaction,
  };
}
