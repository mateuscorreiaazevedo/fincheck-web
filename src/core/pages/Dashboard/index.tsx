import {
  BankAccountsResume,
  ModalCreateBankAccount,
  ModalEditBankAccount,
} from '@/features/bankAccounts';
import {
  ListTransactions,
  ModalCreateTransaction,
} from '@/features/transactions';
import { DashboardFab } from './components/Fab';

export default function DashboardPage() {
  return (
    <main className="flex max-h-full-content flex-1 flex-col gap-4 lg:flex-row">
      <aside className="w-full lg:w-1/2">
        <BankAccountsResume />
      </aside>
      <article className="w-full lg:w-1/2">
        <ListTransactions />
      </article>
      <DashboardFab />
      <ModalCreateBankAccount />
      <ModalEditBankAccount />
      <ModalCreateTransaction />
    </main>
  );
}
