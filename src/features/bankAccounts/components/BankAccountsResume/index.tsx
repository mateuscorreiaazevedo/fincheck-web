import { Swiper, SwiperSlide } from 'swiper/react';
import { ContentView } from '@/shared';
import { bankAccountsSliderConstants } from '../../constants/bankAccountsSliderConstants';
import { BankAccountCard } from '../BankAccountCard';
import { BankAccountsSliderNavigation } from '../BankAccountsSliderNavigation';
import { ButtonOpenModalCreateBankAccount } from './ButtonOpenModalCreateBankAccount';
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
    hasBankAccounts,
    bankAccounts,
    totalBalance,
    handleOpenModalCreateBankAccount,
  } = useBankAccountsResumeViewModel();

  return (
    <ContentView className="flex flex-col bg-teal-9">
      <BankAccountsResumeHeader
        isLoading={isLoading}
        totalBalanceInCents={totalBalance}
      />
      <main className="flex flex-1 flex-col justify-end">
        {!hasBankAccounts && (
          <BankAccountsResumeEmptyState
            isLoading={isLoading}
            onOpenModalCreateBankAccount={handleOpenModalCreateBankAccount}
          />
        )}
        {hasBankAccounts && (
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
                {bankAccounts?.map(item => (
                  <SwiperSlide key={item.id}>
                    <BankAccountCard
                      accountType={item.accountType}
                      balanceInCents={item.currentBalanceInCents}
                      color={item.color}
                      name={item.name}
                    />
                  </SwiperSlide>
                ))}
                <SwiperSlide>
                  <ButtonOpenModalCreateBankAccount
                    isSlider
                    onClick={handleOpenModalCreateBankAccount}
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        )}
      </main>
    </ContentView>
  );
}
