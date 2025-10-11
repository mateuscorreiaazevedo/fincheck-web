import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useGetBankAccounts } from '@/features/bankAccounts';
import { categoriesLabel, useGetCategories } from '@/features/categories';
import { handleListOptions, transformCurrencyString } from '@/shared';
import { useCreateTransaction } from '../../hooks/useCreateTransaction';
import { useVisibilityModalCreateTransactionStore } from '../../stores/useVisibilityModalCreateTransactionStore';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  valueInCents: z.string('Insira o valor da sua transação'),
  bankAccountId: z.string('A conta bancária é obrigatória.'),
  categoryId: z.string('A categoria é obrigatória.'),
  date: z.date('A data é obrigatória.'),
});

type NewTransactionSchema = z.infer<typeof schema>;

export function useModalCreateTransactionViewModel() {
  const { setVisibility, type, visible } =
    useVisibilityModalCreateTransactionStore();
  const { data: categories } = useGetCategories();
  const { data: bankAccounts } = useGetBankAccounts();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTransactionSchema>({
    resolver: zodResolver(schema),
  });
  const { isPending, onCreateTransaction } = useCreateTransaction();

  const isExpense = type === 'EXPENSE';

  const onClose = useCallback(() => {
    setVisibility({
      type: null,
      visible: false,
    });
  }, []);

  const onSubmit = handleSubmit(async data => {
    await onCreateTransaction(
      {
        ...data,
        valueInCents: transformCurrencyString(data.valueInCents),
        date: data.date.toISOString(),
        type: type!,
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
    visible,
    isExpense,
    onSubmit,
    control,
    register,
    fieldErrors: errors,
    isPending,
    categories: handleListOptions({
      data: categories,
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
