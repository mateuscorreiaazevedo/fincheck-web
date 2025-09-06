import type { ComponentType } from 'react';
import { CardIcon, CashIcon, type IconProps, MixerIcon } from '@/shared';
import type { BankAccountType } from '../types/BankAccountType';

interface IBankAccountCardIconProps extends IconProps {
  type: BankAccountType;
}

export function BankAccountCardIcon({
  type,
  ...props
}: IBankAccountCardIconProps) {
  const iconByAccountType: Record<BankAccountType, ComponentType<IconProps>> = {
    CHECKING: CardIcon,
    INVESTMENT: MixerIcon,
    CASH: CashIcon,
  };

  const Icon = iconByAccountType[type];

  return <Icon {...props} />;
}
