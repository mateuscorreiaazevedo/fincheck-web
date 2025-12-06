import type { TransactionType } from './TransactionType';

export interface HttpCreateTransactionRequest {
  name: string;
  valueInCents: number;
  bankAccountId: string;
  categoryId: string;
  date: string;
  type: TransactionType;
}
