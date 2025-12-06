import { useState } from 'react';
import { colorOptions } from '@/features/bankAccounts/constants/colorOptions';
import type { ColorInputOption } from '@/features/bankAccounts/types/ColorInputOption';
import {
  BottomIcon,
  type ClassNames,
  cn,
  DropdownMenu,
  FieldError,
} from '@/shared';
import { ColorDropdownInputIconItem } from './IconItem';

interface ColorDropdownInputProps {
  classNames?: ClassNames;
  error?: string;
  value?: string;
  onChange?(value: string): void;
}

export function ColorDropdownInput({
  classNames,
  error,
  onChange,
  value,
}: ColorDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<ColorInputOption | null>(
    () => {
      if (value) {
        return colorOptions.find(item => item.color === value) ?? null;
      }
      return null;
    }
  );

  function handleSelect(color: ColorInputOption) {
    setSelectedColor(color);
    if (onChange) {
      onChange(color.color);
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenu.Trigger
          className={cn(
            'relative flex h-[52px] w-full items-center justify-between rounded-lg border border-gray-5 bg-white px-3 text-left font-normal text-gray-7 outline-none transition-colors focus:border-gray-8',
            !!error && '!border-red-9 bg-red-0',
            classNames?.trigger
          )}
        >
          Cor
          {!selectedColor && <BottomIcon />}
          {selectedColor && <ColorDropdownInputIconItem {...selectedColor} />}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="z-50 flex w-trigger-dropdown flex-row flex-wrap gap-x-0 gap-y-4 p-2 data-[side=bottom]:mt-2">
          {colorOptions.map(color => {
            return (
              <DropdownMenu.Item
                className="h-12 min-w-20 flex-1 basis-1/4 items-center justify-center"
                key={color.color}
                onSelect={() => handleSelect(color)}
              >
                <ColorDropdownInputIconItem {...color} />
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu>
      {!!error && <FieldError error={error} />}
    </div>
  );
}
