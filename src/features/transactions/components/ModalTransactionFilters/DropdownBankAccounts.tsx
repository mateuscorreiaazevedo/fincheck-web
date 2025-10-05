import { useState } from 'react';
import type { BankAccount } from '@/features/bankAccounts';
import { BottomIcon, cn, DropdownMenu } from '@/shared';

interface Props {
  data?: BankAccount[];
  onSelect(value: string): void;
  value: string | null;
}

export function DropdownBankAccounts({ data, onSelect, value }: Props) {
  const [selectedBankAccount, setSelectedBankAccount] =
    useState<BankAccount | null>(() => {
      return data?.find(item => item.id === value) || null;
    });

  function handleSelect(bankAccount: BankAccount) {
    setSelectedBankAccount(prev => (prev === bankAccount ? null : bankAccount));
    onSelect(bankAccount.id);
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        className={cn(
          'relative w-full rounded-2xl border border-gray-4 p-2 text-left text-gray-8 outline-none transition-all focus:border-gray-8',
          !!selectedBankAccount && 'bg-gray-2'
        )}
      >
        {selectedBankAccount ? selectedBankAccount.name : 'Selecione'}
        <BottomIcon className="-translate-y-1/2 absolute top-1/2 right-3" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 w-trigger-dropdown p-2">
        {data?.map(item => (
          <DropdownMenu.Item
            className={cn(
              'w-full rounded-xl p-2 text-left text-gray-8 transition-colors hover:bg-gray-1',
              value === item.id && '!bg-gray-2'
            )}
            key={item.id}
            onSelect={() => handleSelect(item)}
          >
            {item.name}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
