import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useGetBankAccounts } from '@/features/bankAccounts';
import { categoriesLabel, useGetCategories } from '@/features/categories';
import { handleListOptions, transformCurrencyString } from '@/shared';
import { useCreateTransaction } from '../../hooks/useCreateTransaction';
import { useVisibilityTransactionModalsStore } from '../../stores/useVisibilityTransactionModalsStore';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  valueInCents: z.union(
    [z.string(), z.number()],
    'Insira o valor da sua transação'
  ),
  bankAccountId: z.string().nonempty('A conta bancária é obrigatória.'),
  categoryId: z.string().nonempty('A categoria é obrigatória.'),
  date: z.date('A data é obrigatória.'),
});

type NewTransactionSchema = z.infer<typeof schema>;

export function useModalEditTransactionViewModel() {
  const {
    edit: { transaction, ...edit },
  } = useVisibilityTransactionModalsStore();
  const { data: categories } = useGetCategories();
  const { data: bankAccounts } = useGetBankAccounts();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm<NewTransactionSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: transaction?.name,
      date: transaction ? new Date(transaction.date) : new Date(),
      valueInCents: transaction?.valueInCents,
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
    },
  });

  const { isPending, onCreateTransaction } = useCreateTransaction();

  const isExpense = transaction?.type === 'EXPENSE';

  const onClose = useCallback(() => {
    reset(defaultValues);
    edit.onClose();
  }, []);

  const onSubmit = handleSubmit(async data => {
    await onCreateTransaction(
      {
        ...data,
        valueInCents: transformCurrencyString(data.valueInCents),
        date: data.date.toISOString(),
        type: transaction?.type ?? 'INCOME',
      },
      {
        onSuccess() {
          onClose();
        },
      }
    );
  });

  return {
    onClose,
    visible: edit.visible,
    transaction,
    isExpense,
    onSubmit,
    control,
    register,
    fieldErrors: errors,
    isPending,
    categories: handleListOptions({
      data:
        categories?.filter(
          cat => cat.type === (isExpense ? 'EXPENSE' : 'INCOME')
        ) ?? [],
      keys: {
        label: 'name',
        value: 'id',
      },
      objectTranslation: categoriesLabel,
    }),
    bankAccounts: handleListOptions({
      data: bankAccounts,
      keys: {
        label: 'name',
        value: 'id',
      },
    }),
  };
}
