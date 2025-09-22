import { Input, InputCurrency, Modal } from '@/shared';
import { useModalCreateBankAccountViewModel } from './viewModel';

export function ModalCreateBankAccount() {
  const { setVisibility, visible } = useModalCreateBankAccountViewModel();

  return (
    <Modal onChangeOpen={setVisibility} open={visible} title="Nova conta">
      <form className="space-y-10">
        <div className="flex flex-col">
          <span className="w-full text-gray-6 text-xs">Saldo</span>
          <div className="flex h-8 items-center gap-2">
            <span className="text-gray-6 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>
        <div>
          <Input name="name" placeholder="Nome da conta" />
        </div>
      </form>
    </Modal>
  );
}
