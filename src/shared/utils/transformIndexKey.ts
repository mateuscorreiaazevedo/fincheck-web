export function transformIndexKey(index: number, stringLength = 2) {
  return String(index).padStart(stringLength, '0');
}
