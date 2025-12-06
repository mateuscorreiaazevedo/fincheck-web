import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';
import type { HttpUpdateBankAccountRequest } from '../types/HttpUpdateBankAccountRequest';

export function useUpdateBankAccount() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpUpdateBankAccountRequest) => {
      await bankAccountsService.update(data);
    },
    onSuccess: (_, { body: { name } }) => {
      toast.success(`A conta ${name} foi atualizada com sucesso!`);
      queryClient.invalidateQueries({
        queryKey: bankAccountsQueryKeys.getBankAccounts(),
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    handleUpdateBankAccount: mutateAsync,
    isPending,
  };
}
