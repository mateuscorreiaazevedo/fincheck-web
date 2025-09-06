import { useSwiper } from 'swiper/react';
import { Button, LeftIcon, RightIcon } from '@/shared';

export function BankAccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-1">
      <Button
        className="py-3 pr-3.5 pl-2.5 disabled:bg-transparent disabled:opacity-40"
        disabled={swiper.isBeginning}
        onClick={() => swiper.slidePrev()}
        radius="pill"
        size="icon"
        variant="ghostTeal"
      >
        <LeftIcon className="size-6 text-white" />
      </Button>
      <Button
        className="py-3 pr-2.5 pl-3.5 disabled:bg-transparent disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        radius="pill"
        size="icon"
        variant="ghostTeal"
      >
        <RightIcon className="size-6 text-white" />
      </Button>
    </div>
  );
}
