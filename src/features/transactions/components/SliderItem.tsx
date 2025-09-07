import { useSwiper } from 'swiper/react';
import { Button, cn } from '@/shared';

interface SliderItemProps {
  isActive: boolean;
  item: string;
  index: number;
}

export function SliderItem({ isActive, item, index }: SliderItemProps) {
  const swiper = useSwiper();

  function handleSelectMonth() {
    swiper.slideTo(index);
  }

  return (
    <Button
      className={cn('w-full', isActive && 'bg-white hover:bg-white/80')}
      onClick={handleSelectMonth}
      radius="pill"
      variant="secondary"
    >
      {item}
    </Button>
  );
}
