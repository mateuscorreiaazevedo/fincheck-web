import type { ComponentType } from 'react';
import {
  CarIcon,
  ClothesIcon,
  EducationIcon,
  ExpenseIcon,
  FoodIcon,
  HouseIcon,
  type IconProps,
  IncomeIcon,
  MarketIcon,
  MixerIcon,
  TravelIcon,
  TreeIcon,
} from '@/shared';
import type { IconNames } from '../types/IconNames';
import type { TransactionType } from '../types/TransactionType';

export function iconsMap(
  iconName: IconNames,
  transactionType: TransactionType = 'INCOME'
) {
  const mapper: Record<IconNames, ComponentType<IconProps>> = {
    food: FoodIcon,
    home: HouseIcon,
    education: EducationIcon,
    fun: TreeIcon,
    grocery: MarketIcon,
    clothes: ClothesIcon,
    transport: CarIcon,
    other: transactionType === 'INCOME' ? IncomeIcon : ExpenseIcon,
    travel: TravelIcon,
    freelance: MixerIcon,
  };

  return mapper[iconName];
}
