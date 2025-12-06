import type { TransactionType } from '@/features/transactions';

export interface Category {
  id: string;
  name: string;
  icon: string;
  isDefault: boolean;
  type: TransactionType;
}
