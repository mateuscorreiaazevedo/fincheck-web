import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { transformCurrencyString } from '@/shared';
import { useUpdateBankAccount } from '../../hooks/useUpdateBankAccount';
import { useVisibilityModalEditBankAccountStore } from '../../hooks/useVisibilityModalEditBankAccountStore';

const schema = z.object({
  initialBalanceInCents: z.union(
    [z.string(), z.number()],
    'Saldo inicial é obrigatório'
  ),
  name: z.string().min(1, 'Nome da conta bancária é obritagório.'),
  accountType: z.enum(
    ['CHECKING', 'INVESTMENT', 'CASH'],
    'O tipo da conta bancária é obrigatório.'
  ),
  color: z.string('Defina uma cor personalizada para a sua conta bancária.'),
});

type CreateBankAccountSchema = z.infer<typeof schema>;

export function useModalEditBankAccountViewModel() {
  const { bankAccount, visible, setVisibility } =
    useVisibilityModalEditBankAccountStore();
  const [isOpenModalDeleteBankAccount, setIsOpenModalDeleteBankAccount] =
    useState(false);
  const { handleUpdateBankAccount, isPending } = useUpdateBankAccount();
  const { control, register, formState, handleSubmit, reset } =
    useForm<CreateBankAccountSchema>({
      resolver: zodResolver(schema),
      defaultValues: {
        initialBalanceInCents: bankAccount?.initialBalanceInCents,
        accountType: bankAccount?.accountType,
        color: bankAccount?.color,
        name: bankAccount?.name,
      },
    });

  const handleCloseModalEditBankAccount = useCallback(() => {
    setVisibility({
      bankAccount: null,
      visible: false,
    });
  }, []);

  const onSubmit = handleSubmit(async data => {
    await handleUpdateBankAccount(
      {
        bankAccountId: bankAccount?.id,
        body: {
          ...data,
          initialBalanceInCents: transformCurrencyString(
            data.initialBalanceInCents
          ),
        },
      },
      {
        onSuccess() {
          reset();
          handleCloseModalEditBankAccount();
        },
      }
    );
  });

  const handleOpenModalDelete = useCallback(() => {
    setIsOpenModalDeleteBankAccount(true);
    setVisibility({
      bankAccount,
      visible: false,
    });
  }, []);

  const handleCloseModalDelete = useCallback(() => {
    setIsOpenModalDeleteBankAccount(false);
    setVisibility({
      bankAccount,
      visible: true,
    });
  }, []);

  return {
    bankAccount,
    visible,
    control,
    register,
    fieldErrors: formState.errors,
    onSubmit,
    isPending,
    handleCloseModalEditBankAccount,
    isOpenModalDeleteBankAccount,
    handleOpenModalDelete,
    handleCloseModalDelete,
  };
}
