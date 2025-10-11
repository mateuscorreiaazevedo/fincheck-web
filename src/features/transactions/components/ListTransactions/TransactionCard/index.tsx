import {
  cn,
  DateHelper,
  formatCurrencyHelper,
  VisibilityToggleContent,
} from '@/shared';
import type { IconNames } from '../../../types/IconNames';
import type { Transaction } from '../../../types/Transaction';
import { Icon } from './Icon';

interface TransactionCardProps extends Transaction {
  onOpenEditModal?(): void;
}

export function TransactionCard(transaction: TransactionCardProps) {
  const sign = transaction.type === 'EXPENSE' ? '-' : '+';

  return (
    <button
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-4"
      onClick={transaction.onOpenEditModal}
      type="button"
    >
      <div className="flex flex-1 gap-4">
        <Icon
          icon={(transaction.icon ?? 'other') as IconNames}
          type={transaction.type}
        />
        <div className="flex flex-col">
          <strong className="text-gray-8 tracking-[-0.5px]">
            {transaction.name}
          </strong>
          <span className="text-gray-6 text-sm">
            {DateHelper.formatDdMmYyyy(transaction.date)}
          </span>
        </div>
      </div>
      <div>
        <VisibilityToggleContent>
          <span
            className={cn(
              'font-medium text-green-8 tracking-[-0.5px]',
              transaction.type === 'EXPENSE' && 'text-red-8'
            )}
          >
            {sign} {formatCurrencyHelper(transaction.valueInCents)}
          </span>
        </VisibilityToggleContent>
      </div>
    </button>
  );
}
