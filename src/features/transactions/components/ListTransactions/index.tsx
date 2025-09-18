import { ContentView, Skeleton } from '@/shared';
import { generateDateKey } from '../../utils/generateDateKey';
import { ListTransactionsEmptyState } from './EmptyState';
import { ListTransactionsHeader } from './Header';
import { TransactionCard } from './TransactionCard';
import { useListTransactionsViewModel } from './useListTransactionsViewModel';

export function ListTransactions() {
  const {
    sliderState,
    onChangeSliderState,
    isInitialLoading,
    transactions,
    isLoading,
    hasTransactions,
  } = useListTransactionsViewModel();

  return (
    <ContentView className="flex flex-col bg-gray-1">
      <ListTransactionsHeader
        isLoading={isInitialLoading}
        onChangeSliderState={onChangeSliderState}
        sliderState={sliderState}
      />

      <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              className="h-[77px] w-full rounded-2xl bg-gray-3"
              key={generateDateKey(index)}
            />
          ))}
        {!isLoading && (
          <>
            {!hasTransactions && <ListTransactionsEmptyState />}
            {hasTransactions &&
              Array.from({ length: transactions?.length ?? 2 }).map(
                (_, index) => <TransactionCard key={generateDateKey(index)} />
              )}
          </>
        )}
      </div>
    </ContentView>
  );
}
