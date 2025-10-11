import { ContentView, Skeleton } from '@/shared';
import { generateDateKey } from '../../utils/generateDateKey';
import { ModalTransactionFilters } from '../ModalTransactionFilters';
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
    handleOpenModalFilters,
    currentMonth,
    handleSelectMonth,
  } = useListTransactionsViewModel();

  return (
    <>
      <ContentView className="flex flex-col bg-gray-1">
        <ListTransactionsHeader
          currentSlider={currentMonth}
          isLoading={isInitialLoading}
          onChangeSliderState={onChangeSliderState}
          onOpenModalFilters={handleOpenModalFilters}
          onSelectMonth={handleSelectMonth}
          sliderState={sliderState}
        />

        <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                className="h-[77px] w-full rounded-2xl bg-gray-3 after:via-white/40"
                key={generateDateKey(index)}
              />
            ))}
          {!isLoading && (
            <>
              {!hasTransactions && <ListTransactionsEmptyState />}
              {hasTransactions &&
                transactions?.map(transaction => (
                  <TransactionCard key={transaction.id} {...transaction} />
                ))}
            </>
          )}
        </div>
      </ContentView>
      <ModalTransactionFilters />
    </>
  );
}
