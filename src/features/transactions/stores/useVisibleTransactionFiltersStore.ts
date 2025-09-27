import { create } from 'zustand';

interface IStoreValues {
  visible: boolean;
  setVisibility: (value: boolean) => void;
}

export const useVisibleTransactionFiltersStore = create<IStoreValues>(set => ({
  visible: false,
  setVisibility: (value: boolean) => set({ visible: value }),
}));
