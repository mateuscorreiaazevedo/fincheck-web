import { Swiper, SwiperSlide } from 'swiper/react';
import { colors } from '@/assets/styles/colors';
import { ContentView, numberKeys } from '@/shared';
import { bankAccountsSliderConstants } from '../../constants/bankAccountsSliderConstants';
import type { BankAccountType } from '../../types/BankAccountType';
import { BankAccountCard } from '../BankAccountCard';
import { BankAccountsSliderNavigation } from '../BankAccountsSliderNavigation';
import { ButtonOpenModalCreateBankAccount } from './ButtonOpenModalCreateBankAccount';
import { BankAccountsResumeEmptyState } from './EmptyState';
import { BankAccountsResumeHeader } from './ResumeHeader';
import { BankAccountsSliderHeader } from './SliderHeader';
import { useBankAccountsResumeViewModel } from './useBankAccountsResumeViewModel';

const mockBankAccounts: Array<{
  type: BankAccountType;
  color: string;
  balance: number;
  name: string;
  id: string;
}> = [
  {
    id: crypto.randomUUID(),
    type: 'CHECKING',
    color: colors.violet[6],
    name: 'Nubank',
    balance: 145_920,
  },
  {
    id: crypto.randomUUID(),
    type: 'INVESTMENT',
    color: colors.black,
    name: 'XP Investimentos',
    balance: 145_920_000,
  },
  {
    id: crypto.randomUUID(),
    type: 'CASH',
    color: colors.teal[6],
    name: 'Carteira',
    balance: 2000,
  },
];

export function BankAccountsResume() {
  const {
    onChangeSliderState,
    sliderState,
    isMobileDisplay,
    isLoading,
    bankAccounts,
    handleOpenModalCreateBankAccount,
  } = useBankAccountsResumeViewModel();

  return (
    <ContentView className="flex flex-col bg-teal-9">
      <BankAccountsResumeHeader
        isLoading={isLoading}
        totalBalanceInCents={numberKeys.MOCK_TOTAL_BALANCE}
      />
      <main className="flex flex-1 flex-col justify-end">
        {!bankAccounts?.length && (
          <BankAccountsResumeEmptyState
            isLoading={isLoading}
            onOpenModalCreateBankAccount={handleOpenModalCreateBankAccount}
          />
        )}
        {!!bankAccounts?.length && (
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
                {mockBankAccounts.map(item => (
                  <SwiperSlide key={item.id}>
                    <BankAccountCard
                      accountType={item.type}
                      balanceInCents={item.balance}
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
