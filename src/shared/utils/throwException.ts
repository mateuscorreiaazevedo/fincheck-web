export function throwException(error: unknown) {
  const errorLabel = (error as Error).message;

  return errorLabel;
}
