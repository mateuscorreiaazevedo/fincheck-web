import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { transformCurrencyString } from '@/shared';
import { useCreateBankAccount } from '../../hooks/useCreateBankAccount';
import { useVisibilityBankAccountModalsStore } from '../../hooks/useVisibilityBankAccountModalsStore';
import type { BankAccountType } from '../../types/BankAccountType';

const schema = z.object({
  initialBalanceInCents: z.string().min(0, 'O saldo inicial é obrigatório.'),
  name: z.string().min(1, 'Nome da conta bancária é obritagório.'),
  accountType: z
    .enum(
      ['', 'CHECKING', 'INVESTMENT', 'CASH'],
      'O tipo da conta bancária é obrigatório.'
    )
    .refine(val => val !== '', 'O tipo da conta bancária é obrigatório.'),
  color: z
    .string()
    .nonempty('Defina uma cor personalizada para a sua conta bancária.'),
});

type CreateBankAccountSchema = z.infer<typeof schema>;

export function useModalCreateBankAccountViewModel() {
  const { create } = useVisibilityBankAccountModalsStore();
  const { handleCreateBankAccount, isPending } = useCreateBankAccount();
  const { control, register, formState, handleSubmit, reset } =
    useForm<CreateBankAccountSchema>({
      resolver: zodResolver(schema),
      defaultValues: {
        initialBalanceInCents: '0',
        name: '',
        color: '',
        accountType: '',
      },
    });

  const onClose = useCallback(() => {
    reset(formState.defaultValues);
    create.onClose();
  }, []);

  const onSubmit = handleSubmit(async data => {
    await handleCreateBankAccount(
      {
        ...data,
        accountType: data.accountType as BankAccountType,
        initialBalanceInCents: transformCurrencyString(
          data.initialBalanceInCents
        ),
      },
      {
        onSuccess() {
          onClose();
        },
      }
    );
  });

  return {
    visible: create.visible,
    onClose,
    control,
    register,
    fieldErrors: formState.errors,
    onSubmit,
    isPending,
  };
}
