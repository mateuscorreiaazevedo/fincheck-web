import { useState } from 'react';
import { useVisibilityModalCreateBankAccountStore } from '@/features/bankAccounts';

export function useDashboardFABViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const { setVisibility } = useVisibilityModalCreateBankAccountStore();

  function handleOpenModalCreateBankAccount() {
    setVisibility(true);
  }

  return {
    isOpen,
    setIsOpen,
    handleOpenModalCreateBankAccount,
  };
}
