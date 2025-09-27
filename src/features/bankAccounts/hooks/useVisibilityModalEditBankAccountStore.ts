import { create } from 'zustand';
import type { BankAccount } from '../types/BankAccount';

interface SetVisibilityArgs {
  visible: boolean;
  bankAccount: BankAccount | null;
}

interface StoreProps extends SetVisibilityArgs {
  setVisibility(value: SetVisibilityArgs): void;
}

export const useVisibilityModalEditBankAccountStore = create<StoreProps>(
  set => ({
    visible: false,
    bankAccount: null,
    setVisibility({ bankAccount, visible }: SetVisibilityArgs) {
      set({ visible, bankAccount });
    },
  })
);
