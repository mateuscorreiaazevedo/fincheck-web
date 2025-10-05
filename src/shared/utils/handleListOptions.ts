import type { SelectOption } from '../types';

interface IHandleListOptions<T = unknown> {
  data?: T[];
  keys: {
    label: keyof T;
    value: keyof T;
  };
}

export function handleListOptions<T = unknown>({
  data,
  keys,
}: IHandleListOptions<T>): SelectOption[] {
  return data?.length
    ? data.map(item => ({
        label: item[keys.label] as string,
        value: item[keys.value] as string,
      }))
    : [];
}
