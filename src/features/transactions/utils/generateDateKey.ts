export function generateDateKey(month: number) {
  const year = new Date().getFullYear();

  return new Date(year, month).toISOString();
}
