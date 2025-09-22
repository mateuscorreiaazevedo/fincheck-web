import {
  BankIcon,
  Button,
  cn,
  DropdownMenu,
  ExpenseIcon,
  IncomeIcon,
  PlusIcon,
  RoundedIcon,
} from '@/shared';
import { useDashboardFABViewModel } from './viewModel';

export function DashboardFab() {
  const { isOpen, setIsOpen, handleOpenModalCreateBankAccount } =
    useDashboardFABViewModel();

  return (
    <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenu.Trigger asChild>
        <Button
          className="fixed right-4 bottom-4 size-12"
          radius="pill"
          size="icon"
        >
          <PlusIcon
            className={cn(
              '-rotate-180 transition-all duration-500',
              isOpen && 'rotate-45'
            )}
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="end"
        className="z-50 mb-2 w-[280px]"
        side="top"
      >
        <DropdownMenu.Body>
          <DropdownMenu.Item>
            <RoundedIcon className="size-8 bg-red-0 text-red-9">
              <ExpenseIcon className="stroke-[1.5px]" />
            </RoundedIcon>
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <RoundedIcon className="size-8 bg-green-0 text-green-9">
              <IncomeIcon className="stroke-[1.5px]" />
            </RoundedIcon>
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleOpenModalCreateBankAccount}>
            <RoundedIcon className="size-8 bg-blue-0 text-blue-9">
              <BankIcon className="stroke-[1.5px]" />
            </RoundedIcon>
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Body>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
