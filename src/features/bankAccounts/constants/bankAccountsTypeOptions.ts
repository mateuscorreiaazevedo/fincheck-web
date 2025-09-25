import type { SelectOption } from '@/shared';

export const bankAccountTypeOptions: SelectOption[] = [
  {
    value: 'CHECKING',
    label: 'Conta corrente',
  },
  {
    value: 'INVESTMENT',
    label: 'Conta de investimentos',
  },
  {
    value: 'CASH',
    label: 'Dinheiro em espécie',
  },
];
