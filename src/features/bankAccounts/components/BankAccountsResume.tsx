import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ContentView,
  formatCurrencyHelper,
  VisibilityToggleButton,
  VisibilityToggleContent,
} from '@/shared';
import { bankAccountsSliderConstants } from '../constants/bankAccountsSliderConstants';
import { useBankAccountsResume } from '../hooks/useBankAccountsResume';
import { BankAccountCard } from './BankAccountCard';
import { BankAccountsSliderNavigation } from './BankAccountsSliderNavigation';

const mockTotalBalance = 105_000;

export function BankAccountsResume() {
  const { onChangeSliderState, sliderState, isMobileDisplay } =
    useBankAccountsResume();

  return (
    <ContentView className="flex flex-col bg-teal-9">
      <div className="mb-10 md:mb-0">
        <span className="text-white tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <VisibilityToggleContent>
            <strong className="text-2xl text-white tracking-[-1px]">
              {formatCurrencyHelper(mockTotalBalance)}
            </strong>
          </VisibilityToggleContent>
          <VisibilityToggleButton />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <div>
          <Swiper
            onSlideChange={onChangeSliderState}
            slidesPerView={
              isMobileDisplay
                ? bankAccountsSliderConstants.mobileQuantity
                : bankAccountsSliderConstants.desktopQuantity
            }
            spaceBetween={16}
          >
            <div
              className="mb-4 flex items-center justify-between"
              slot="container-start"
            >
              <strong className="text-lg text-white tracking-[-1px]">
                Minhas contas
              </strong>
              <BankAccountsSliderNavigation {...sliderState} />
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
