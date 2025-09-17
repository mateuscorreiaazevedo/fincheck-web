import { ContentView, Skeleton } from '@/shared';
import { generateDateKey } from '../../utils/generateDateKey';
import { ListTransactionsHeader } from './Header';
import { TransactionCard } from './TransactionCard';
import { useListTransactionsViewModel } from './useListTransactionsViewModel';

export function ListTransactions() {
  const { sliderState, onChangeSliderState, isLoading } =
    useListTransactionsViewModel();

  return (
    <ContentView className="flex flex-col bg-gray-1">
      <ListTransactionsHeader
        isLoading={isLoading}
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
        {!isLoading &&
          Array.from({ length: 2 }).map((_, index) => (
            <TransactionCard key={generateDateKey(index)} />
          ))}
      </div>
    </ContentView>
  );
}
