import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useVisibilityModalEditBankAccountStore } from '../../hooks/useVisibilityModalEditBankAccountStore';

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

export function useModalEditBankAccountViewModel() {
  const { bankAccount, visible, setVisibility } =
    useVisibilityModalEditBankAccountStore();

  const { control, register, formState, handleSubmit } =
    useForm<CreateBankAccountSchema>({
      resolver: zodResolver(schema),
      defaultValues: {
        initialBalanceInCents: bankAccount?.initialBalanceInCents.toString(),
        accountType: bankAccount?.accountType,
        color: bankAccount?.color,
        name: bankAccount?.name,
      },
    });

  const onSubmit = handleSubmit(data => {
    // biome-ignore lint/suspicious/noConsole: for test
    console.log(data);
  });

  const handleCloseModalEditBankAccount = useCallback(() => {
    setVisibility({
      bankAccount: null,
      visible: false,
    });
  }, []);

  return {
    bankAccount,
    visible,
    control,
    register,
    fieldErrors: formState.errors,
    onSubmit,
    handleCloseModalEditBankAccount,
    isPending: false,
  };
}
