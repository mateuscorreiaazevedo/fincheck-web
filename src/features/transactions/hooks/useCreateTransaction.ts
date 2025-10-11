import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { transactionsQueryKeys } from '../constants/transactionsQueryKeys';
import { httpTransactionsService } from '../services/httpTransactionsService';
import type { HttpCreateTransactionRequest } from '../types/HttpCreateTransactionRequest';
import type { Transaction } from '../types/Transaction';
import { useTransactionQueries } from './useTransactionQueries';

export function useCreateTransaction() {
  const queries = useTransactionQueries();
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

      queryClient.setQueryData<Transaction[]>(
        transactionsQueryKeys.listAll(queries),
        oldTransactions => {
          const transactions = [response, ...(oldTransactions || [])];

          transactions.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          return transactions;
        }
      );
    },
  });

  return {
    onCreateTransaction: mutateAsync,
    isPending,
  };
}
