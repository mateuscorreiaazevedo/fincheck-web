import { useState } from 'react';
import { useSearchParams } from 'react-router';
import type { Swiper } from 'swiper/types';
import type { ISliderStateType } from '@/shared';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useVisibilityTransactionModalsStore } from '../../stores/useVisibilityTransactionModalsStore';
import { useVisibleTransactionFiltersStore } from '../../stores/useVisibleTransactionFiltersStore';
import type { Transaction } from '../../types/Transaction';

export function useListTransactionsViewModel() {
  const { setVisibility } = useVisibleTransactionFiltersStore();
  const { edit } = useVisibilityTransactionModalsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sliderState, setSliderState] = useState<ISliderStateType>({
    isBeginning: true,
    isEnd: false,
  });

  const currentMonth = searchParams.get('month')
    ? Number.parseInt(searchParams.get('month')!, 10) - 1
    : new Date().getMonth();

  const { data: transactions, isLoading: isInitialLoading } =
    useGetTransactions();

  function handleSelectMonth(month: number) {
    if (month === currentMonth) {
      return;
    }

    setSearchParams(prev => {
      const { month: _, ...params } = Object.fromEntries(prev.entries());

      return {
        ...params,
        ...(month !== new Date().getMonth() && {
          month: (month + 1).toString(),
        }),
      };
    });
  }

  function onChangeSliderState(swiper: Swiper) {
    handleSelectMonth(swiper.activeIndex);

    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }

  const hasTransactions = !!transactions?.length;
  const loading = false;

  function handleOpenModalFilters() {
    return setVisibility(true);
  }

  function handleOpenModalEditTransaction(transaction: Transaction) {
    return edit.onOpen(transaction);
  }

  return {
    sliderState,
    onChangeSliderState,
    isInitialLoading,
    transactions,
    hasTransactions,
    isLoading: isInitialLoading || loading,
    handleOpenModalFilters,
    currentMonth,
    handleSelectMonth,
    handleOpenModalEditTransaction,
  };
}
