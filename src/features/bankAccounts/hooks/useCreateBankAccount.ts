import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';
import type { HttpCreateBankAccountRequest } from '../types/HttpCreateBankAccountRequest';

export function useCreateBankAccount() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpCreateBankAccountRequest) => {
      await bankAccountsService.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: bankAccountsQueryKeys.getBankAccounts(),
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    handleCreateBankAccount: mutateAsync,
    isPending,
  };
}
