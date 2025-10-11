import { useSearchParams } from 'react-router';
import { transactionsQueryKeys } from '../constants/transactionsQueryKeys';

export function useTransactionQueries() {
  const [searchParams] = useSearchParams();

  const month = searchParams.get('month')
    ? Number.parseInt(searchParams.get('month')!, 10)
    : new Date().getMonth() + 1;
  const year = searchParams.get('year')
    ? Number.parseInt(searchParams.get('year')!, 10)
    : new Date().getFullYear();
  const type = searchParams.get('type') ?? undefined;
  const bankAccountId = searchParams.get('bankAccountId') ?? undefined;

  const listTransactionsKey = transactionsQueryKeys.listAll([
    month,
    year,
    type,
    bankAccountId,
  ]);

  return {
    month,
    year,
    type,
    bankAccountId,
    listTransactionsKey,
  };
}
