import { useCallback, useState } from 'react';
import { useVisibilityBankAccountModalsStore } from '@/features/bankAccounts';
import { useVisibilityTransactionModalsStore } from '@/features/transactions';

export function useDashboardFABViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const { create: createBankAccountModal } =
    useVisibilityBankAccountModalsStore();
  const { create: createTransactionModal } =
    useVisibilityTransactionModalsStore();

  const handleOpenModalCreateBankAccount = useCallback(() => {
    createBankAccountModal.onOpen();
  }, []);

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
