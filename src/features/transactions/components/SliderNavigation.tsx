import { useSwiper } from 'swiper/react';
import {
  Button,
  cn,
  type ISliderStateType,
  LeftIcon,
  RightIcon,
} from '@/shared';

interface ISliderNavigationProps extends ISliderStateType {}

export function SliderNavigation({
  isBeginning,
  isEnd,
}: ISliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <>
      <Button
        className="-translate-y-1/2 absolute top-1/2 left-0 z-10 bg-gradient-to-r py-3 pr-2.5 pl-3.5"
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
        radius="none"
        size="icon"
        variant="gradient"
      >
        <LeftIcon
          className={cn(
            '-translate-x-0.5 size-6 text-gray-8',
            isBeginning && 'text-gray-5'
          )}
        />
      </Button>
      <Button
        className="-translate-y-1/2 absolute top-1/2 right-0 z-10 bg-gradient-to-l py-3 pr-3.5 pl-2.5"
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        radius="none"
        size="icon"
        variant="gradient"
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
