import { Button, LeftIcon, Modal, RightIcon } from '@/shared';
import { DropdownBankAccounts } from './DropdownBankAccounts';
import { useModalTransactionFiltersViewModel } from './viewModel';

export function ModalTransactionFilters() {
  const {
    setVisibility,
    visible,
    yearSelected,
    selectedBankAccountId,
    handleSelectBankAcccountId,
    handleChangeYear,
    bankAccounts,
  } = useModalTransactionFiltersViewModel();

  return (
    <Modal onChangeOpen={setVisibility} open={visible} title="Filtros">
      <div className="max-h-44 space-y-2 overflow-y-auto">
        <h4 className="font-bold text-gray-8 text-lg">Conta</h4>
        <DropdownBankAccounts
          data={bankAccounts}
          onSelect={handleSelectBankAcccountId}
          value={selectedBankAccountId}
        />
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

      <Button className="w-full">Aplicar filtros</Button>
    </Modal>
  );
}
