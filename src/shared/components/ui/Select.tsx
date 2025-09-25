// biome-ignore lint/performance/noNamespaceImport: for styling
import * as RdxSelect from '@radix-ui/react-select';
import { useId, useState } from 'react';
import noDataImage from '@/assets/images/no-data.svg';
import type { SelectOption } from '@/shared/types';
import { cn } from '@/shared/utils';
import { FieldError } from './FieldError';
import { BottomIcon } from './icons';

type ClassNames = {
  trigger?: string;
  content?: string;
  item?: string;
};

interface ISelectProps {
  classNames?: ClassNames;
  error?: string;
  placeholder?: string;
  selected?: string;
  onSelect?(value: string): void;
  options: SelectOption[];
}

export function Select({
  classNames,
  error,
  placeholder,
  selected,
  onSelect,
  options,
}: ISelectProps) {
  const [selectedValue, setSelectedValue] = useState(selected);
  const selectId = useId();

  function handleValueChange(value: string) {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  }

  const hasOptions = !!options.length;

  return (
    <div>
      <div className="relative">
        {!!placeholder && (
          <label
            className={cn(
              '-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 z-10 text-gray-7 transition-all',
              !!selectedValue && 'top-2 translate-y-0 text-xs'
            )}
            htmlFor={selectId}
          >
            {placeholder}
          </label>
        )}
        <RdxSelect.Root onValueChange={handleValueChange} value={selectedValue}>
          <RdxSelect.Trigger
            className={cn(
              'relative h-[52px] w-full rounded-lg border border-gray-5 bg-white px-3 pt-4 text-left font-normal text-gray-8 outline-none transition-colors focus:border-gray-8',
              !!error && '!border-red-9 bg-red-0',
              classNames?.trigger
            )}
          >
            <RdxSelect.Value />
            <RdxSelect.Icon className="-translate-y-1/2 absolute top-1/2 right-3">
              <BottomIcon className="translate-y-1 text-gray-8" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content
              align="end"
              className={cn(
                'z-[99] mt-2 overflow-hidden rounded-2xl border border-gray-1 bg-white shadow-default transition-all data-[side=bottom]:animate-slideDownAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-overlayHidden data-[state=open]:animate-overlayShow',
                classNames?.content
              )}
              position="popper"
            >
              <RdxSelect.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white text-gray-8">
                <BottomIcon className="rotate-180" />
              </RdxSelect.ScrollUpButton>
              <RdxSelect.Viewport className="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1 space-y-2 p-2">
                {!hasOptions && (
                  <RdxSelect.Group className="flex flex-col items-center justify-center gap-4">
                    <img
                      alt="no data options"
                      className="w-20"
                      src={noDataImage}
                    />
                    <RdxSelect.Label className="font-medium text-gray-7 text-sm">
                      Nenhuma opção encontrada.
                    </RdxSelect.Label>
                  </RdxSelect.Group>
                )}
                {hasOptions &&
                  options.map(item => (
                    <RdxSelect.Item
                      className={cn(
                        'rounded-lg p-2 text-gray-8 text-sm outline-none transition-all data-[highlighted]:bg-gray-1 data-[state=checked]:bg-teal-0 data-[state=checked]:font-semibold',
                        classNames?.item
                      )}
                      key={item.value}
                      value={item.value}
                    >
                      <RdxSelect.ItemText>{item.label}</RdxSelect.ItemText>
                    </RdxSelect.Item>
                  ))}
              </RdxSelect.Viewport>
              <RdxSelect.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white text-gray-8">
                <BottomIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>
      {!!error && <FieldError error={error} />}
    </div>
  );
}
