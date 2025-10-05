import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { sleep } from '@/shared';
import { transactionsQueryKeys } from '../constants/transactionsQueryKeys';

export function useGetTransactions() {
  const [searchParams] = useSearchParams();

  const month = searchParams.get('month')
    ? Number.parseInt(searchParams.get('month')!, 10)
    : new Date().getMonth() + 1;
  const year = searchParams.get('year')
    ? Number.parseInt(searchParams.get('year')!, 10)
    : new Date().getFullYear();
  const type = searchParams.get('type') ?? undefined;
  const bankAccountId = searchParams.get('bankAccountId') ?? undefined;

  return useQuery({
    queryKey: transactionsQueryKeys.listAll([month, year, type, bankAccountId]),
    queryFn: async () => {
      const delay = 1400;
      await sleep(delay);

      return [];
    },
  });
}
