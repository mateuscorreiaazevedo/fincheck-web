import type { TransactionType } from './TransactionType';

export interface Transaction {
  id: string;
  userId: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  valueInCents: number;
  date: string;
  type: TransactionType;
  icon: string | null;
}
