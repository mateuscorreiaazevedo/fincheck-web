export const transactionsQueryKeys = {
  listAll: (params: unknown[]) => ['transactions', ...params] as const,
};
