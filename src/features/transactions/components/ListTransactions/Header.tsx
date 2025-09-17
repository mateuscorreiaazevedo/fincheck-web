import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import {
  BottomIcon,
  Button,
  FilterIcon,
  type ISliderStateType,
  LoadingSkeleton,
  TransactionsIcon,
} from '@/shared';
import { generateDateKey } from '../../utils/generateDateKey';
import { listMonths } from '../../utils/listMonths';
import { SliderItem } from '../SliderItem';
import { SliderNavigation } from '../SliderNavigation';

interface IHeaderProps {
  sliderState: ISliderStateType;
  onChangeSliderState: (swiper: SwiperType) => void;
  isLoading?: boolean;
}

export function ListTransactionsHeader({
  onChangeSliderState,
  sliderState,
  isLoading = false,
}: IHeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between">
        <LoadingSkeleton className="h-6 w-36 bg-gray-3" isLoading={isLoading}>
          <button className="flex items-center gap-2 text-gray-9" type="button">
            <TransactionsIcon className="size-6" />
            <span className="font-medium text-gray-8 text-sm tracking-[-0.5px]">
              Transações
            </span>
            <BottomIcon className="size-6" />
          </button>
        </LoadingSkeleton>
        <LoadingSkeleton
          className="size-12 rounded-2xl bg-gray-3"
          isLoading={isLoading}
        >
          <Button
            className="p-3 hover:bg-gray-3"
            radius="default"
            size="icon"
            variant="none"
          >
            <FilterIcon className="size-6 text-gray-9" />
          </Button>
        </LoadingSkeleton>
      </div>
      <div className="relative mt-6">
        <Swiper
          centeredSlides
          onSlideChange={onChangeSliderState}
          slidesPerView={3}
          spaceBetween={16}
        >
          <SliderNavigation {...sliderState} />
          {listMonths.map((item, index) => (
            <SwiperSlide key={generateDateKey(index)}>
              {({ isActive }) => (
                <SliderItem
                  index={index}
                  isActive={isActive}
                  isLoading={isLoading}
                  item={item}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}
