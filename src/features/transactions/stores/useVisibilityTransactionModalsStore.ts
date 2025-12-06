import { create } from 'zustand';
import type { Transaction } from '../types/Transaction';
import type { TransactionType } from '../types/TransactionType';

interface TransactionsModalsStore {
  create: {
    visible: boolean;
    type: TransactionType | null;
    onOpen(type: TransactionType): void;
    onClose(): void;
  };
  edit: {
    visible: boolean;
    transaction: Transaction | null;
    onOpen(transaction: Transaction): void;
    onClose(): void;
  };
}

export const useVisibilityTransactionModalsStore =
  create<TransactionsModalsStore>(set => {
    const handleOpenCreateModal = (type: TransactionType) => {
      set(state => ({
        ...state,
        create: { ...state.create, visible: true, type },
      }));
    };

    const handleCloseCreateModal = () => {
      set(state => ({
        ...state,
        create: { ...state.create, visible: false, type: null },
      }));
    };

    const handleOpenEditModal = (transaction: Transaction) => {
      set(state => ({
        ...state,
        edit: {
          ...state.edit,
          visible: true,
          transaction,
        },
      }));
    };

    const handleCloseEditModal = () => {
      set(state => ({
        ...state,
        edit: { ...state.edit, visible: false, transaction: null },
      }));
    };

    return {
      create: {
        visible: false,
        type: null,
        onOpen: handleOpenCreateModal,
        onClose: handleCloseCreateModal,
      },
      edit: {
        visible: false,
        transaction: null,
        onOpen: handleOpenEditModal,
        onClose: handleCloseEditModal,
      },
    };
  });
