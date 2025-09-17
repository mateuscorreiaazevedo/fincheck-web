import { useState } from 'react';
import type { Swiper } from 'swiper/types';
import { type ISliderStateType, numberKeys } from '@/shared';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export function useListTransactionsViewModel() {
  const [sliderState, setSliderState] = useState<ISliderStateType>({
    isBeginning: true,
    isEnd: false,
  });
  const windowWidth = useMediaQuery();

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
  };
}
