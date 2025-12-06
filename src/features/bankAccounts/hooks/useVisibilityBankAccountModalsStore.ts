import { create } from 'zustand';
import type { BankAccount } from '../types/BankAccount';

interface BankAccountModalsStore {
  create: {
    visible: boolean;
    onOpen(): void;
    onClose(): void;
  };
  edit: {
    visible: boolean;
    bankAccount: BankAccount | null;
    onOpen(bankAccount: BankAccount): void;
    onClose(): void;
  };
}

export const useVisibilityBankAccountModalsStore =
  create<BankAccountModalsStore>(set => {
    const handleOpenCreateModal = () => {
      set(state => ({
        ...state,
        create: { ...state.create, visible: true },
      }));
    };

    const handleCloseCreateModal = () => {
      set(state => ({
        ...state,
        create: { ...state.create, visible: false },
      }));
    };

    const handleOpenEditModal = (bankAccount: BankAccount) => {
      set(state => ({
        ...state,
        edit: {
          ...state.edit,
          visible: true,
          bankAccount,
        },
      }));
    };

    const handleCloseEditModal = () => {
      set(state => ({
        ...state,
        edit: { ...state.edit, visible: false, bankAccount: null },
      }));
    };

    return {
      create: {
        visible: false,
        onOpen: handleOpenCreateModal,
        onClose: handleCloseCreateModal,
      },
      edit: {
        visible: false,
        bankAccount: null,
        onOpen: handleOpenEditModal,
        onClose: handleCloseEditModal,
      },
    };
  });
