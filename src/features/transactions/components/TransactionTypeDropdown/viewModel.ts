import { useState } from 'react';
import { useSearchParams } from 'react-router';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionTypeOption | null>(() => {
      const selectedType = searchParams.get('type');
      if (selectedType) {
        const foundType = transactionsOptions.find(
          option => option.value === selectedType
        );
        if (foundType) {
          return foundType;
        }
      }
      return transactionsOptions.at(-1) ?? null;
    });

  const handleSelectTransactionType = (item: TransactionTypeOption) => {
    setSelectedTransactionType(item);
    setSearchParams(prev => {
      const { type: _, ...params } = Object.fromEntries(prev.entries());

      return {
        ...params,
        ...(item.value !== 'ALL' && { type: item.value }),
      };
    });
  };

  return {
    selectedTransactionType,
    transactionsOptions,
    handleSelectTransactionType,
  };
}
