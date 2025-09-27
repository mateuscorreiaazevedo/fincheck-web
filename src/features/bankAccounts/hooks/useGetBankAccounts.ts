import { useQuery } from '@tanstack/react-query';
import { sleep } from '@/shared';
import { bankAccountsQueryKeys } from '../constants/bankAccountsQueryKeys';

export function useGetBankAccounts() {
  const query = useQuery({
    queryKey: bankAccountsQueryKeys.getBankAccounts(),
    queryFn: async () => {
      await sleep();

      return [];
    },
  });

  return query;
}
