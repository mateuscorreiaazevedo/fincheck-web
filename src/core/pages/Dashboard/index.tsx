import { BankAccountsResume } from '@/features/bankAccounts';
import { ListTransactions } from '@/features/transactions';

export default function DashboardPage() {
  return (
    <main className="flex max-h-full-content flex-1 flex-col gap-4 lg:flex-row">
      <aside className="w-full lg:w-1/2">
        <BankAccountsResume />
      </aside>
      <article className="w-full lg:w-1/2">
        <ListTransactions />
      </article>
    </main>
  );
}
