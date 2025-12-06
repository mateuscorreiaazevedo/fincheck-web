import type { JSX } from 'react';
import {
  BottomIcon,
  cn,
  DropdownMenu,
  ExpenseIcon,
  IncomeIcon,
  TransactionsIcon,
} from '@/shared';
import type { TransactionType } from '../../types/TransactionType';
import { useTransactionTypeDropdownViewModel } from './viewModel';

export function TransactionTypeDropdown() {
  const {
    handleSelectTransactionType,
    selectedTransactionType,
    transactionsOptions,
  } = useTransactionTypeDropdownViewModel();
  const iconByTransactionType: Record<TransactionType | 'ALL', JSX.Element> = {
    ALL: <TransactionsIcon />,
    INCOME: <IncomeIcon />,
    EXPENSE: <ExpenseIcon />,
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 rounded-2xl px-2 py-3 text-gray-9 transition-all hover:bg-gray-2"
          type="button"
        >
          {!selectedTransactionType && <TransactionsIcon />}
          {selectedTransactionType &&
            iconByTransactionType[selectedTransactionType.value]}
          <span className="font-medium text-gray-8 text-sm tracking-[-0.5px]">
            {selectedTransactionType
              ? selectedTransactionType.label
              : 'Transações'}
          </span>

          <BottomIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start" className="z-50 w-fit">
        <DropdownMenu.Body className="space-y-1">
          {transactionsOptions.map(item => (
            <DropdownMenu.Item
              className={cn(
                selectedTransactionType?.value === item.value &&
                  '!bg-teal-1 font-medium'
              )}
              key={item.value}
              onSelect={() => handleSelectTransactionType(item)}
            >
              {iconByTransactionType[item.value]}
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Body>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
