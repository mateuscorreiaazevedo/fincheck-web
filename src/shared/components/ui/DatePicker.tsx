import { useState } from 'react';
import type { ClassNames } from '@/shared/types';
import { cn, DateHelper } from '@/shared/utils';
import { Calendar } from './Calendar';
import { FieldError } from './FieldError';
import { Popover } from './Popover';

interface DatePickerProps {
  error?: string;
  classNames?: ClassNames;
  value?: Date;
  onChange?(value: Date): void;
  placeholder?: string;
}

export function DatePicker({
  classNames,
  error,
  value,
  placeholder = 'Data',
}: DatePickerProps) {
  const [date, setDate] = useState(value ?? new Date());

  return (
    <div>
      <Popover>
        <Popover.Trigger asChild>
          <button
            className={cn(
              'relative flex h-[52px] w-full items-center justify-between rounded-lg border border-gray-5 bg-white px-3 pt-4 text-left font-normal outline-none transition-colors focus:border-gray-8',
              !!error && '!border-red-9 bg-red-0',
              classNames?.trigger
            )}
            type="button"
          >
            <span
              className={cn(
                'pointer-events-none absolute top-2 left-3 font-normal text-gray-7 text-xs transition-all',
                'peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:left-3 peer-focus:text-xs'
              )}
            >
              {placeholder}
            </span>
            <span className="text-gray-8 text-sm">
              {DateHelper.formatDdMmYyyy(date.toISOString())}
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Content className="z-50 w-fit p-4">
          <Calendar onChange={setDate} value={date} />
        </Popover.Content>
      </Popover>

      {!!error && <FieldError error={error} />}
    </div>
  );
}
