import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '@/features/bankAccounts';
import { httpTransactionsService } from '../services/httpTransactionsService';
import type { HttpUpdateTransactionRequest } from '../types/HttpUpdateTransactionRequest';
import { useTransactionQueries } from './useTransactionQueries';

export function useUpdateTransaction() {
  const { listTransactionsKey } = useTransactionQueries();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: HttpUpdateTransactionRequest) =>
      httpTransactionsService.update(data),
    onError(error, vars) {
      const genericError =
        vars.body.type === 'INCOME'
          ? 'Erro ao atualizar sua receita.'
          : 'Erro ao atualizar sua despesa.';

      toast.error(error.message || genericError);
    },
    onSuccess(_, vars) {
      toast.success(
        vars.body.type === 'INCOME'
          ? 'Receita atualizada com sucesso!'
          : 'Despesa atualizada com sucesso!'
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
    onUpdateTransaction: mutateAsync,
    isPending,
  };
}
