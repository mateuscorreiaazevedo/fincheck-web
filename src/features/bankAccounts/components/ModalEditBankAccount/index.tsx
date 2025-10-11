import { useVisibilityBankAccountModalsStore } from '../../hooks/useVisibilityBankAccountModalsStore';
import { ModalEditBankAccountContent } from './content';

export function ModalEditBankAccount() {
  const { edit } = useVisibilityBankAccountModalsStore();

  return !!edit.bankAccount && <ModalEditBankAccountContent />;
}
