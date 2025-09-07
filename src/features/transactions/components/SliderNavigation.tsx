import { useSwiper } from 'swiper/react';
import {
  Button,
  cn,
  type ISliderStateType,
  LeftIcon,
  RightIcon,
} from '@/shared';

export function SliderNavigation({ isBeginning, isEnd }: ISliderStateType) {
  const swiper = useSwiper();

  return (
    <>
      <Button
        className="-translate-y-1/2 absolute top-1/2 left-0 z-10 bg-gradient-to-r from-gray-1 to-transparent"
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
        size="icon"
        variant="secondary"
      >
        <LeftIcon
          className={cn(
            '-translate-x-0.5 size-6 text-gray-8',
            isBeginning && 'text-gray-5'
          )}
        />
      </Button>
      <Button
        className="-translate-y-1/2 absolute top-1/2 right-0 z-10 bg-gradient-to-l from-gray-1 to-transparent"
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        size="icon"
        variant="secondary"
      >
        <RightIcon
          className={cn(
            'size-6 translate-x-0.5 text-gray-8',
            isEnd && 'text-gray-5'
          )}
        />
      </Button>
    </>
  );
}
