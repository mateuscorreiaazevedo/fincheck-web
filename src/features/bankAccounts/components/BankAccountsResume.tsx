import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ContentView,
  VisibilityToggleButton,
  VisibilityToggleContent,
} from '@/shared';
import { BankAccountCard } from './BankAccountCard';
import { BankAccountsSliderNavigation } from './BankAccountsSliderNavigation';

export function BankAccountsResume() {
  return (
    <ContentView className="flex flex-col bg-teal-9">
      <div>
        <span className="text-white tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <VisibilityToggleContent>
            <strong className="text-2xl text-white tracking-[-1px]">
              R$ 1000,00
            </strong>
          </VisibilityToggleContent>
          <VisibilityToggleButton />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <div>
          <Swiper slidesPerView={2.1} spaceBetween={16}>
            <div
              className="mb-4 flex items-center justify-between"
              slot="container-start"
            >
              <strong className="text-lg text-white tracking-[-1px]">
                Minhas contas
              </strong>
              <BankAccountsSliderNavigation />
            </div>

            <div>
              <SwiperSlide>
                <BankAccountCard
                  accountType="CHECKING"
                  balanceInCents={123_620}
                  color="#3498d8"
                  name="Nubank"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BankAccountCard
                  accountType="INVESTMENT"
                  balanceInCents={1_000_000}
                  color="#242424"
                  name="XP Investimentos"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BankAccountCard
                  accountType="CASH"
                  balanceInCents={10_000}
                  color="#090"
                  name="Carteira"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </ContentView>
  );
}
