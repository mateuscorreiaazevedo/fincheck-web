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
  const { onClose, type, visible, categories } =
    useModalCreateTransactionViewModel();

  const isExpense = type === 'EXPENSE';

  return (
    <Modal
      onChangeOpen={onClose}
      open={visible}
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
    >
      <form className="space-y-10">
        <div className="flex flex-col">
          <span className="w-full text-gray-6 text-xs">
            {isExpense ? 'Valor da despesa' : 'Valor da receita'}
          </span>
          <div className="flex h-8 items-center gap-2">
            <span className="text-gray-6 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>
        <div className="space-y-4">
          <Input
            name="name"
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
          />
          <Select
            classNames={{
              content: 'max-h-48 overflow-y-auto',
            }}
            options={categories}
            placeholder="Categoria"
          />
          <Select
            options={[]}
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
          />
          <DatePicker />
          <Button className="w-full" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
