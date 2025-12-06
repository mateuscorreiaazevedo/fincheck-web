import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '@/features/bankAccounts';
import { httpTransactionsService } from '../services/httpTransactionsService';
import type { HttpDeleteTransactionRequest } from '../types/HttpDeleteTransactionRequest';
import { useTransactionQueries } from './useTransactionQueries';

export function useDeleteTransaction() {
  const { listTransactionsKey } = useTransactionQueries();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: HttpDeleteTransactionRequest) =>
      httpTransactionsService.remove(data),
    onError(error) {
      toast.error(error.message || 'Falha ao deletar a transação.');
    },
    onSuccess() {
      toast.success('Transação deletada com sucesso!');

      queryClient.invalidateQueries({
        queryKey: listTransactionsKey,
      });

      queryClient.invalidateQueries({
        queryKey: bankAccountsQueryKeys.getBankAccounts(),
      });
    },
  });

  return {
    onDeleteTransaction: mutateAsync,
    isDeleting: isPending,
  };
}
