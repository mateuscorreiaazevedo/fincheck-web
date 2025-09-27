import type { BankAccountType } from './BankAccountType';

export type HttpUpdateBankAccountRequest = {
  bankAccountId?: string;
  body: {
    name: string;
    initialBalanceInCents: number;
    accountType: BankAccountType;
    color: string;
  };
};
