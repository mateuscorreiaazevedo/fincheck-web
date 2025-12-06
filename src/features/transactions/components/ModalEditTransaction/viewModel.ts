import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useGetBankAccounts } from '@/features/bankAccounts';
import { categoriesLabel, useGetCategories } from '@/features/categories';
import { handleListOptions, transformCurrencyString } from '@/shared';
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { useUpdateTransaction } from '../../hooks/useUpdateTransaction';
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
    edit: { transaction, visible, ...edit },
  } = useVisibilityTransactionModalsStore();
  const [isOpenModalDeleteTransaction, setIsOpenModalDeleteTransaction] =
    useState(false);
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

  const { isPending, onUpdateTransaction } = useUpdateTransaction();
  const { isDeleting, onDeleteTransaction } = useDeleteTransaction();

  const isExpense = transaction?.type === 'EXPENSE';

  const handleOpenModalDeleteTransaction = useCallback(() => {
    setIsOpenModalDeleteTransaction(true);
  }, []);

  const handleCloseModalDeleteTransaction = useCallback(() => {
    setIsOpenModalDeleteTransaction(false);
  }, []);

  const onClose = useCallback(() => {
    reset(defaultValues);
    edit.onClose();
  }, []);

  const onSubmit = handleSubmit(async data => {
    await onUpdateTransaction(
      {
        transactionId: transaction?.id,
        body: {
          ...data,
          valueInCents: transformCurrencyString(data.valueInCents),
          date: data.date.toISOString(),
          type: transaction?.type ?? 'INCOME',
        },
      },
      {
        onSuccess() {
          onClose();
        },
      }
    );
  });

  async function handleDeleteTransaction() {
    await onDeleteTransaction(
      { transactionId: transaction?.id },
      {
        onSuccess() {
          handleCloseModalDeleteTransaction();
          onClose();
        },
      }
    );
  }

  return {
    onClose,
    visible,
    transaction,
    isExpense,
    onSubmit,
    control,
    register,
    fieldErrors: errors,
    isPending,
    isDeleting,
    handleDeleteTransaction,
    isOpenModalDeleteTransaction,
    handleCloseModalDeleteTransaction,
    handleOpenModalDeleteTransaction,
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
