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
    useState<BankAccount | null>(null);

  function handleSelect(bankAccount: BankAccount) {
    setSelectedBankAccount(prev => (prev === bankAccount ? null : bankAccount));
    onSelect(bankAccount.id);
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        className={cn(
          'relative w-full rounded-2xl bg-gray-1 p-2 text-left text-gray-8 transition-colors',
          !!selectedBankAccount && 'bg-gray-2'
        )}
      >
        {selectedBankAccount ? selectedBankAccount.name : 'Selecione'}
        <BottomIcon className="-translate-y-1/2 absolute top-1/2 right-3" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 w-trigger-dropdown bg-opacity-80 p-2 backdrop-blur-sm">
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
