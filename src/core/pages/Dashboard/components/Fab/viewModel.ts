import { useCallback, useState } from 'react';
import { useVisibilityModalCreateBankAccountStore } from '@/features/bankAccounts';
import { useVisibilityTransactionModalsStore } from '@/features/transactions';

export function useDashboardFABViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const { setVisibility: setBankAccountVisibility } =
    useVisibilityModalCreateBankAccountStore();
  const { create: createTransactionModal } =
    useVisibilityTransactionModalsStore();

  function handleOpenModalCreateBankAccount() {
    setBankAccountVisibility(true);
  }

  const handleOpenModalCreateIncomeTransaction = useCallback(() => {
    createTransactionModal.onOpen('INCOME');
  }, []);
  const handleOpenModalCreateExpenseTransaction = useCallback(() => {
    createTransactionModal.onOpen('EXPENSE');
  }, []);

  return {
    isOpen,
    setIsOpen,
    handleOpenModalCreateBankAccount,
    handleOpenModalCreateIncomeTransaction,
    handleOpenModalCreateExpenseTransaction,
  };
}
