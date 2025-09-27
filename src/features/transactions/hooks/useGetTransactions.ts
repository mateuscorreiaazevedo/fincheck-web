import { useQuery } from '@tanstack/react-query';
import { sleep } from '@/shared';
import { transactionsQueryKeys } from '../constants/transactionsQueryKeys';

export function useGetTransactions() {
  return useQuery({
    queryKey: transactionsQueryKeys.listAll(),
    queryFn: async () => {
      const delay = 1400;
      await sleep(delay);

      return [];
    },
  });
}
