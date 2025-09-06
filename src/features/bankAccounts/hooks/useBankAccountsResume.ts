import { useState } from 'react';
import type { Swiper } from 'swiper/types';
import type { ISliderStateType } from '@/shared';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

const MAX_MOBILE_DISPLAY = 500;

export function useBankAccountsResume() {
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

  const isMobileDisplay = windowWidth <= MAX_MOBILE_DISPLAY;

  return {
    sliderState,
    onChangeSliderState,
    isMobileDisplay,
  };
}
