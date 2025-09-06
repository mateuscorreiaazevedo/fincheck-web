import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storageKeys } from '../constants';

interface IVisibilityStore {
  value: boolean;
  setValue: (value: boolean) => void;
}

export const useVisibilityValueStore = create<IVisibilityStore>()(
  persist(
    set => ({
      value: true,
      setValue: (value: boolean) => set({ value }),
    }),
    {
      name: storageKeys.VISIBILITY_VALUE_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
