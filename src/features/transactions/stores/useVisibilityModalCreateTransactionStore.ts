import { create } from 'zustand';
import type { TransactionType } from '../types/TransactionType';

type SetVisibilityArgs = {
  visible: boolean;
  type: TransactionType | null;
};

interface StoreProps {
  visible: boolean;
  type: TransactionType | null;
  setVisibility(value: SetVisibilityArgs): void;
}

export const useVisibilityModalCreateTransactionStore = create<StoreProps>(
  set => ({
    visible: false,
    type: null,
    setVisibility: ({ type, visible }) => set({ type, visible }),
  })
);
