import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { authStorageKeys } from '../constants/storageKeys';

interface IVisibilityStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useIsAuthenticatedStore = create<IVisibilityStore>()(
  persist(
    set => ({
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
    }),
    {
      name: authStorageKeys.isAuthenticated,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
