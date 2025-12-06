import { useVisibilityTransactionModalsStore } from '../../stores/useVisibilityTransactionModalsStore';
import { ModalEditTransactionContent } from './content';

export function ModalEditTransaction() {
  const { edit } = useVisibilityTransactionModalsStore();

  return !!edit.transaction && <ModalEditTransactionContent />;
}
