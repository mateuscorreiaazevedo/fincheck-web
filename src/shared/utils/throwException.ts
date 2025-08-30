export function throwException(error: unknown) {
  return (error as Error).message;
}
