export function transformCurrencyString(value: string | number) {
  if (!value) {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  const onlyNumbers = value.replace(/\D/g, '');

  return Number.parseInt(onlyNumbers, 10);
}
