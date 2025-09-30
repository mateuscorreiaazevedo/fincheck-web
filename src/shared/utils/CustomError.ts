export class CustomError extends Error {
  constructor(message: string | string[]) {
    const error = Array.isArray(message) ? message[0] : message;
    super(error);
    this.message = error;
  }
}
