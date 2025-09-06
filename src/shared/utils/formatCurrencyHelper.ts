const UNIT_CENTS_VALUE = 100;

export function formatCurrencyHelper(value: number) {
  const transformValueFromCents = value / UNIT_CENTS_VALUE;

  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(transformValueFromCents);
}
