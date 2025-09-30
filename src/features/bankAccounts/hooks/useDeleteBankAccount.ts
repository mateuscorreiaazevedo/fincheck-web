import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';
import type { HttpDeleteBankAccountRequest } from '../types/HttpDeleteBankAccountRequest';

export function useDeleteBankAccount() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpDeleteBankAccountRequest) => {
      await bankAccountsService.delete(data);
    },
    onSuccess: () => {
      toast.success('Sua conta bancária foi excluída com sucesso!');
      queryClient.invalidateQueries({
        queryKey: bankAccountsQueryKeys.getBankAccounts(),
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    handleDeleteBankAccount: mutateAsync,
    isPending,
  };
}
