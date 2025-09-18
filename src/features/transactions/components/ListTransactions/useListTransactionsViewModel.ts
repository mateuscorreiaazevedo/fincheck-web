import { useState } from 'react';
import type { Swiper } from 'swiper/types';
import type { ISliderStateType } from '@/shared';
import { useGetTransactions } from '../../hooks/useGetTransactions';

export function useListTransactionsViewModel() {
  const [sliderState, setSliderState] = useState<ISliderStateType>({
    isBeginning: true,
    isEnd: false,
  });

  const { data: transactions, isLoading: isInitialLoading } =
    useGetTransactions();

  function onChangeSliderState(swiper: Swiper) {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }

  const hasTransactions = !!transactions?.length && transactions.length > 0;
  const loading = false;

  return {
    sliderState,
    onChangeSliderState,
    isInitialLoading,
    transactions,
    hasTransactions,
    isLoading: isInitialLoading || loading,
  };
}
