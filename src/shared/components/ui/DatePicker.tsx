import type { ClassNames } from '@/shared/types';
import { cn } from '@/shared/utils';
import { FieldError } from './FieldError';

interface DatePickerProps {
  error?: string;
  classNames?: ClassNames;
}

export function DatePicker({ classNames, error }: DatePickerProps) {
  return (
    <div>
      <button
        className={cn(
          'relative flex h-[52px] w-full items-center justify-between rounded-lg border border-gray-5 bg-white px-3 text-left font-normal text-gray-7 outline-none transition-colors focus:border-gray-8',
          !!error && '!border-red-9 bg-red-0',
          classNames?.trigger
        )}
        type="button"
      >
        DatePicker
      </button>
      {!!error && <FieldError error={error} />}
    </div>
  );
}
