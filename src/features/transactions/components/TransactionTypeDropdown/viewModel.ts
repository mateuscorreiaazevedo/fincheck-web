import { useState } from 'react';
import type { TransactionType } from '../../types/TransactionType';

interface TransactionTypeOption {
  label: string;
  value: TransactionType | 'ALL';
}
const transactionsOptions: TransactionTypeOption[] = [
  {
    label: 'Receitas',
    value: 'INCOME',
  },
  {
    label: 'Despesas',
    value: 'EXPENSE',
  },
  {
    label: 'Transações',
    value: 'ALL',
  },
];

export function useTransactionTypeDropdownViewModel() {
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionTypeOption | null>(transactionsOptions.at(-1) ?? null);

  const handleSelectTransactionType = (item: TransactionTypeOption) => {
    setSelectedTransactionType(item);
  };

  return {
    selectedTransactionType,
    transactionsOptions,
    handleSelectTransactionType,
  };
}
