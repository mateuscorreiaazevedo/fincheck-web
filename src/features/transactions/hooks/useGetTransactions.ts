import { useQuery } from '@tanstack/react-query';
import { sleep } from '@/shared';
import { transactionsQueryKeys } from '../constants/transactionsQueryKeys';
import { useTransactionQueries } from './useTransactionQueries';

export function useGetTransactions() {
  const queries = useTransactionQueries();

  return useQuery({
    queryKey: transactionsQueryKeys.listAll(queries),
    queryFn: async () => {
      const delay = 1400;
      await sleep(delay);

      return [];
    },
  });
}
