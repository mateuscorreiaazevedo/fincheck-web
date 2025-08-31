import { type HttpResponse, HttpStatusCode } from '@/core/types/HttpClient';

export function httpResponseHandler<T = unknown>(response: HttpResponse<T>): T {
  const { statusCode, data } = response;

  const error = Array.isArray(data?.message) ? data.message[0] : data?.message;

  switch (statusCode) {
    case HttpStatusCode.OK:
      return data!;
    case HttpStatusCode.CREATED:
      return data!;
    case HttpStatusCode.NO_CONTENT:
      throw data;
    case HttpStatusCode.BAD_REQUEST:
      throw new Error(error);
    case HttpStatusCode.UNAUTHORIZED:
      throw new Error(error);
    case HttpStatusCode.FORBIDDEN:
      throw new Error(error);
    case HttpStatusCode.NOT_FOUND:
      throw new Error(error);
    case HttpStatusCode.CONFLICT:
      throw new Error(error);
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      throw new Error(error);
    default:
      throw new Error(
        'Ocorreu um erro inesperado, por favor tente novamente mais tarde.'
      );
  }
}
