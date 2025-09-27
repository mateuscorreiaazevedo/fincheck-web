import { useMemo, useState } from 'react';
import type { Swiper } from 'swiper/types';
import { type ISliderStateType, numberKeys } from '@/shared';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useGetBankAccounts } from '../../hooks/useGetBankAccounts';
import { useVisibilityModalCreateBankAccountStore } from '../../hooks/useVisibilityModalCreateBankAccountStore';

export function useBankAccountsResumeViewModel() {
  const [sliderState, setSliderState] = useState<ISliderStateType>({
    isBeginning: true,
    isEnd: false,
  });
  const windowWidth = useMediaQuery();

  const { setVisibility } = useVisibilityModalCreateBankAccountStore();
  const { data: bankAccounts, isLoading } = useGetBankAccounts();

  function onChangeSliderState(swiper: Swiper) {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }

  function handleOpenModalCreateBankAccount() {
    setVisibility(true);
  }

  const isMobileDisplay = windowWidth <= numberKeys.MAX_MOBILE_DISPLAY;
  const hasBankAccounts = !!bankAccounts?.length;

  const totalBalance = useMemo(() => {
    return (
      bankAccounts?.reduce((acc, item) => {
        return acc + item.currentBalanceInCents;
      }, 0) ?? 0
    );
  }, [bankAccounts]);

  return {
    sliderState,
    onChangeSliderState,
    isMobileDisplay,
    isLoading,
    hasBankAccounts,
    totalBalance,
    bankAccounts,
    handleOpenModalCreateBankAccount,
  };
}
