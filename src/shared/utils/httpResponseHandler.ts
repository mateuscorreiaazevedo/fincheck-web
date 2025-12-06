import { type HttpResponse, HttpStatusCode } from '@/core/types/HttpClient';
import { CustomError } from './customError';

export function httpResponseHandler<T = undefined>(
  response: HttpResponse<T>
): T {
  const { statusCode, data } = response;

  switch (statusCode) {
    case HttpStatusCode.OK:
      return data!;
    case HttpStatusCode.CREATED:
      return data!;
    case HttpStatusCode.NO_CONTENT:
      return data!;
    case HttpStatusCode.BAD_REQUEST:
      throw new CustomError(data?.message ?? '');
    case HttpStatusCode.UNAUTHORIZED:
      throw new CustomError(data?.message ?? '');
    case HttpStatusCode.FORBIDDEN:
      throw new CustomError(data?.message ?? '');
    case HttpStatusCode.NOT_FOUND:
      throw new CustomError(data?.message ?? '');
    case HttpStatusCode.CONFLICT:
      throw new CustomError(data?.message ?? '');
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      throw new CustomError(data?.message ?? '');
    default:
      throw new CustomError(
        'Ocorreu um erro inesperado, por favor tente novamente mais tarde.'
      );
  }
}
