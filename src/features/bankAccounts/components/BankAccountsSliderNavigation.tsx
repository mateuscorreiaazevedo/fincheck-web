import { useSwiper } from 'swiper/react';
import { Button, LeftIcon, RightIcon } from '@/shared';

interface IBankAccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function BankAccountsSliderNavigation({
  isBeginning,
  isEnd,
}: IBankAccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="hidden items-center gap-1 md:flex">
      <Button
        className="py-3 pr-3.5 pl-2.5 disabled:bg-transparent disabled:opacity-40"
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
        radius="pill"
        size="icon"
        variant="ghostTeal"
      >
        <LeftIcon className="size-6 text-white" />
      </Button>
      <Button
        className="py-3 pr-2.5 pl-3.5 disabled:bg-transparent disabled:opacity-40"
        disabled={isEnd}
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
