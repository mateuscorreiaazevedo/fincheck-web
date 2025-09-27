import { useQuery } from '@tanstack/react-query';

import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';
import { bankAccountsService } from '../services/httpBankAccountsService';

export function useGetBankAccounts() {
  const query = useQuery({
    queryKey: bankAccountsQueryKeys.getBankAccounts(),
    queryFn: () => bankAccountsService.list(),
  });

  return query;
}
