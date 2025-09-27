import { useQuery } from '@tanstack/react-query';

import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';

export function useGetBankAccounts() {
  const query = useQuery({
    queryKey: bankAccountsQueryKeys.getBankAccounts(),
    queryFn: async () => {
      const response = await bankAccountsService.list();

      return response;
    },
  });

  return query;
}
