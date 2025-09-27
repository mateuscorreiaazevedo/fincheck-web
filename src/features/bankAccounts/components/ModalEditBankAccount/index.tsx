import { useVisibilityModalEditBankAccountStore } from '../../hooks/useVisibilityModalEditBankAccountStore';
import { ModalEditBankAccountContent } from './content';

export function ModalEditBankAccount() {
  const { bankAccount } = useVisibilityModalEditBankAccountStore();

  return !!bankAccount && <ModalEditBankAccountContent />;
}
