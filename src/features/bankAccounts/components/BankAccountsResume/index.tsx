import { Swiper, SwiperSlide } from 'swiper/react';
import { generateDateKey } from '@/features/transactions/utils/generateDateKey';
import { ContentView, numberKeys, Skeleton } from '@/shared';
import { bankAccountsSliderConstants } from '../../constants/bankAccountsSliderConstants';
import { BankAccountCard } from '../BankAccountCard';
import { BankAccountsSliderNavigation } from '../BankAccountsSliderNavigation';
import { BankAccountsResumeEmptyState } from './EmptyState';
import { BankAccountsResumeHeader } from './ResumeHeader';
import { BankAccountsSliderHeader } from './SliderHeader';
import { useBankAccountsResumeViewModel } from './useBankAccountsResumeViewModel';

export function BankAccountsResume() {
  const {
    onChangeSliderState,
    sliderState,
    isMobileDisplay,
    isLoading,
    bankAccounts,
  } = useBankAccountsResumeViewModel();

  return (
    <ContentView className="flex flex-col bg-teal-9">
      <BankAccountsResumeHeader
        isLoading={isLoading}
        totalBalanceInCents={numberKeys.MOCK_TOTAL_BALANCE}
      />
      <main className="flex flex-1 flex-col justify-end">
        {!bankAccounts.length && (
          <BankAccountsResumeEmptyState isLoading={isLoading} />
        )}
        {bankAccounts.length > 0 && (
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
              <div slot="container-start">
                <BankAccountsSliderHeader isLoading={isLoading}>
                  <BankAccountsSliderNavigation
                    {...sliderState}
                    isLoading={isLoading}
                  />
                </BankAccountsSliderHeader>
              </div>

              <div>
                {isLoading &&
                  Array.from({ length: 4 }).map((_, index) => (
                    <SwiperSlide key={generateDateKey(index)}>
                      <Skeleton className="h-[200px] rounded-2xl" />
                    </SwiperSlide>
                  ))}
                {!isLoading && (
                  <>
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
                  </>
                )}
              </div>
            </Swiper>
          </div>
        )}
      </main>
    </ContentView>
  );
}
