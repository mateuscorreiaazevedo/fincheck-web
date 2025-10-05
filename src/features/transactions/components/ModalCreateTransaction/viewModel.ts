import { useCallback } from 'react';
import { useGetCategories } from '@/features/categories';
import { handleListOptions } from '@/shared';
import { useVisibilityModalCreateTransactionStore } from '../../stores/useVisibilityModalCreateTransactionStore';

export function useModalCreateTransactionViewModel() {
  const { setVisibility, type, visible } =
    useVisibilityModalCreateTransactionStore();
  const { data: categories } = useGetCategories();

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
    categories: handleListOptions({
      data: categories,
      keys: {
        label: 'name',
        value: 'id',
      },
    }),
  };
}
