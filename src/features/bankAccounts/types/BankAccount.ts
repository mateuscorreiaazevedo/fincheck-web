import type { BankAccountType } from './BankAccountType';

export interface BankAccount {
  id: string;
  userId: string;
  name: string;
  initialBalanceInCents: number;
  accountType: BankAccountType;
  color: string;
  createdAt: string;
  currentBalanceInCents?: number;
}
