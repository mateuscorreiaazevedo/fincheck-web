import { Swiper, SwiperSlide } from 'swiper/react';
import {
  BottomIcon,
  Button,
  ContentView,
  FilterIcon,
  TransactionsIcon,
} from '@/shared';
import { useListTransactions } from '../hooks/useListTransactions';
import { generateDateKey } from '../utils/generateDateKey';
import { listMonths } from '../utils/listMonths';
import { SliderItem } from './SliderItem';
import { SliderNavigation } from './SliderNavigation';

export function ListTransactions() {
  const { sliderState, onChangeSliderState } = useListTransactions();

  return (
    <ContentView className="bg-gray-1">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-9" type="button">
            <TransactionsIcon className="size-6" />
            <span className="font-medium text-gray-8 text-sm tracking-[-0.5px]">
              Transações
            </span>
            <BottomIcon className="size-6" />
          </button>
          <Button className="hover:bg-gray-2" size="icon" variant="ghostGray">
            <FilterIcon className="size-6 text-gray-9" />
          </Button>
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
                  <SliderItem index={index} isActive={isActive} item={item} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
      <div className="mt-4 bg-blue-5">Conteúdo</div>
    </ContentView>
  );
}
