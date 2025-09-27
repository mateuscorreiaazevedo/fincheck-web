import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { transformCurrencyString } from '@/shared';
import { useCreateBankAccount } from '../../hooks/useCreateBankAccount';
import { useVisibilityModalCreateBankAccountStore } from '../../hooks/useVisibilityModalCreateBankAccountStore';

const schema = z.object({
  initialBalanceInCents: z.string('Saldo inicial é obrigatório'),
  name: z.string().min(1, 'Nome da conta bancária é obritagório.'),
  accountType: z.enum(
    ['CHECKING', 'INVESTMENT', 'CASH'],
    'O tipo da conta bancária é obrigatório.'
  ),
  color: z.string('Defina uma cor personalizada para a sua conta bancária.'),
});

type CreateBankAccountSchema = z.infer<typeof schema>;

export function useModalCreateBankAccountViewModel() {
  const visibility = useVisibilityModalCreateBankAccountStore();
  const { handleCreateBankAccount, isPending } = useCreateBankAccount();
  const { control, register, formState, handleSubmit } =
    useForm<CreateBankAccountSchema>({
      resolver: zodResolver(schema),
      defaultValues: {
        initialBalanceInCents: '0',
      },
    });

  const onSubmit = handleSubmit(async data => {
    await handleCreateBankAccount(
      {
        ...data,
        initialBalanceInCents: transformCurrencyString(
          data.initialBalanceInCents
        ),
      },
      {
        onSuccess() {
          visibility.setVisibility(false);
        },
      }
    );
  });

  return {
    ...visibility,
    control,
    register,
    fieldErrors: formState.errors,
    onSubmit,
    isPending,
  };
}
