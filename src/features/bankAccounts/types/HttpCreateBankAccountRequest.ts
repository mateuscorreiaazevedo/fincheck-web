import type { BankAccountType } from './BankAccountType';

export type HttpCreateBankAccountRequest = {
  name: string;
  initialBalanceInCents: number;
  accountType: BankAccountType;
  color: string;
};
