import { create } from 'zustand';

interface StoreProps {
  visible: boolean;
  setVisibility(value: boolean): void;
}

export const useVisibilityModalCreateBankAccountStore = create<StoreProps>(
  set => ({
    visible: false,
    setVisibility(value: boolean) {
      set({ visible: value });
    },
  })
);
