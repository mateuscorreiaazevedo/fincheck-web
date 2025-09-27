export function transformCurrencyString(value: string) {
  if (!value) {
    return 0;
  }

  const onlyNumbers = value.replace(/\D/g, '');

  return Number.parseInt(onlyNumbers, 10);
}
