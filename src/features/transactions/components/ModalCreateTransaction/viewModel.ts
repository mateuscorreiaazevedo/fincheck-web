import { useCallback } from 'react';
import { useVisibilityModalCreateTransactionStore } from '../../stores/useVisibilityModalCreateTransactionStore';

export function useModalCreateTransactionViewModel() {
  const { setVisibility, type, visible } =
    useVisibilityModalCreateTransactionStore();

  const onClose = useCallback(() => {
    setVisibility({
      type: null,
      visible: false,
    });
  }, []);

  return {
    onClose,
    type,
    visible,
  };
}
