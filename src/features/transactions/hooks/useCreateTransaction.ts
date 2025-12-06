import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '@/features/bankAccounts';
import { httpTransactionsService } from '../services/httpTransactionsService';
import type { HttpCreateTransactionRequest } from '../types/HttpCreateTransactionRequest';
import { useTransactionQueries } from './useTransactionQueries';

export function useCreateTransaction() {
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
    onSuccess(_, vars) {
      toast.success(
        vars.type === 'INCOME'
          ? 'Receita cadastrada com sucesso!'
          : 'Despesa cadastrada com sucesso!'
      );

      queryClient.invalidateQueries({
        queryKey: listTransactionsKey,
      });

      queryClient.invalidateQueries({
        queryKey: bankAccountsQueryKeys.getBankAccounts(),
      });
    },
  });

  return {
    onCreateTransaction: mutateAsync,
    isPending,
  };
}
