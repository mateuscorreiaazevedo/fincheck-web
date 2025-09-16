import {
  formatCurrencyHelper,
  RoundedIcon,
  VisibilityToggleContent,
} from '@/shared';
import type { BankAccountType } from '../types/BankAccountType';
import { BankAccountCardIcon } from './BankAccountCardIcon';

interface IBankAccountCardProps {
  accountType: BankAccountType;
  name: string;
  balanceInCents: number;
  color: string;
}

export function BankAccountCard({
  accountType,
  balanceInCents,
  name,
  color,
}: IBankAccountCardProps) {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-teal-4 border-b-4 bg-white p-4"
      style={{
        borderColor: color,
      }}
    >
      <div className="flex flex-col gap-1">
        <RoundedIcon>
          <BankAccountCardIcon
            className="size-6 text-gray-7"
            type={accountType}
          />
        </RoundedIcon>
        <span className="font-medium text-gray-8 tracking-[-0.5px]">
          {name}
        </span>
      </div>
      <div className="flex flex-col">
        <VisibilityToggleContent>
          <span className="font-medium text-gray-8 tracking-[-0.5px]">
            {formatCurrencyHelper(balanceInCents)}
          </span>
        </VisibilityToggleContent>
        <small className="text-gray-6 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
