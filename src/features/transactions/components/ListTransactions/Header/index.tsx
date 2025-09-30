import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import {
  Button,
  FilterIcon,
  type ISliderStateType,
  LoadingSkeleton,
} from '@/shared';
import { generateDateKey } from '../../../utils/generateDateKey';
import { listMonths } from '../../../utils/listMonths';
import { TransactionTypeDropdown } from '../../TransactionTypeDropdown';
import { SliderItem } from './SliderItem';
import { SliderNavigation } from './SliderNavigation';

interface IHeaderProps {
  sliderState: ISliderStateType;
  onChangeSliderState: (swiper: SwiperType) => void;
  isLoading?: boolean;
  onOpenModalFilters(): void;
  currentSlider: number;
}

export function ListTransactionsHeader({
  onChangeSliderState,
  sliderState,
  isLoading = false,
  onOpenModalFilters,
  currentSlider,
}: IHeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between">
        <LoadingSkeleton
          className="h-6 w-36 bg-gray-3 after:via-white/40"
          isLoading={isLoading}
        >
          <TransactionTypeDropdown />
        </LoadingSkeleton>
        <LoadingSkeleton
          className="size-12 rounded-2xl bg-gray-3 after:via-white/40"
          isLoading={isLoading}
        >
          <Button
            className="p-3 hover:bg-gray-3"
            onClick={onOpenModalFilters}
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
          initialSlide={currentSlider}
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
