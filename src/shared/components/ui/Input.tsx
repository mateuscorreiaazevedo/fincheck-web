import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/shared/utils';
import { ErrorUI } from './ErrorUI';

type InputProps = ComponentProps<'input'> & {
  name: string;
  error?: string;
  endComponent?: ReactNode;
};

export function Input({
  className,
  error,
  placeholder,
  name,
  id,
  endComponent,
  ...props
}: InputProps) {
  const inputId = id ?? name;

  return (
    <div>
      <div className="relative">
        <input
          data-error={!!error}
          {...props}
          className={cn(
            'peer h-[52px] w-full rounded-lg border border-gray-5 bg-white px-3 pt-4 font-normal text-gray-8 outline-none transition-colors focus:border-gray-8',
            !!error && '!border-red-9 bg-red-0',
            !!endComponent && 'pr-11',
            className
          )}
          id={inputId}
          name={name}
          placeholder=" "
        />
        {!!placeholder && (
          <label
            className={cn(
              'pointer-events-none absolute top-2 left-3 font-normal text-gray-7 text-xs transition-all',
              'peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:left-3 peer-focus:text-xs'
            )}
            htmlFor={inputId}
          >
            {placeholder}
          </label>
        )}
        {!!endComponent && (
          <div className="absolute top-0 right-0 flex h-full w-10 items-center justify-center rounded-r-lg">
            {endComponent}
          </div>
        )}
      </div>
      {!!error && <ErrorUI error={error} />}
    </div>
  );
}
