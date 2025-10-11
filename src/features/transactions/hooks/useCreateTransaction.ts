import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  type BankAccount,
  bankAccountsQueryKeys,
} from '@/features/bankAccounts';
import type { Category } from '@/features/categories';
import { httpTransactionsService } from '../services/httpTransactionsService';
import type { HttpCreateTransactionRequest } from '../types/HttpCreateTransactionRequest';
import type { Transaction } from '../types/Transaction';
import { useTransactionQueries } from './useTransactionQueries';

interface UseCreateTransactionProps {
  categories?: Category[];
}

export function useCreateTransaction({
  categories,
}: UseCreateTransactionProps = {}) {
  const { listTransactionsKey } = useTransactionQueries();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: HttpCreateTransactionRequest) =>
      httpTransactionsService.create(data),
    onError(error, vars) {
      const genericError =
        vars.type === 'INCOME'
          ? 'Erro ao cadastrar sua receita.'
          : 'Erro ao cadastrar sua despesa.';

      toast.error(error.message || genericError);
    },
    onSuccess(response, vars) {
      toast.success(
        vars.type === 'INCOME'
          ? 'Receita criada com sucesso!'
          : 'Despesa criada com sucesso!'
      );

      const selectedCategory = categories?.find(
        category => category.id === response.categoryId
      );

      queryClient.setQueryData<Transaction[]>(
        listTransactionsKey,
        oldTransactions => {
          const transactions = [
            { ...response, icon: selectedCategory?.icon ?? null },
            ...(oldTransactions || []),
          ];

          transactions.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          return transactions;
        }
      );

      queryClient.setQueryData<BankAccount[]>(
        bankAccountsQueryKeys.getBankAccounts(),
        oldBankAccounts => {
          const bankAccounts = [...(oldBankAccounts || [])];
          const bankAccountIndex = bankAccounts.findIndex(
            account => account.id === response.bankAccountId
          );

          if (bankAccountIndex >= 0) {
            const bankAccount = bankAccounts[bankAccountIndex];
            const updatedBalance =
              response.type === 'INCOME'
                ? bankAccount.currentBalanceInCents! + response.valueInCents
                : bankAccount.currentBalanceInCents! - response.valueInCents;

            bankAccounts[bankAccountIndex] = {
              ...bankAccount,
              currentBalanceInCents: updatedBalance,
            };
          }

          return bankAccounts;
        }
      );
    },
  });

  return {
    onCreateTransaction: mutateAsync,
    isPending,
  };
}
