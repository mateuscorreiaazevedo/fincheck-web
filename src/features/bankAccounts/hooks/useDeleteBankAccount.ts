import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';
import type { BankAccount } from '../types/BankAccount';
import type { HttpDeleteBankAccountRequest } from '../types/HttpDeleteBankAccountRequest';

export function useDeleteBankAccount() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpDeleteBankAccountRequest) => {
      await bankAccountsService.delete(data);
    },
    onSuccess: (_, { bankAccountId }) => {
      toast.success('Sua conta bancária foi excluída com sucesso!');
      queryClient.setQueryData<BankAccount[]>(
        bankAccountsQueryKeys.getBankAccounts(),
        oldData => {
          return oldData?.filter(account => account.id !== bankAccountId);
        }
      );
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
