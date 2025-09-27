import {
  DateHelper,
  formatCurrencyHelper,
  VisibilityToggleContent,
} from '@/shared';
import { Icon } from './Icon';

const MOCK_VALUE = 123_111;

export function TransactionCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
      <div className="flex flex-1 gap-4">
        <Icon icon="other" type="INCOME" />
        <div className="flex flex-col">
          <strong className="text-gray-8 tracking-[-0.5px]">Almoço</strong>
          <span className="text-gray-6 text-sm">
            {DateHelper.formatDdMmYyyy(new Date().toISOString())}
          </span>
        </div>
      </div>
      <div>
        <VisibilityToggleContent>
          <span className="font-medium text-red-8 tracking-[-0.5px]">
            - {formatCurrencyHelper(MOCK_VALUE)}
          </span>
        </VisibilityToggleContent>
      </div>
    </div>
  );
}
