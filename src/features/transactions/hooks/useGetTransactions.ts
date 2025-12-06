import { useQuery } from '@tanstack/react-query';
import { httpTransactionsService } from '../services/httpTransactionsService';
import { useTransactionQueries } from './useTransactionQueries';

export function useGetTransactions() {
  const { listTransactionsKey, ...params } = useTransactionQueries();

  return useQuery({
    queryKey: listTransactionsKey,
    queryFn: async () =>
      httpTransactionsService.list({ ...params, month: params.month - 1 }),
  });
}
