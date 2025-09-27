import { useSwiper } from 'swiper/react';
import { Button, LeftIcon, LoadingSkeleton, RightIcon } from '@/shared';

interface IBankAccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
  isLoading?: boolean;
}

export function BankAccountsSliderNavigation({
  isBeginning,
  isEnd,
  isLoading = false,
}: IBankAccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="hidden items-center gap-1 md:flex">
      <LoadingSkeleton className="size-12 rounded-2xl" isLoading={isLoading}>
        <Button
          className="py-3 pr-3.5 pl-2.5 disabled:bg-transparent disabled:opacity-40"
          disabled={isBeginning}
          onClick={() => swiper.slidePrev()}
          size="icon"
          variant="ghostTeal"
        >
          <LeftIcon className="size-6 text-white" />
        </Button>
      </LoadingSkeleton>
      <LoadingSkeleton className="size-12 rounded-2xl" isLoading={isLoading}>
        <Button
          className="py-3 pr-2.5 pl-3.5 disabled:bg-transparent disabled:opacity-40"
          disabled={isEnd}
          onClick={() => swiper.slideNext()}
          size="icon"
          variant="ghostTeal"
        >
          <RightIcon className="size-6 text-white" />
        </Button>
      </LoadingSkeleton>
    </div>
  );
}
