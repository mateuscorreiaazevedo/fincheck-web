import { useState } from 'react';
import type { Swiper } from 'swiper/types';
import { type ISliderStateType, numberKeys } from '@/shared';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useGetBankAccounts } from '../../hooks/useGetBankAccounts';

export function useBankAccountsResumeViewModel() {
  const [sliderState, setSliderState] = useState<ISliderStateType>({
    isBeginning: true,
    isEnd: false,
  });
  const windowWidth = useMediaQuery();

  const { data: bankAccounts, isLoading } = useGetBankAccounts();

  function onChangeSliderState(swiper: Swiper) {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }

  const isMobileDisplay = windowWidth <= numberKeys.MAX_MOBILE_DISPLAY;

  return {
    sliderState,
    onChangeSliderState,
    isMobileDisplay,
    isLoading,
    bankAccounts,
  };
}
