import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/shared/utils';
import { LeftIcon, RightIcon } from './icons';

interface CalendarProps {
  value: Date;
  onChange(date: Date): void;
  className?: string;
  maxDate?: Date;
  minDate?: Date;
}

export function Calendar({
  onChange,
  value,
  className,
  maxDate,
  minDate,
}: CalendarProps) {
  return (
    <DayPicker
      className={cn('w-full', className)}
      classNames={{
        root: 'w-fit',
        months: 'relative flex flex-col',
        month: 'flex flex-col w-full',
        nav: 'flex gap-1 w-full absolute inset-x-0 items-center justify-end',
        button_previous:
          'text-teal-8 flex items-center justify-center z-[99] !bg-transparent aria-disabled:opacity-50 select-none',
        button_next:
          'text-teal-8 flex items-center justify-center z-[99] !bg-transparent aria-disabled:opacity-50 select-none',
        month_caption: 'flex items-center justify-start mb-3',
        caption_label:
          'capitalize text-gray-9 text-base font-medium tracking-[-0.41px]',
        weekdays: 'flex',
        weekday: 'uppercase text-xs text-gray-5 font-medium pt-1 flex-1',
        week: 'flex w-full mt-2',
        day: 'text-gray-8 cursor-pointer relative size-10 flex items-center justify-center rounded-full font-medium',
        disabled: 'text-gray-4 cursor-not-allowed !bg-transparent',
        outside: 'text-gray-5/90 font-normal',
        today: 'bg-gray-1 font-bold',
        selected: 'bg-teal-9 !text-white font-medium',
      }}
      components={{
        PreviousMonthButton: PrevButton,
        NextMonthButton: NextButton,
      }}
      disabled={[
        ...(maxDate ? [{ after: maxDate }] : []),
        ...(minDate ? [{ before: minDate }] : []),
      ]}
      formatters={{
        formatCaption: (date, options) => {
          return format(date, 'LLLL yyyy', options);
        },
      }}
      locale={ptBR}
      mode="single"
      onSelect={date => onChange(date ?? new Date())}
      selected={value}
      showOutsideDays
    />
  );
}

function PrevButton(props: ComponentProps<'button'>) {
  return (
    <button type="button" {...props}>
      <LeftIcon />
    </button>
  );
}
function NextButton(props: ComponentProps<'button'>) {
  return (
    <button type="button" {...props}>
      <RightIcon />
    </button>
  );
}
