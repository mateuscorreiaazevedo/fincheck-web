import { useVisibilityModalCreateBankAccountStore } from '../../hooks/useVisibilityModalCreateBankAccountStore';

export function useModalCreateBankAccountViewModel() {
  const visibility = useVisibilityModalCreateBankAccountStore();

  return {
    ...visibility,
  };
}
