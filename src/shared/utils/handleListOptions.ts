import type { SelectOption } from '../types';

interface Keys<T = unknown> {
  label: keyof T;
  value: keyof T;
}

interface IHandleListOptions<T = unknown> {
  data?: T[];
  keys: Keys<T>;
  objectTranslation?: Record<string, string>;
}

export function handleListOptions<T = unknown>({
  data,
  keys,
  objectTranslation,
}: IHandleListOptions<T>): SelectOption[] {
  return data?.length
    ? data.map(item => {
        const label = objectTranslation
          ? objectTranslation[
              item[keys.label] as keyof typeof objectTranslation
            ]
          : (item[keys.label] as string);

        return {
          label,
          value: item[keys.value] as string,
        };
      })
    : [];
}
