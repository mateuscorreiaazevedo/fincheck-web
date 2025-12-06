import type { TransactionType } from './TransactionType';

export interface HttpUpdateTransactionRequest {
  transactionId?: string;
  body: {
    name: string;
    valueInCents: number;
    bankAccountId: string;
    categoryId: string;
    date: string;
    type: TransactionType;
  };
}
