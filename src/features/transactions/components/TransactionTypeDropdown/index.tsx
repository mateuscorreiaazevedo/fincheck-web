import {
  BottomIcon,
  DropdownMenu,
  ExpenseIcon,
  IncomeIcon,
  TransactionsIcon,
} from '@/shared';

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 rounded-2xl px-2 py-3 text-gray-9 transition-all hover:bg-gray-2"
          type="button"
        >
          <TransactionsIcon />
          <span className="font-medium text-gray-8 text-sm tracking-[-0.5px]">
            Transações
          </span>
          <BottomIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start" className="z-50 w-fit">
        <DropdownMenu.Body>
          <DropdownMenu.Item>
            <IncomeIcon />
            Receitas
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <ExpenseIcon />
            Despesas
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <TransactionsIcon />
            Transações
          </DropdownMenu.Item>
        </DropdownMenu.Body>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
