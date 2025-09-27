import { Controller } from 'react-hook-form';
import {
  Button,
  Input,
  InputCurrency,
  Modal,
  Select,
  TrashIcon,
} from '@/shared';
import { bankAccountTypeOptions } from '../../constants/bankAccountsTypeOptions';
import { ColorDropdownInput } from '../ColorDropdownInput';
import { useModalEditBankAccountViewModel } from './viewModel';

export function ModalEditBankAccount() {
  const {
    handleCloseModalEditBankAccount,
    visible,
    control,
    fieldErrors,
    onSubmit,
    register,
    isPending,
    bankAccount,
  } = useModalEditBankAccountViewModel();

  if (!bankAccount) {
    return null;
  }

  return (
    <Modal
      onChangeOpen={handleCloseModalEditBankAccount}
      open={visible && !!bankAccount}
      rightIcon={() => <TrashIcon className="text-red-9" />}
      rightIconAction={() => alert(bankAccount.id)}
      title="Conta"
    >
      <form className="space-y-10" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <span className="w-full text-gray-6 text-xs">Saldo</span>
          <div className="flex h-8 items-center gap-2">
            <span className="text-gray-6 text-lg tracking-[-0.5px]">R$</span>
            <Controller
              control={control}
              name="initialBalanceInCents"
              render={({ field, fieldState }) => (
                <InputCurrency {...field} error={fieldState.error?.message} />
              )}
            />
          </div>
        </div>
        <div className="space-y-4">
          <Input
            {...register('name')}
            error={fieldErrors.name?.message}
            name="name"
            placeholder="Nome da conta"
          />
          <Controller
            control={control}
            name="accountType"
            render={({ field, fieldState }) => (
              <Select
                error={fieldState.error?.message}
                onSelect={field.onChange}
                options={bankAccountTypeOptions}
                placeholder="Tipo"
                selected={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="color"
            render={({ field, fieldState }) => (
              <ColorDropdownInput
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Button
            className="w-full"
            isLoading={isPending}
            isLoadingLabel="Salvando..."
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
