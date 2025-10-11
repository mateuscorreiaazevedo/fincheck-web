import { Controller } from 'react-hook-form';
import {
  Button,
  DatePicker,
  Input,
  InputCurrency,
  Modal,
  Select,
} from '@/shared';
import { useModalCreateTransactionViewModel } from './viewModel';

export function ModalCreateTransaction() {
  const {
    onClose,
    isExpense,
    visible,
    categories,
    bankAccounts,
    control,
    register,
    fieldErrors,
    onSubmit,
  } = useModalCreateTransactionViewModel();

  return (
    <Modal
      onChangeOpen={onClose}
      open={visible}
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
    >
      <form className="space-y-10" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <span className="w-full text-gray-6 text-xs">
            {isExpense ? 'Valor da despesa' : 'Valor da receita'}
          </span>
          <div className="flex h-8 items-center gap-2">
            <span className="text-gray-6 text-lg tracking-[-0.5px]">R$</span>
            <Controller
              control={control}
              name="valueInCents"
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
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field, fieldState }) => (
              <Select
                classNames={{
                  content: 'max-h-80 overflow-y-auto',
                }}
                error={fieldState.error?.message}
                onSelect={field.onChange}
                options={categories}
                placeholder="Categoria"
                selected={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="bankAccountId"
            render={({ field, fieldState }) => (
              <Select
                error={fieldState.error?.message}
                onSelect={field.onChange}
                options={bankAccounts}
                placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                selected={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="date"
            render={({ field, fieldState }) => (
              <DatePicker
                error={fieldState.error?.message}
                maxDate={new Date()}
                onChange={field.onChange}
                placeholder="Data"
                value={field.value}
              />
            )}
          />
          <Button className="w-full" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
