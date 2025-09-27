import noDataImage from '@/assets/images/no-data.svg';

export function ListTransactionsEmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-20 lg:py-0">
      <img alt="no data" className="size-40" src={noDataImage} />
      <p className="text-gray-7">Não encontramos nenhuma transação!</p>
    </div>
  );
}
