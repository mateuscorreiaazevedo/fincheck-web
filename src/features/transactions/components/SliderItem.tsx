import { useSwiper } from 'swiper/react';
import { Button, cn, Skeleton } from '@/shared';

interface SliderItemProps {
  isActive: boolean;
  item: string;
  index: number;
  isLoading?: boolean;
}

export function SliderItem({
  isActive,
  item,
  index,
  isLoading,
}: SliderItemProps) {
  const swiper = useSwiper();

  function handleSelectMonth() {
    swiper.slideTo(index);
  }

  if (isLoading) {
    return <Skeleton className="h-12 w-full rounded-full bg-gray-3" />;
  }

  return (
    <Button
      className={cn('w-full bg-transparent', isActive && 'bg-white')}
      onClick={handleSelectMonth}
      radius="pill"
      variant="none"
    >
      {item}
    </Button>
  );
}
