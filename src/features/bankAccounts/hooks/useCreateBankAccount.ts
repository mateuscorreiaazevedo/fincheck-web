import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';
import type { BankAccount } from '../types/BankAccount';
import type { HttpCreateBankAccountRequest } from '../types/HttpCreateBankAccountRequest';

export function useCreateBankAccount() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpCreateBankAccountRequest) =>
      bankAccountsService.create(data),
    onSuccess: (response, { name }) => {
      toast.success(`A conta ${name} foi cadastrada com sucesso!`);
      queryClient.setQueryData(
        bankAccountsQueryKeys.getBankAccounts(),
        (oldData: BankAccount[]) => {
          if (!oldData) {
            return [response];
          }
          return [
            ...oldData,
            {
              ...response,
              currentBalanceInCents: response.initialBalanceInCents,
            },
          ] as BankAccount[];
        }
      );
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
