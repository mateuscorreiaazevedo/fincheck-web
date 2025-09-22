import { Button, cn, LeftIcon, Modal, RightIcon } from '@/shared';
import { useModalTransactionFiltersViewModel } from './viewModel';

const mockAccounts = [
  {
    value: '123',
    label: 'Nubank',
  },
  {
    value: '456',
    label: 'XP Investimentos',
  },
  {
    value: '789',
    label: 'Dinheiro',
  },
];

export function ModalTransactionFilters() {
  const {
    setVisibility,
    visible,
    yearSelected,
    selectedBankAccountId,
    handleSelectBankAcccountId,
    handleChangeYear,
  } = useModalTransactionFiltersViewModel();

  return (
    <Modal onChangeOpen={setVisibility} open={visible} title="Filtros">
      <div className="space-y-2">
        <h4 className="font-bold text-gray-8 text-lg">Conta</h4>
        {mockAccounts.map(item => (
          <button
            className={cn(
              'w-full rounded-2xl p-2 text-left text-gray-8 transition-colors hover:bg-gray-1',
              selectedBankAccountId === item.value && '!bg-gray-2'
            )}
            key={item.value}
            onClick={() => handleSelectBankAcccountId(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="w-52 space-y-2">
        <h4 className="font-bold text-gray-8 text-lg">Ano</h4>
        <div className="flex items-center justify-start">
          <Button
            onClick={() => handleChangeYear(-1)}
            radius="pill"
            size="icon"
            type="button"
            variant="ghostGray"
          >
            <LeftIcon className="text-gray-8" />
          </Button>
          <div className="flex-1 text-center">
            <span className="font-medium text-sm tracking-[-0.5px]">
              {yearSelected}
            </span>
          </div>
          <Button
            onClick={() => handleChangeYear(1)}
            radius="pill"
            size="icon"
            type="button"
            variant="ghostGray"
          >
            <RightIcon className="text-gray-8" />
          </Button>
        </div>
      </div>

      <Button className="w-full" disabled={selectedBankAccountId === null}>
        Aplicar filtros
      </Button>
    </Modal>
  );
}
